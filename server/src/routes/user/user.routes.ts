import express, { Request, Response } from 'express';
import * as UserController from '../../controllers/user/user.controller';

const userRouter = express.Router();
// const userController = new UserController();

userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:id', UserController.getUserById);
userRouter.delete('/:id', UserController.deleteUser);


export default userRouter;