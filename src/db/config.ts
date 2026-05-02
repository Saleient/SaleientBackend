import { env } from 'better-auth';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(env.DARTABASE_URL!);
export default db