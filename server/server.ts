import { Application, isHttpError, Status, Router} from "oak";
import db from './utils/db.ts';
import accountRoutes from './routes/accountRoutes.ts';
import projectRoutes from './routes/projectRoutes.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const port = 8080;
const app: Application = new Application();

const router = new Router();

//Configures the Access-Control-Allow-Origin CORS header.  
app.use(oakCors({origin: "http://localhost:8000", methods: "POST, GET, DELETE"}));

app.use(router.routes());
app.use(router.allowedMethods());
app.use(accountRoutes.routes());
app.use(accountRoutes.allowedMethods());
app.use(projectRoutes.routes());
app.use(projectRoutes.allowedMethods());
        
//Request Body parser
app.use(async (ctx) => {
const reqBody = await ctx.request.body().value;
console.log(reqBody, typeof reqBody);
ctx.response.status = 200;
});

app.addEventListener("error", (evt) => {
console.log(evt.error);
});

app.use((ctx: any) => {
ctx.throw(500);
});

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

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });
   

