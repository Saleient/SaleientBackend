import { config } from "dotenv";
config();

const env={
    PORT:parseInt(process.env.PORT as string),
    BETTER_AUTH_SECRET:process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL:process.env.BETTER_AUTH_URL,
    DATABASE_URL:process.env.DATABASE_URL,
    RESEND_API_KEY:process.env.RESEND_API_KEY,
    GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID!,
    GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET!,
    NODE_ENV:process.env.NODE_ENV || "development",
}

export default env;