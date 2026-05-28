import { Resend } from "resend";
import env from "./env.js";

const resend = new Resend(env.RESEND_API_KEY);

export async function sendEmail({to,subject,html}:{to:string,subject:string,html:string}){
    const {data,error}=await resend.emails.send({
        from: "Saleient <noreply@yadavram.com.np>",
        to:to,
        subject:subject,
        html:html
    })
    if(error){
        console.log("Error while sending email : ",error)
    }
    console.log("Email Sent Successfully.")
}
