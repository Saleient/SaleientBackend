import { auth } from "../lib/auth.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const authService={
    async sendVerificationOtp (email:string) {
        await auth.api.sendVerificationEmail({
            body:{email},
        })
    },
    async verifyLogin(email:string,password:string){
        const result=await auth.api.signInEmail({
            body:{email,password}
        })
        return result
    }
}