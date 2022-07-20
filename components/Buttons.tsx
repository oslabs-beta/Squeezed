//import statements
// import React from 'react';
import { React } from '../deps.tsx';
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
  // fetch('http://localhost:8080/home', {
  //   method: 'POST',
  //   headers: {'Content-Type': 'application/json'},
  //   body: JSON.stringify()
  //  })
}

function exportFunc(){
  // this should open up the window directory with deno ???
  // Deno.readDir 
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
        id="loadBtn" style={{backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", width: "90%", fontSize: '20px', fontWeight: 'bolder'}}
        onClick={() => {
          alert("Project loaded");
          load();
        }}
      >
        Load Project
      </button>
      <button style={{backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", width: "90%", fontSize: '20px', fontWeight: 'bolder'}}
        id="clearBtn"
        onClick={() => {
          alert("Canvas cleared");
          clear();
        }}
      >
        Clear Project
      </button>
      <button style={{backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", width: "90%", fontSize: '20px', fontWeight: 'bolder'}}
        id="saveBtn"
        onClick={() => {
          alert("Project Saved");
          save();
        }}
      >
        Save
      </button>
      <button style={{backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", width: "90%", fontSize: '20px', fontWeight: 'bolder'}}
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