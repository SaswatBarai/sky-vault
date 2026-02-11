import rateLimit from 'express-rate-limit';
import { config } from '@teledrive/shared-config';
import { Request } from 'express';

/**
 * Global rate limiter.
 *
 *  - Unauthenticated requests are keyed by IP.
 *  - Authenticated requests are keyed by userId (set by authenticate middleware).
 *
 * Uses the windowMs / maxRequests values from shared-config (.env).
 */
export const globalRateLimiter = rateLimit({
    windowMs: config.rateLimit.windowMs,   // default 60 000 ms (1 min)
    max: config.rateLimit.maxRequests,      // default 100 requests per window
    standardHeaders: true,                  // Return rate-limit info in RateLimit-* headers
    legacyHeaders: false,                   // Disable X-RateLimit-* headers
    keyGenerator: (req: Request): string => {
        // Prefer userId when available (set by authenticate middleware)
        if (req.jwtPayload?.userId) {
            return `user:${req.jwtPayload.userId}`;
        }
        return `ip:${req.ip}`;
    },
    message: {
        error: 'Too Many Requests',
        message: 'You have exceeded the rate limit. Please try again later.',
    },
});

/**
 * Stricter limiter specifically for auth endpoints (login, refresh).
 * Prevents brute-force attempts.
 */
export const authRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,  // 15-minute window
    max: 20,                    // 20 attempts per window
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req: Request): string => `auth:${req.ip}`,
    message: {
        error: 'Too Many Requests',
        message: 'Too many authentication attempts. Please try again in 15 minutes.',
    },
});
