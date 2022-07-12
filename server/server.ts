import { Application } from "oak";
import db from './db.ts'

const port = 8000;
const app = new Application();

app.use(async (ctx) => {
  try {
    const test = await db.queryArray({
      text: 'SELECT * FROM "test";'})
      ctx.response.body = test;
  } catch (err) {
    console.log(err)
  }
})

// app.use((ctx) => {
//   ctx.response.body = "Hello World!";
// });

app.addEventListener('listen', () => {
    console.log(`Listening on localhost:${port}`);
  });
  
await app.listen({ port });



// import * as postgres from "postgres";
// import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
// import { Client } from "postgres";
// // import * as postgres from "https://deno.land/x/postgres@v0.14.0/mod.ts";

// // Get the connection string from the environment variable "DATABASE_URL"
// // const databaseUrl = Deno.env.get("postgres://yuiolgxd:Zq74w9OKmQ8jo4W7CS7NT9flwm8xk1FT@heffalump.db.elephantsql.com/yuiolgxd")!;
// const client = new Client(
//   "postgres://yuiolgxd:Zq74w9OKmQ8jo4W7CS7NT9flwm8xk1FT@heffalump.db.elephantsql.com/yuiolgxd",
// );

// try {
//   await client.connect();
// } catch (e) {
//   if (e instanceof Deno.errors.ConnectionRefused) {
//     console.error(e.message);
//   }
// }

// let config = "postgres://yuiolgxd:Zq74w9OKmQ8jo4W7CS7NT9flwm8xk1FT@heffalump.db.elephantsql.com/yuiolgxd"


// const client = new Client(config);
// await client.connect();
// await client.end();




// https://stackoverflow.com/questions/62363699/how-to-access-form-body-in-oak-deno

// deno run --allow-net ./server/server.ts

//deno run --allow-net --allow-env server.ts