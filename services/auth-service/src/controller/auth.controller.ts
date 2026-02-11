import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

const authService = new AuthService();

export class AuthController {

    // POST /auth/login
    async login(req: Request, res: Response) {
        try {
            const result = await authService.loginWithTelegram(req.body);
            res.json(result);
        } catch (error: any) {
            console.error('Login Error:', error);
            if (error.message === 'INVALID_AUTH_DATA') {
                res.status(401).json({ error: 'Invalid Telegram authentication data' });
            } else {
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }

    // POST /auth/refresh
    async refresh(req: Request, res: Response) {
        try {
            const { refreshToken } = req.body;
            if (!refreshToken) {
                return res.status(400).json({ error: 'Refresh token is required' });
            }

            const tokens = await authService.refreshToken(refreshToken);
            res.json(tokens);
        } catch (error: any) {
            console.error('Refresh Error:', error);
            if (error.message === 'SESSION_NOT_FOUND') {
                res.status(401).json({ error: 'Session not found or already revoked' });
            } else {
                res.status(401).json({ error: 'Invalid or expired refresh token' });
            }
        }
    }

    // POST /auth/logout
    async logout(req: Request, res: Response) {
        try {
            const userId = req.jwtPayload!.userId;
            const { refreshToken } = req.body;

            if (!refreshToken) {
                return res.status(400).json({ error: 'Refresh token is required' });
            }

            const result = await authService.logout(userId, refreshToken);
            res.json(result);
        } catch (error: any) {
            console.error('Logout Error:', error);
            if (error.message === 'SESSION_NOT_FOUND') {
                res.status(404).json({ error: 'Session not found or already revoked' });
            } else {
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }
}