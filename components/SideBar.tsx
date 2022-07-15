//import statements
// import React from 'react';
// import "../styles.css";
import { React } from '../deps.tsx';

export default function SideBar(this: any){
   this.state = {
    htmlElements : ['div', 'paragraph', 'h1', 'form', 'button', 'img']
  };

  const sideBarStyle = { 
    gridArea: 'side',
    backgroundColor: 'rgb(255, 123, 0)',
    border: '2px solid white',
    fontSize: '30px',
  } as const;
  interface Props {
    name: string;
    className?: string;
    onClick: (e: Event) => void;
  }

function move(){
console.log('ugh')
return
}

const handleDrag = (event: React.DragEvent<HTMLAnchorElement>) => {
  console.log(event.currentTarget);
  alert("dragged");
}
  return (
    <main className='container' >
      <ul className="sideBar">
        {/* {this.state.htmlElements.map((el: any) => (
          <li className="sidebar-button" />
        ))} */}
        {/* <Button 
  variant="contained" 
  href="/required" 
  onDrag={handleDrag}
>
  Drag Event
</Button> */}
        <button className="sidebar-button" draggable="true" onClick={() => move()}> DIV</button>
        <button className="sidebar-button" draggable="true" onClick={() => {move()}}> BUTTON</button>
        <button className="sidebar-button" draggable="true" onClick={() => {move()}}> FORM</button>
        <button className="sidebar-button" draggable="true" onClick={() => {move()}}> IMAGE</button>
        <button className="sidebar-button" draggable="true" onClick={() => {move()}}> PARAGRAPH</button>
        <button className="sidebar-button" draggable="true" onClick={() => {move()}}> HEADER</button>
        <button className="sidebar-button" draggable="true" onClick={() => {move()}}> LIST</button>
      </ul>
    </main>
  );
}

// const SideBar = () => {
//   return(
//     <div>SIDEBAR</div>
//   )
// }

// export default SideBar;