![Squeezed logo mark-03](https://user-images.githubusercontent.com/102705687/182709526-e656d5a0-445a-42a9-a241-9ee23e3af181.png)
# Squeezed
Prototyping tool for the Freshest Deno framework

Squeezed is a charming web application prototyping tool for rendering the islands of your Fresh app. 
Squeezed uses a drag-and-drop canvas that enables users to see how their codebase is laid out, see the island being rendered dynamically, and edit HTML elements. 
HTML elements can be readily modified, and the code preview will adapt to your unique requirements. 
# Let's Get Started!
First, make sure to download deno on your local machine. Squeezed uses deno v1.24.1. For more information and instructions, head to: https://deno.land/

After installing Deno, linux users will have to update their bashrc file to gain access to Deno commands globally. Mac users will have to run tese commands in every new instance of their terminal:

`export DENO_INSTALL="/$HOME/.deno"`

`export PATH="$DENO_INSTALL/bin:$PATH"`

Next, run this command in your terminal: 

`deno install -A --unstable -n deno-create-react-app https://deno.land/x/create_react_app/mod.ts`

More information for how Squeezed is working can be found here: https://deno.land/x/create_react_app@v0.1.2

Fork this repo, use git clone in your code editor, and run this comman inside your terminal and your done! 

`deno-create-react-app run & deno run --allow-env --allow-read --allow-net server/server.ts`

Squeezed should be running on your localhost:8000 with full funtionality. 
Make sure you have set up a working database as well as used the two lines of command exporting the proper paths for Deno commands if you are using MAC.

# How to Use?

You can create an account by imputing a new username, password, and email or sign in to an existing account in your database.

From there, you can load in new projects that are stored in your database or start working on a fresh project right away. When you save progress on a new project, you will be promted to input a project name. 
If you try to save progress whil working on an existing project, the database will just update your previous work instead of asking for a new project name.

Clear prject will only clear the HTML elements that your project currently uses but will keep you in the same project that you have loaded. 
Start new project will take you out of your current project and into a new one as well as clear all HTML elements.
Deleting a project will clear your elements and delete the project inside your databasse.


To add HTML elements to your project, just drag and drop from the list on the right to the main area. 
You can now select elements by clicking on each one in the list as well as rearrange them by draggin them and sropping them in the desired position.
To add styling attributes to your HTML elements, select the intended element, input the value to the corresponding attribute in the stylying area, and click submit.

You should see your HTML elements update inside the code preview!
You can also see what that code will render by clicking on island preview at the top right.
To use the code that is produced, just click on the clipboard at the bottom of the code preview window and paste the code wherever it is needed!
