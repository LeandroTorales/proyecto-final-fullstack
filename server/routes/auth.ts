import { Router } from "express";
import { loginUser, registerUser, verifyUserWithEmail } from "../controllers/auth";

export const authRouter = Router();

authRouter.post("/register" /* ,[MIDDLEWARES] */, registerUser);
authRouter.patch("/verify" /* ,[MIDDLEWARES] */, verifyUserWithEmail);
authRouter.post("/login" /* ,[MIDDLEWARES] */, loginUser);
