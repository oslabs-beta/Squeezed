import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { DragDropContext, Droppable, Draggable } from "https://esm.sh/react-beautiful-dnd@13.1.0";

export async function handleRequest(request: Request): Promise<Response> {
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
      <DragDropContext>
        <div class='container'>
            <nav>NavBar</nav>
            <section id='sideBar'>sideBar</section> 
            <Draggable>
            <section id='dragAndDrop'>dragAndDrop</section> 
            </Draggable>
            <section id='preview'>preview</section> 
            <section id='customization'>customization</section> 
            <section id='buttons'>buttons</section> 
        </div>
        </DragDropContext>
      </body>
    </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );
}

serve(handleRequest);