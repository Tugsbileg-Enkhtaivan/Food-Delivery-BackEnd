import { Router } from "express";
import { login, register } from "../controller/auth";
import { resetRequest, updatePassword } from "../controller/reset-password";

const authRouter = Router();

authRouter
.post("/register", register)
.post("/login", login)
.post("/reset-password", resetRequest)
.post("/update-password", updatePassword)

export { authRouter };
