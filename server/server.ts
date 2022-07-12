import { Application } from "https://deno.land/x/oak/mod.ts";
const port = 8080;
const app = new Application();
// import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { handleRequest } from "../mod.ts"


app.use((ctx) => {
  ctx.response.body = handleRequest;
});

// app.use('/', (req, res, next) => {
//   res.type("text/html").send(html);
// });

app.addEventListener('listen', () => {
    console.log(`Listening on localhost:${port}`);
  });
  
await app.listen({ port });

//deno run --allow-net server.ts