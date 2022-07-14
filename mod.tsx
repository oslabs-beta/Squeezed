// import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
// // import { DragDropContext, Droppable, Draggable } from "https://esm.sh/react-beautiful-dnd@13.1.0";
import { ReactDOMServer, React } from "./deps.ts";
import App from "./components/App.tsx";
// import { Application } from './deps.ts';
// const app: Application = new Application();

// export async function handleRequest(request: Request): Promise<Response> {
//   const { pathname } = new URL(request.url);

//   // This is how the server works:
//   // 1. A request comes in for a specific asset.
//   // 2. We read the asset from the file system.
//   // 3. We send the asset back to the client.

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
  
//   // app.use(async (ctx, next) => {
//   //   const filePath= ctx.request.url.pathname;
//   //   if (filePath === '/style.css'){
//   //     ctx.response.type = 'text/css';
//   //   }
//   // })
//   // <div id="root">${(ReactDOMServer as any).renderToString(<App/>)}</div>
//   return new Response(
//     `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// 		<link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
// 		<link rel="stylesheet" type="text/css" href="style.css">
//     <title>Sanity <-> Deno</title>
//     </head>
//     <body >

//     </body>
//     </html>`,
//     {
//       headers: {
//         "content-type": "text/html; charset=utf-8",
//       },
//     },
//   );
// }


//   // <div id="root">DIV ROOT</div>
// // <DragDropContext>
//         <div class='container'>
//             <nav>NavBar</nav>
//             <section id='sideBar'>sideBar</section> 
//             <Draggable>
//             <section id='dragAndDrop'>dragAndDrop</section> 
//             </Draggable>
//             <section id='preview'>preview</section> 
//             <section id='customization'>customization</section> 
//             <section id='buttons'>buttons</section> 
//         </div>
// //         </DragDropContext>

// serve(handleRequest);




//RESTARTING 
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

async function handleRequest(request: Request): Promise<Response> {
  const { pathname } = new URL(request.url);

  // This is how the server works:
  // 1. A request comes in for a specific asset.
  // 2. We read the asset from the file system.
  // 3. We send the asset back to the client.

  // Check if the request is for style.css.
  if (pathname.startsWith("/style.css")) {
    // Read the style.css file from the file system.
    const file = await Deno.readFile("./style.css");
    // Respond to the request with the style.css file.
    return new Response(file, {
      headers: {
        "content-type": "text/css",
      },
    });
  }

  return new Response(
    `<html>
      <head>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div id="root">${(ReactDOMServer as any).renderToString(<App/>)}</div>
      </body>
    </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );
}
{/* <div class='container'>
          
          <section id='sideBar'>sideBar</section> 
          <section id='dragAndDrop'>dragAndDrop</section> 
          <section id='preview'>preview</section> 
          <section id='customization'>customization</section> 
          <section id='buttons'>buttons</section> 
        </div> */}
serve(handleRequest);

        // <div class='container'>

        //     <section id='sideBar'>sideBar</section> 
        //     <section id='dragAndDrop'>dragAndDrop</section> 
        //     <section id='preview'>preview</section> 
        //     <section id='customization'>customization</section> 
        //     <section id='buttons'>buttons</section> 
        // </div>