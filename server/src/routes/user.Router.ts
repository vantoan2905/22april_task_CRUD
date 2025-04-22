import express from "express";
import * as userController from "../controllers/user.controller";

const user_router = express.Router();

user_router.post("/register", userController.register);
user_router.post("/login", userController.login);
user_router.get("/", userController.getAllUsers);

export default user_router;
