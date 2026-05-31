import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../db/config.js";
import { emailOTP } from "better-auth/plugins";
import { sendVerificationOTP } from "../config/email.js";
import * as schema from "../db/schema.js";
import env from "../config/env.js";
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  trustedOrigins:[
    "http://localhost:5173"
  ],
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  plugins: [
    emailOTP({
      expiresIn: 300,
      async sendVerificationOTP({
        email,
        otp,
      }: {
        email: string;
        otp: string;
      }) {
        await sendVerificationOTP({
          email: email,
          otp,
        });
      },
    }),
  ],
});
