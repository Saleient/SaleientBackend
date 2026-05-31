import { Resend } from "resend";
import env from "./env.js";
import { createError } from "../utils/AppError.js";

const resend = new Resend(env.RESEND_API_KEY);

async function sendEmail({to,subject,html}:{to:string,subject:string,html:string}){
    const {data,error}=await resend.emails.send({
        from: "Saleient <noreply@yadavram.com.np>",
        to:to,
        subject:subject,
        html:html
    })
    if(error){
        console.log("Error while sending email : ",error)
        throw createError.badRequest("Error while sending verification mail.")
    }
    console.log("Email Sent Successfully.")
}

export async function sendVerificationOTP({ email, otp }: { email: string; otp: string }) {
  try {
    await sendEmail({
      to: email,
      subject: "Your verification code",
      html: `
        <h1>${otp}</h1>
        <p>Expires in 5 minutes</p>
      `,
    });
  } catch (err) {
    console.error("Email send failed:", err);
    throw createError.internal("Verification email could not be sent");
  }
}
