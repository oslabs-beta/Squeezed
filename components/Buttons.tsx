//import statements
// import React from 'react';
import { React } from '../deps.tsx';
// import { useState, useEffect } from "react"


export default function Buttons(props:any){

// const [error, setError] = useState(null);
// const [isLoaded, setIsLoaded] = useState(false);
// const [items, setItems] = useState([]);
const {elementsArr, setElementsArr, currentElement, setCurrentElement} = props;
// const {inputText, setInputText, textAlign, setTextAlign, textDecoration, setTextDecoration, backgroundColor, setBackgroundColor, color, setColor, margin, setMargin,width, setWidth, height, setHeight, padding, setPadding, }= props;
// useEffect(() => {
//   fetchResult()
// }, []);
// state

function deleteData(){
  fetch('/home', {
    method: 'DELETE',
 })
 .then((data) => data.json())
 .catch((err) => console.log(err));
}


function clear(){
  setElementsArr([]);
  setCurrentElement('');
}

function save(){
  fetch('/home', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ elementsArr })
 })
 .then((data) => data.json())
 .catch((err) => console.log(err));
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
      <button style={{backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", width: "90%", fontSize: '20px', fontWeight: 'bolder'}}
        id="clearBtn"
        onClick={() => {
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
      <button
        id="loadBtn" style={{backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", width: "90%", fontSize: '20px', fontWeight: 'bolder'}}
        onClick={() => {
          alert("Project deleted");
          deleteData();
        }}
      >
        Delete Project
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