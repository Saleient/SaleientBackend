import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";

const authRouter=Router()

authRouter.post("/generate-otp",authController.sendLoginOtp)
authRouter.post("/verify-otp",authController.verifyOtp)


export default authRouter