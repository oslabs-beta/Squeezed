//import statements
import React from 'react';
// import "../styles.css";

export default function SideBar(this: any){
  //  this.state = {
  //   htmlElements : ['div', 'paragraph', 'h1', 'form', 'button', 'img']
  // };

  // const sideBarStyle = { 
  //   gridArea: 'side',
  //   backgroundColor: 'rgb(255, 123, 0)',
  //   border: '2px solid white',
  //   fontSize: '30px',
  // } as const;

  return (
    <main className='container' >
      <ul className="sideBar">
        {/* {this.state.htmlElements.map((el: any) => (
          <li className="sidebar-button" />
        ))} */}
        <li className="sidebar-button"> LIST ITEM</li>
      </ul>
    </main>
  );
}