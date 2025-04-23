import { Request, Response } from 'express';
import * as authService from '../../services/user/auth.service';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
  console.log('register');
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    res.json(result);
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
  console.log('login');
};

export const forgotPassword = async (req: Request, res: Response) => {
  // try {
  //   const { email } = req.body;
  //   await authService.forgotPassword(email);
  //   res.json({ message: 'Reset password link sent to email (if registered)' });
  // } catch (error: any) {
  //   res.status(400).json({ message: error.message });
  // }
  console.log('forgotPassword');
};

export const resetPassword = async (req: Request, res: Response) => {
  // try {
  //   const { token, password } = req.body;
  //   await authService.resetPassword(token, password);
  //   res.json({ message: 'Password reset successfully' });
  // } catch (error: any) {
  //   res.status(400).json({ message: error.message });
  // }
  console.log('resetPassword');
};