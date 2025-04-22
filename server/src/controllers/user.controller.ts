import { Request, Response } from "express";
import * as userService from "../services/user.Service";

export const register = (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;
    const user = userService.register(username, password, email);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const login = (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = userService.login(username, password);
    res.json(user);
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};

export const getAllUsers = (req: Request, res: Response) => {
  const users = userService.listUsers();
  res.json(users);
};
