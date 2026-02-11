import { Router, IRouter } from 'express';
import { AuthController } from '../controller/auth.controller';
import { validate, authenticate } from '@teledrive/shared-utils';
import { TelegramLoginSchema, RefreshTokenSchema } from '../schemas/auth.schema';
import { User } from '../models/user.models';

const router: IRouter = Router();
const authController = new AuthController();

// Protected: get current user (validates JWT)
router.get('/me', authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.jwtPayload!.userId);
        if (!user || !user.isActive) return res.status(404).json({ error: 'User not found' });
        res.json({ ...user.toObject(), id: user._id });
    } catch {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Login with Validation
router.post(
    '/login', 
    validate(TelegramLoginSchema), 
    authController.login.bind(authController)
);

// Refresh with Validation
router.post(
    '/refresh', 
    validate(RefreshTokenSchema), 
    authController.refresh.bind(authController)
);

export default router;