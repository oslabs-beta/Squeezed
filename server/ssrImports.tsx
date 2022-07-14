import { React, ReactDOMServer } from '../deps.ts';
import App from '../components/App.tsx';
import SideBar from '../components/SideBar.tsx';
import DragAndDrop from '../components/DragAndDrop.tsx';
import Buttons from '../components/Buttons.tsx';
import Customization from '../components/Customization.tsx';
import Preview from '../components/Preview.tsx';

const browserBundlePath: string = '/browser.js';


//<link rel='icon' type='image/png' href='https://i.imgur.com/ALQnrfR.png'>
const html: string = 
  `<html>
    <head>
      <script type="module" src="${browserBundlePath}"></script>
      <link rel="stylesheet" href="style.css" type="text/css">
      <style>* { font-family: Helvetica; }</style>
    </head>
    
    <body>
      <div id="root">${(ReactDOMServer as any).renderToString(<App />)}</div>
    </body>
  </html>`;

const js: string = 
  `import React from "https://dev.jspm.io/react@16.14.0";
  \nimport ReactDOM from "https://dev.jspm.io/react-dom@16.14.0";
  \nconst sideBar = ${SideBar};
  \nconst dragAndDrop = ${DragAndDrop};
  \nconst buttons = ${Buttons};
  \nconst customization = ${Customization};
  \nconst preview = ${Preview};
  \nReactDOM.hydrate(React.createElement(${App}), document.getElementById("root"));`;

export { browserBundlePath, html, js };