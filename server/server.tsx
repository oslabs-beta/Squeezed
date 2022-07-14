// // import React from "https://dev.jspm.io/react@16.13.1";
// // import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server";
// import { Application, Router  } from "https://deno.land/x/oak/mod.ts";
// // import { handleRequest } from "../mod.tsx";
// import { ReactDOMServer, React } from "../deps.ts";
// import App from "../components/App.tsx";
// import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
// // import { Application } from '../deps.ts';


// const app: Application = new Application();
// const port: number = 8080;
// const router = new Router();

// {/* <div id="root">${(ReactDOMServer as any).renderToString(<App/>)}</div> */}

// console.log('hi')
// //deno run --allow-net server/server.ts
// async function handleRequest(request: Request):Promise<Response> {
//   const { pathname } = new URL(request.url);


//   // Check if the request is for style.css.
//   if (pathname.startsWith("/style.css")) {
//     // Read the style.css file from the file system.
//     const file = await Deno.readFile("./style.css");
//     // Respond to the request with the style.css file.
//     return new Response(file, {
//       headers: {
//         "content-type": "text/css",
//       },
//     });
//   }

//   // <div id="root">${(ReactDOMServer as any).renderToString(<App/>)}</div>
//   // <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
//   // <link rel="stylesheet" type="text/css" href="style.css">
//   return new Response(
//     `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Squeezed</title>
//     </head>
//     <body >
//       <div>DIV HERE</div>
//     </body>
//     </html>`,
//     {
//       headers: {
//         "content-type": "text/html; charset=utf-8",
//       },
//     },
//   );
// }

// app.use(router.routes());
// app.use(router.allowedMethods());

// // router.get("/", handleRequest);

// app.use(async (ctx, next) => {
//   const filePath= ctx.request.url.pathname;
//   if (filePath === '/style.css'){
//     ctx.response.type = 'text/css';
//   }
// })

// app.addEventListener('listen', () => {
//     console.log(`Listening on localhost:${port}`);
//   });
  
// await app.listen({ port });

// // function handlePage(ctx: any) {
// //     try {
// //       //const body = (ReactDOMServer as any).renderToString(<App/>)
// //        ctx.response.body =  `<!DOCTYPE html>
// //       <html lang="en">
// //       <head>
// //           <meta charset="UTF-8">
// //           <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //           <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
// //           <link rel="stylesheet" type="text/css" href="style.css">
// //           <title>Squeezed</title>
// //       </head>
// //       <body>
// //         <div id="root">${(ReactDOMServer as any).renderToString(<App/>)}</div>
// //       </body>
// //       </html>`;
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }
// // }
// {/* <link rel="stylesheet" type="text/css" href="style.css"> */}
//   // <div id="root">DIV ROOT</div>
// // <DragDropContext>
// //         <div class='container'>
// //             <nav>NavBar</nav>
// //             <section id='sideBar'>sideBar</section> 
// //             <Draggable>
// //             <section id='dragAndDrop'>dragAndDrop</section> 
// //             </Draggable>
// //             <section id='preview'>preview</section> 
// //             <section id='customization'>customization</section> 
// //             <section id='buttons'>buttons</section> 
// //         </div>
// //         </DragDropContext>

// serve(handleRequest);

import { Application, Router } from '../deps.ts';

const app = new Application();
const PORT = 8000;

const router = new Router();
router
  .get('/', (ctx) => {
    ctx.response.body = 'Home'
  })
  .get('/about', (ctx) => {
    ctx.response.body = 'About'
  })

app.use(router.routes());
app.use(router.allowedMethods())

app.addEventListener('listen', () => {
  console.log(`Server started on port ${PORT}`);
})

await app.listen({port: PORT});
