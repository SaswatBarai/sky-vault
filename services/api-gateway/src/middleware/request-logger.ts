import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

/**
 * Attaches a unique X-Request-Id to every inbound request and logs
 * method + url + status + duration once the response finishes.
 */
export function requestLogger(req: Request, res: Response, next: NextFunction): void {
    const requestId = (req.headers['x-request-id'] as string) || uuidv4();
    req.headers['x-request-id'] = requestId;
    res.setHeader('X-Request-Id', requestId);

    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        const log = {
            requestId,
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            duration: `${duration}ms`,
            ip: req.ip,
            userAgent: req.headers['user-agent'],
            userId: req.jwtPayload?.userId || 'anonymous',
        };

        // Colour-code by status range
        if (res.statusCode >= 500) {
            console.error('[gateway]', JSON.stringify(log));
        } else if (res.statusCode >= 400) {
            console.warn('[gateway]', JSON.stringify(log));
        } else {
            console.log('[gateway]', JSON.stringify(log));
        }
    });

    next();
}
