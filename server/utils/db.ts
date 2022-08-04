import { Client } from "postgres";
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const env = config();
const client = await new Client(`${env.POSTGRES_URI}`);

await client.connect();

export default client;

