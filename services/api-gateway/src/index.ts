import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from '@teledrive/shared-config';
import { globalRateLimiter } from './middleware/rate-limiter';
import { requestLogger } from './middleware/request-logger';
import { errorHandler } from './middleware/error-handler';
import { mountProxyRoutes } from './proxy/proxy-setup';

const app = express();

// ── Security headers ──────────────────────────────────────
app.use(helmet());

// ── CORS ──────────────────────────────────────────────────
app.use(cors({
    origin: config.env === 'production'
        ? ['https://your-frontend-domain.com'] // tighten in production
        : '*',
    credentials: true,
}));

// ── Body parsing (only for non-proxied endpoints like /health) ───
// NOTE: We do NOT use express.json() globally because http-proxy-middleware
// needs to forward the raw request body to downstream services.  If we
// parsed the body here the proxy would re-serialize it and potentially
// corrupt binary uploads.  Downstream services parse JSON themselves.

// ── Request logger (assigns X-Request-Id) ─────────────────
app.use(requestLogger);

// ── Global rate limiter ───────────────────────────────────
app.use(globalRateLimiter);

// ── Health check (gateway itself) ─────────────────────────
app.get('/health', (_req, res) => {
    res.status(200).json({
        status: 'ok',
        service: 'api-gateway',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    });
});

// ── Service info (lists registered routes) ────────────────
app.get('/gateway/info', (_req, res) => {
    // Lazy-import to avoid circular dependency
    const { serviceRoutes } = require('./config/service-registry');
    res.json({
        service: 'api-gateway',
        version: '1.0.0',
        routes: serviceRoutes.map((r: any) => ({
            prefix: r.prefix,
            target: r.target,
            isPublic: r.isPublic,
        })),
    });
});

// ── Mount proxy routes to downstream services ─────────────
mountProxyRoutes(app);

// ── 404 catch-all for unmatched routes ────────────────────
app.use((_req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'The requested endpoint does not exist.',
    });
});

// ── Global error handler (must be last) ───────────────────
app.use(errorHandler);

// ── Start ─────────────────────────────────────────────────
const port = config.ports.apiGateway;
app.listen(port, () => {
    console.log(`\n🚀 API Gateway listening on port ${port}`);
    console.log(`   Environment: ${config.env}`);
    console.log(`   Health:      http://localhost:${port}/health`);
    console.log(`   Info:        http://localhost:${port}/gateway/info\n`);
});
