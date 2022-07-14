import { Application, isHttpError, Status } from "oak";
import db from './db.ts'
import accountRoutes from './routes/accountRoutes.ts'
import projectRoutes from './routes/projectRoutes.ts'

const port = 8000;
const app = new Application();


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

app.use((ctx: any) => {
  ctx.throw(500);
});

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });
   
        
        // https://stackoverflow.com/questions/62363699/how-to-access-form-body-in-oak-deno
        
        // deno run --allow-net ./server/server.ts
        
        //deno run --allow-net --allow-env server.ts