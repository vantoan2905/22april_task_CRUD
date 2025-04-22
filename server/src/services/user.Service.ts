import { v4 as uuidv4 } from "uuid";
import { User } from "../models/User/user.Model";
// import * as userRepo from "../repositories/user/user.repositories";

export const register = (username: string, password: string, email: string) => {
  // if (userRepo.findUserByUsername(username)) {
  //   throw new Error("User already exists");
  // }
  // const newUser: User = {
  //   id: uuidv4(),
  //   username,
  //   password,
  //   email
  // };
  // return userRepo.createUser(newUser);
  return []
};

export const login = (username: string, password: string) => {
  // const user = userRepo.findUserByUsername(username);
  // if (!user || user.password !== password) {
  //   throw new Error("Invalid credentials");
  // }
  // return user;
  return [];
};

export const listUsers = () => {
  // return userRepo.getAllUsers();
  return [];
};
