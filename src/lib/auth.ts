import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../db/config.js";
import { emailOTP } from "better-auth/plugins";
import { sendVerificationOTP } from "../config/email.js";
import * as schema from "../db/schema.js";
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
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
