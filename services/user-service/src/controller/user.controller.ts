import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

const userService = new UserService();

export class UserController {

    async getMe(req: Request, res: Response) {
        const userId = req.jwtPayload!.userId;
        const user = await userService.getById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    }

    async updateMe(req: Request, res: Response) {
        const userId = req.jwtPayload!.userId;
        const { firstName, lastName, username, photoUrl } = req.body;
        const user = await userService.updateProfile(userId, { firstName, lastName, username, photoUrl });
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    }

    async getQuota(req: Request, res: Response) {
        const userId = req.jwtPayload!.userId;
        const quota = await userService.getStorageQuota(userId);
        if (!quota) return res.status(404).json({ error: 'User not found' });
        res.json(quota);
    }
}
