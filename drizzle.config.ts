import { env } from "better-auth";
import { defineConfig } from "drizzle-kit";



const url =env.DATABASE_URL as string;

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url,
  },
});
