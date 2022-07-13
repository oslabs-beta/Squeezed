import { Application, isHttpError, Status } from "oak";
import db from './db.ts'
import accountRoutes from './routesss/accountRoutes.ts'
import projectRoutes from './routesss/projectRoutes.ts'

const port = 8000;
const app = new Application();

// app.use(async (ctx) => {
//   ctx.response.body = "hello world"
//   const data = ctx.request.body({
//     contentTypes: {
//       text: ["application/javascript"],
//     },
//   })
//   const output = await data.value
//   console.log(output)
// })

app.use(accountRoutes.routes());
app.use(accountRoutes.allowedMethods());
app.use(projectRoutes.routes());
app.use(projectRoutes.allowedMethods());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      switch (err.status) {
        case Status.NotFound:
          break;
          default:
          }
        } else {
          throw err;
        }
      }
});

app.addEventListener("error", (evt) => {
  console.log(evt.error);
});

app.use((ctx) => {
  ctx.throw(500);
});

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
        
        // app.use((ctx) => {
        //   ctx.response.body = {message: "hello world"}
        // });
        // router.get("/", async (ctx: any) => {
        //   ctx.response.body = await db.queryArray('SELECT * FROM accounts')
        // }
        // )
        
        
        
        // https://stackoverflow.com/questions/62363699/how-to-access-form-body-in-oak-deno
        
        // deno run --allow-net ./server/server.ts
        
        //deno run --allow-net --allow-env server.ts