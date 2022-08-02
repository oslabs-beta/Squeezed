// import { Client } from "postgres";
// import { config } from 'https://deno.land/x/dotenv/mod.ts';

// // const env = config();
// // const client = await new Client(env.POSTGRES_URI);
// const client = new Client("postgres://eylrwzmt:oZ-T6w_cEIg_2i9agFo6RHf3OpqA82NU@heffalump.db.elephantsql.com/eylrwzm")
// await client.connect();

// export default client;

import { Client } from "postgres";

let config = "postgres://eylrwzmt:oZ-T6w_cEIg_2i9agFo6RHf3OpqA82NU@heffalump.db.elephantsql.com/eylrwzmt";

const client = new Client(config);

await client.connect();

export default client;