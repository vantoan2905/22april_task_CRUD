import { Router } from 'express';
import userRouter from './user/user.routes';
// // import authRoutes from 
// // import productRoutes from 
import health_check_router from './system/health_check.router';
import { authRouter } from './user/auth.routes';



import { from } from 'rxjs';
const router = Router();

router.use('/users', userRouter);       // => /api/users
router.use('/health_check', health_check_router); // => /api/health_check
router.use('/auth', authRouter);        // => /api/auth
// router.use('/products', productRoutes); // => /api/products

export default router;
