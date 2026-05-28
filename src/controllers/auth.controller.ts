import { betterAuth } from "better-auth";
import { magicLink } from "better-auth/plugins";  

export const auth = betterAuth({
    plugins: [
        magicLink({ 
            sendMagicLink: async ({ email, token, url, metadata }, ctx) => {
                
            } 
        }) 
    ]
})