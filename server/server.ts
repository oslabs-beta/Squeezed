// import React from "https://dev.jspm.io/react@16.13.1";
// import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server";
import { Application, Router  } from "https://deno.land/x/oak/mod.ts";
import { handleRequest } from "../mod.ts";
import { ReactDOMServer, React } from "../dep.ts";
import App from "../components/App.tsx";

const port: number = 8080;
const app = new Application();

router.get("/", (context) => {
  context.response.body = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
    <title>Sanity <-> Deno</title>
</head>
<body >
    <div id="root">${ReactDOMServer.renderToString(<App />)}
    </div>
</body>
</html>`;
});

const app = application(component)
  .static("/static")
  .get("/", () => {
    return response(component).render({ title: "Hello world" });
  });

// app.use((ctx) => {
//   ctx.response.body = handleRequest;
// });



app.addEventListener('listen', () => {
    console.log(`Listening on localhost:${port}`);
  });
  
await app.listen({ port });

//deno run --allow-net server.ts
