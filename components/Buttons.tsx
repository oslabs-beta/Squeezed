//import statements
import React from 'react';
// import { useState, useEffect } from "react"


export default function Buttons(){

// const [error, setError] = useState(null);
// const [isLoaded, setIsLoaded] = useState(false);
// const [items, setItems] = useState([]);

// useEffect(() => {
//   fetchResult()
// }, []);
// state

function load(){
console.log('loaded')
}


function clear(){

}

function save(){
  fetch('http://localhost:8080/home', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify()
   })
}

function exportFunc(){
  document.getElementById('exportBtn').addEventListener('click', async () => {
    const out = {};
    const dirHandle = await window.showDirectoryPicker();  
    await handleDirectoryEntry( dirHandle, out );
    console.log( out );
  
  async function handleDirectoryEntry( dirHandle, out ) {
    for await (const entry of dirHandle.values()) {
      if (entry.kind === "file"){
        const file = await entry.getFile();
        out[ file.name ] = file;
      }
      if (entry.kind === "directory") {
        const newHandle = await dirHandle.getDirectoryHandle( entry.name, { create: false } );
        const newOut = out[ entry.name ] = {};
        await handleDirectoryEntry( newHandle, newOut );
      }
    }
  }
  });
}

// const buttonsStyle = { 
//   gridArea: 'buttons',
//   backgroundColor: 'rgb(225, 0, 255)',
//   border: '2px solid white',
//   fontSize: '30px'
// } as const;


return (
  <main>
    <div id="buttonContainer">
      <button
        id="loadBtn"
        onClick={() => {
          alert("Project loaded");
          load();
        }}
      >
        Load Project
      </button>
      <button
        id="clearBtn"
        onClick={() => {
          alert("Canvas cleared");
          clear();
        }}
      >
        Clear Project
      </button>
      <button
        id="saveBtn"
        onClick={() => {
          alert("Project Saved");
          save();
        }}
      >
        Save
      </button>
      <button
        id="exportBtn"
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          // alert("Project Exported");
          console.log('clicked')
          exportFunc();
        }}
      >
        Export
      </button>
    </div>
  </main>
);
}