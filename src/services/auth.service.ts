import { auth } from "../lib/auth.js";

export const authService={
    async sendVerificationOtp (email:string) {
        await auth.api.sendVerificationOTP({
            body:{ email, type: "sign-in" },
        })
    },
    async verifyLogin(email:string,otp:string){
        const result=await auth.api.signInEmailOTP({
            body:{ email, otp }
        })
        return result
    }
}