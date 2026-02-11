import { Router, IRouter } from 'express';
import { authenticate } from '@teledrive/shared-utils';
import { UserController } from '../controller/user.controller';

const router: IRouter = Router();
const userController = new UserController();

router.use(authenticate);

router.get('/me', userController.getMe.bind(userController));
router.patch('/me', userController.updateMe.bind(userController));
router.get('/me/quota', userController.getQuota.bind(userController));

export default router;
