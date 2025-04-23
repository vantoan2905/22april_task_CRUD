import { Request, Response } from 'express';
// import userService from '../../services/user.Service';
import { logger } from '../../middlewares/logger';

export const getAllUsers = async (req: Request, res: Response) => {
  // try {
  //   const users = await userService.getAllUsers();
  //   res.json(users);
  // } catch (error: any) {
  //   res.status(500).json({ message: error.message });
  // }
  console.log('getAllUsers');
};

export const getUserById = async (req: Request, res: Response) => {
  // try {
  //   const user = await userService.getUserById(req.params.id);
  //   res.json(user);
  // } catch (error: any) {
  //   res.status(500).json({ message: error.message });
  // }
  console.log('getUserById');
};


export const updateUser = async (req: Request, res: Response) => {
  // try {
  //   const user = await userService.updateUser(req.params.id, req.body);
  //   res.json(user);
  // } catch (error: any) {
  //   res.status(500).json({ message: error.message });
  // }
  console.log('updateUser');
};

export const deleteUser = async (req: Request, res: Response) => {
  // try {
  //   const user = await userService.deleteUser(req.params.id);
  //   res.json(user);
  // } catch (error: any) {
  //   res.status(500).json({ message: error.message });
  // }
  console.log('deleteUser');
};