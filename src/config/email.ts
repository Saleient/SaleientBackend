import { Resend } from "resend";
import env from "./env.js";

const resend = new Resend(env.RESEND_API_KEY);

async function sendAuthEmail() {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["rayramkrishna0206@gmail.com"],
    subject: "Hello World",
    html: "<strong>It works!</strong>",
  });
  if(error){
    return console.error({error})
  }
}

sendAuthEmail()