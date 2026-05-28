import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../db/config.js";
import { magicLink } from "better-auth/plugins";
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    plugins:[
        magicLink({
            sendMagicLink:async({email,url,token})=>{
                
            }
        })
    ]
});