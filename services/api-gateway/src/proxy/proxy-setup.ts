import { Express, Request, Response, NextFunction } from 'express';
import { createProxyMiddleware, Options } from 'http-proxy-middleware';
import { authenticate } from '@teledrive/shared-utils';
import { serviceRoutes, ServiceRoute } from '../config/service-registry';
import { isCircuitOpen, recordSuccess, recordFailure, getBreaker } from '../middleware/circuit-breaker';
import { authRateLimiter } from '../middleware/rate-limiter';

/**
 * Registers one http-proxy-middleware route per service defined in the
 * service registry.
 *
 *  1. Checks the circuit breaker — rejects immediately if open.
 *  2. Applies JWT authentication for protected routes.
 *  3. Applies auth-specific rate limiter to auth endpoints.
 *  4. Rewrites the gateway prefix to the downstream path.
 *  5. Forwards the request via http-proxy-middleware.
 */
export function mountProxyRoutes(app: Express): void {
    for (const route of serviceRoutes) {
        // Eagerly initialise the breaker so it's ready before the first request
        getBreaker(route.name);

        const handlers: any[] = [];

        // ── Circuit-breaker guard ─────────────────────────────
        handlers.push(circuitBreakerGuard(route));

        // ── Auth-specific rate limiter ────────────────────────
        if (route.name === 'auth-service') {
            handlers.push(authRateLimiter);
        }

        // ── JWT authentication for protected routes ───────────
        if (!route.isPublic) {
            handlers.push(authenticate);
        }

        // ── Proxy middleware ──────────────────────────────────
        const proxyOptions = buildProxyOptions(route);
        handlers.push(createProxyMiddleware(proxyOptions));

        app.use(route.prefix, ...handlers);

        console.log(
            `[gateway] ${route.prefix}  →  ${route.target}${route.rewriteTo}  (${route.isPublic ? 'public' : 'protected'})`,
        );
    }
}

// ─── Helpers ──────────────────────────────────────────────────

/**
 * Rejects immediately with 503 if the downstream service's circuit is open.
 */
function circuitBreakerGuard(route: ServiceRoute) {
    return (_req: Request, res: Response, next: NextFunction) => {
        if (isCircuitOpen(route.name)) {
            return res.status(503).json({
                error: 'Service Unavailable',
                message: `${route.name} is temporarily unavailable. Please try again later.`,
                retryAfter: 30,
            });
        }
        next();
    };
}

/**
 * Build http-proxy-middleware config for a single service route.
 *
 * Path rewriting:
 *   Gateway receives  →  /api/v1/auth/login        (matched by prefix "/api/v1/auth")
 *   Express strips prefix, so req.url inside middleware is "/login"
 *   pathRewrite adds the downstream mount point:  /login  →  /auth/login
 */
function buildProxyOptions(route: ServiceRoute): Options {
    return {
        target: route.target,
        changeOrigin: true,

        // Because Express strips the matched prefix (/api/v1/auth),
        // the proxy only sees the remainder (e.g. "/login").
        // We prepend the downstream mount point so the service gets "/auth/login".
        pathRewrite: route.stripPrefix
            ? (_path: string, req: any) => `${route.rewriteTo}${req.url}`
            : undefined,

        // Propagate headers and track circuit breaker health
        on: {
            proxyReq: (proxyReq, req: any) => {
                const requestId = req.headers['x-request-id'];
                if (requestId) {
                    proxyReq.setHeader('X-Request-Id', requestId);
                }

                // Forward decoded JWT payload as headers so downstream
                // services don't need to re-verify the token
                if (req.jwtPayload) {
                    proxyReq.setHeader('X-User-Id', req.jwtPayload.userId);
                    proxyReq.setHeader('X-User-Role', req.jwtPayload.role);
                }
            },

            proxyRes: (_proxyRes, _req: any) => {
                recordSuccess(route.name);
            },

            error: (err, _req: any, res: any) => {
                recordFailure(route.name);
                console.error(`[gateway] Proxy error for ${route.name}:`, err.message);

                if (!res.headersSent) {
                    res.status(502).json({
                        error: 'Bad Gateway',
                        message: `Failed to reach ${route.name}`,
                    });
                }
            },
        },
    };
}
