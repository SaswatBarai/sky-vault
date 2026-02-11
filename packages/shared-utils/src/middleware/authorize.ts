import { Request, Response, NextFunction } from 'express';

/**
 * Role-based authorization middleware.
 * Must be used AFTER the `authenticate` middleware (which sets req.jwtPayload).
 * 
 * Usage: authorize('admin')  or  authorize('admin', 'user')
 */
export const authorize = (...allowedRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.jwtPayload) {
            return res.status(401).json({ error: 'Unauthorized', message: 'Authentication required' });
        }

        if (!allowedRoles.includes(req.jwtPayload.role)) {
            return res.status(403).json({ error: 'Forbidden', message: 'Insufficient permissions' });
        }

        next();
    };
};
