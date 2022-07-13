//import statements
import React from 'react';



export default function Buttons(){
// state

function load(){

}


function clear(){

}

function save(){

}

function exportFunc(){

}



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