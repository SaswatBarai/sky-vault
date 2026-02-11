import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

const userService = new UserService();

export class UserController {

    // GET /users/me — get current authenticated user
    async getMe(req: Request, res: Response) {
        const userId = req.jwtPayload!.userId;
        const user = await userService.getById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    }

    // PATCH /users/me — update current user profile
    async updateMe(req: Request, res: Response) {
        const userId = req.jwtPayload!.userId;
        const { firstName, lastName, username, photoUrl } = req.body;
        const user = await userService.updateProfile(userId, { firstName, lastName, username, photoUrl });
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    }

    // GET /users/me/quota — get current user's storage quota
    async getQuota(req: Request, res: Response) {
        const userId = req.jwtPayload!.userId;
        const quota = await userService.getStorageQuota(userId);
        if (!quota) return res.status(404).json({ error: 'User not found' });
        res.json(quota);
    }

    // GET /users/admin/list — admin: list all users with pagination + search
    async listUsers(req: Request, res: Response) {
        try {
            const page = parseInt(req.query.page as string) || 1;
            const limit = Math.min(parseInt(req.query.limit as string) || 20, 100); // cap at 100
            const search = req.query.search as string | undefined;

            const result = await userService.listUsers(page, limit, search);
            res.json(result);
        } catch (error) {
            console.error('List Users Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // GET /users/admin/:id — admin: get any user by ID
    async getUser(req: Request, res: Response) {
        try {
            const user = await userService.getAnyUserById(req.params.id);
            if (!user) return res.status(404).json({ error: 'User not found' });
            res.json(user);
        } catch (error) {
            console.error('Get User Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
