import express, { Request, Response } from 'express';
import * as authController from '../../controllers/user/auth.controller';
// import { logger } from '../../middlewares/logger';

export const authRouter = express.Router();




authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/forgot-password', authController.forgotPassword);

