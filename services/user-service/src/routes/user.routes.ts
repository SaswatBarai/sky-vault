import { Router, IRouter } from 'express';
import { authenticate, authorize } from '@teledrive/shared-utils';
import { UserController } from '../controller/user.controller';

const router: IRouter = Router();
const userController = new UserController();

// All user routes require authentication
router.use(authenticate);

// ─── Regular User Endpoints ──────────────────────
router.get('/me', userController.getMe.bind(userController));
router.patch('/me', userController.updateMe.bind(userController));
router.get('/me/quota', userController.getQuota.bind(userController));

// ─── Admin Endpoints ────────────────────────────
router.get('/admin/list', authorize('admin'), userController.listUsers.bind(userController));
router.get('/admin/:id', authorize('admin'), userController.getUser.bind(userController));

export default router;
