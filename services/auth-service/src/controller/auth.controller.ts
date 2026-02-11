import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

const authService = new AuthService();

export const loginWithTelegram = async (req: Request, res: Response) => {
    try {
        const result = await authService.loginWithTelegram(req.body);
        res.json(result);
    } catch (err) {
        res.status(401).json({ error: (err as Error).message });
    }
};

export const refreshToken = async (req: Request, res: Response) => {
    try {
        const { refreshToken: token } = req.body;
        const tokens = await authService.refreshToken(token);
        res.json(tokens);
    } catch (err) {
        res.status(401).json({ error: (err as Error).message });
    }
};
