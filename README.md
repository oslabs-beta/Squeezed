![Squeezed logo mark-03](https://user-images.githubusercontent.com/102705687/182752019-090f7375-f0ad-477b-b590-20acb11e73f8.png)
# Squeezed
Prototyping tool for the Freshest Deno framework

Squeezed is a charming web application prototyping tool for rendering the islands of your Fresh app. 
Squeezed uses a drag-and-drop canvas that enables users to see how their codebase is laid out, see the island being rendered dynamically, and edit HTML elements. 
HTML elements can be readily modified, and the code preview will render live updates as you modify your code.
# Let's Get Started!
First, make sure to download deno on your local machine. Squeezed uses deno v1.24.1. For more information and instructions, head to: https://deno.land/

After installing Deno, Linux users will have to update their bashrc file to gain access to Deno commands globally. Mac users will have to run these commands in every new instance of their terminal:

`export DENO_INSTALL="/$HOME/.deno"`

`export PATH="$DENO_INSTALL/bin:$PATH"`

Next, run this command in your terminal: 

`deno install -A --unstable -n deno-create-react-app https://deno.land/x/create_react_app/mod.ts`

For More information on Create React App, visit: https://deno.land/x/create_react_app@v0.1.2

Fork and clone this repo,  run this command inside your terminal, and you’re done! 

`deno-create-react-app run & deno run --allow-env --allow-read --allow-net server/server.ts`

Squeezed should be running on your localhost:8000 with full functionality. 
Make sure your environment is set up by setting up a working database as well as running the proper paths to enable Deno commands globally. 

# How to Use?

You can create an account by entering a new username, password, and email, or sign in to an existing account in your database.

From there, you can load new projects that are stored in your database or start working on a fresh project right away. When you save progress on a new project, you will be prompted to input a project name. 
If you try to save progress while working on an existing project, the database will just update your previous work instead of asking for a new project name.

Clear project will only clear the HTML elements that your project currently uses but will keep you in the same project that you have loaded. 
Starting a new project will take you out of your current project and into a new one as well as clear all HTML elements.
Deleting a project will clear your elements and delete the project inside your database.


To add HTML elements to your project, just drag and drop from the list on the right to the main area. 
You can now select elements by clicking on each one in the list as well as rearrange them by dragging them and dropping them in the desired position.
To add styling attributes to your HTML elements, select the intended element, input the value to the corresponding attribute in the styling area, and click submit.

You should see your HTML elements update inside the code preview!
You can also see what that code will render by clicking on island preview at the top right.
To use the code that is produced, just click on the clipboard at the bottom of the code preview window and paste the code wherever it is needed!	

# Future Tasks: 
Adding drag and drop nesting functionality for html elements
Squeezed currently relies on a third-party library and requires a local download to ensure full functionality. Future plans including updating the codebase to ensure compatibility when deploying
We hope to migrate from a browser application to a desktop application once a  tool that supports Deno browser applications in javascript is released

If you’d like to contribute to squeezed or have any feedback, please let us know!

#Tech Stack:
Deno, TypeScript, PostgreSQL, React (Hooks and Router), oak, Dex, BCrypt

#License
Distributed under the MIT License. See LICENSE for more information.

#The Engineers
Alexa Roberts: GitHub | Linkedin

Carol Xia: GitHub | Linkedin

James Bui: GitHub | Linkedin

Wayne Tsai: GitHub | Linkedin


