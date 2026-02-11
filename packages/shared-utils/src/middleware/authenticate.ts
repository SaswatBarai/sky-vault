import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '@teledrive/shared-config';
import type { IJwtPayload } from '@teledrive/shared-types';

declare global {
    namespace Express {
        interface Request {
            jwtPayload?: IJwtPayload;
        }
    }
}

/**
 * Token validation middleware. Expects Authorization: Bearer <accessToken>.
 * On success sets req.jwtPayload (userId, role, version). On invalid/missing returns 401.
 */
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized', message: 'Missing or invalid Authorization header' });
    }
    const token = authHeader.slice(7);
    try {
        const payload = jwt.verify(token, config.jwt.secret) as IJwtPayload;
        req.jwtPayload = payload;
        next();
    } catch {
        return res.status(401).json({ error: 'Unauthorized', message: 'Invalid or expired token' });
    }
};
