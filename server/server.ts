import { Application, isHttpError, Status } from "oak";
import db from './db.ts'
import accountRoutes from './routes/accountRoutes.ts'
import projectRoutes from './routes/projectRoutes.ts'

const port = 8080;
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
        
        // deno run --allow-net --allow-env ./server/server.ts
        
        //deno run --allow-net --allow-env server.ts




// import { Application, Router } from '../deps.ts';

// const app = new Application();
// const PORT = 8000;

// const router = new Router();
// router
//   .get('/', (ctx) => {
//     ctx.response.body = 'Home'
//   })
//   .get('/about', (ctx) => {
//     ctx.response.body = 'About'
//   })

// app.use(router.routes());
// app.use(router.allowedMethods())

// app.addEventListener('listen', () => {
//   console.log(`Server started on port ${PORT}`);
// })

// await app.listen({port: PORT});