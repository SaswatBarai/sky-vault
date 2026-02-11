import { Request, Response, NextFunction } from 'express';

/**
 * Global error handler — must be registered LAST with `app.use(errorHandler)`.
 *
 * Catches anything that falls through (proxy failures, unhandled rejections,
 * unexpected middleware errors) and returns a consistent JSON envelope.
 */
export function errorHandler(
    err: Error & { statusCode?: number; code?: string },
    _req: Request,
    res: Response,
    _next: NextFunction,
): void {
    const statusCode = err.statusCode || 500;
    const message =
        statusCode === 500
            ? 'Internal Server Error'
            : err.message || 'Something went wrong';

    // Log full stack in dev, only message in production
    if (process.env.NODE_ENV !== 'production') {
        console.error('[gateway:error]', err);
    } else {
        console.error('[gateway:error]', err.message);
    }

    res.status(statusCode).json({
        error: true,
        statusCode,
        message,
        ...(err.code ? { code: err.code } : {}),
    });
}
