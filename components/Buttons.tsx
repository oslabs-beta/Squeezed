//import statements
import React from 'react';



export default function Buttons(){
// state

function load(){
console.log('loaded')
}


function clear(){

}

function save(){
  
}

function exportFunc(){

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
        onClick={() => {
          alert("Project Exported");
          exportFunc();
        }}
      >
        Export
      </button>
    </div>
  </main>
);
}