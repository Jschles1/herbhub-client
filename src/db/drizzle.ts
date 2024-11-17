import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

config({ path: '.env' }); // or .env.local

const client = postgres(process.env.SUPABASE_URL!, { prepare: false });
const sqlDb = drizzle(client);

export default sqlDb;
