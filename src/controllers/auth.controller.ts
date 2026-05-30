import type { Request,Response } from "express";
import { createError } from "../utils/AppError.js";
import { authService } from "../services/auth.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const authController={
    sendLoginOtp:asyncHandler(async function(req:Request,res:Response){
        console.log("Request Reached at /generate-otp : ",req.body)
        const {email}=req.body
        if(!email){
            throw createError.badRequest("Email is required")
        }
        await authService.sendVerificationOtp(email)
        res.status(200).json({
            success:true
        })
    }),
    verifyOtp:asyncHandler(async function(req:Request,res:Response){
        const {email,otp}=req.body;
        if(!email || ! otp){
            throw createError.badRequest("Email and otp is required")
        }
        const data=await authService.verifyLogin(email,otp)
        return res.status(200).json({
            success:true,
            data
        })
    })
}