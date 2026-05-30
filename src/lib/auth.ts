import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../db/config.js";
import { emailOTP } from "better-auth/plugins";
import { sendEmail } from "../config/email.js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  plugins: [
    emailOTP({
      expiresIn: 300,
      async sendVerificationOTP({ email, otp }: { email: string; otp: string }) {
        await sendEmail({
          to: email,
          subject: "Your verification code",
          html: `
            <h1>${otp}</h1>
            <p>Expires in 5 minutes</p>
          `,
        });
      },
    }),
  ],
});
