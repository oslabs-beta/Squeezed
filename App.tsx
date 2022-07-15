// import { React } from './deps.tsx';
// import  SideBar  from './components/SideBar.tsx';
// // import DragAndDrop from './components/DragAndDrop.tsx';
// // import Customization from './components/Customization.tsx';
// // import Preview from './components/Preview.tsx';
// // import Buttons from './components/Buttons.tsx';


// const App = () => {
  
//   // not sure if we need this and react router, going with just react router for now
//   // const [page, setPage] = (React as any).useState('home');
//   const sideBarStyle = { 
//     gridArea: 'side',
//     backgroundColor: 'blue',
//     border: '2px solid black',
//     fontSize: '30px',
//   } as const;

//   const dragAndDropStyle = { 
//     gridArea: 'dd',
//     backgroundColor: 'red',
//     border: '2px solid blue',
//     fontSize: '30px',
  
//   } as const;

//   const customizationStyle = { 
//     gridArea: 'cust',
//     backgroundColor: 'orange',
//     border: '2px solid purple',
//     fontSize: '30px',
//   } as const;

//   const previewStyle = { 
//     gridArea: 'prev',
//     backgroundColor: 'yellow',
//     border: '2px solid black',
//     fontSize: '30px',
//   } as const;

//   const buttonsStyle = { 
//     gridArea: 'buttons',
//     backgroundColor: 'green',
//     border: '2px solid orange',
//     fontSize: '30px'
//   } as const;

//   const styles = {
//     display: 'grid',
//     backgroundColor: 'black',
//     gridTemplate: 'auto / repeat(11, 1fr)',
//     border: '2px solid pink',
//     gridTemplateAreas:
//     `"side dd dd dd dd dd prev prev prev prev prev"
//     "side dd dd dd dd dd prev prev prev prev prev"
//     "side dd dd dd dd dd prev prev prev prev prev"
//     "side dd dd dd dd dd prev prev prev prev prev"
//     "side dd dd dd dd dd prev prev prev prev prev"
//     "side dd dd dd dd dd prev prev prev prev prev"
//     "side dd dd dd dd dd prev prev prev prev prev"
//     "side dd dd dd dd dd prev prev prev prev prev"
//     "side dd dd dd dd dd prev prev prev prev prev"
//     "side dd dd dd dd dd prev prev prev prev prev"
//     "side dd dd dd dd dd prev prev prev prev prev"
//     "side dd dd dd dd dd prev prev prev prev prev"
//     "side dd dd dd dd dd prev prev prev prev prev"
//     "side dd dd dd dd dd prev prev prev prev prev"
//     "side dd dd dd dd dd prev prev prev prev prev"
//     "side dd dd dd dd dd prev prev prev prev prev"
//     "side cust cust cust cust cust prev prev prev prev prev"
//     "side cust cust cust cust cust prev prev prev prev prev"
//     "side cust cust cust cust cust prev prev prev prev prev"
//     "side cust cust cust cust cust prev prev prev prev prev"
//     "side cust cust cust cust cust prev prev prev prev prev"
//     "side cust cust cust cust cust prev prev prev prev prev"
//     "buttons cust cust cust cust cust prev prev prev prev prev"
//     "buttons cust cust cust cust cust prev prev prev prev prev"
//     "buttons cust cust cust cust cust prev prev prev prev prev"
//     "buttons cust cust cust cust cust prev prev prev prev prev"
//     "buttons cust cust cust cust cust prev prev prev prev prev"`,
//     height: '100%',
//     width: '100%'
//  } as const;

 

//   return (
//     // <div className="app" style={styles}>
//     <div className="app">
//       {/* <div style={sideBarStyle}><SideBar /></div> */}
//       <SideBar />
//       {/* <div style={dragAndDropStyle}><DragAndDrop /></div>
//       <div style={customizationStyle}><Customization /></div>
//       <div style={previewStyle}><Preview /></div> */}
//       {/* <div style={buttonsStyle}><Buttons /></div> */}
//       hello
//     </div>
//   );
// };

// export default App;




// function App() {
//   const [ dragOver, setDragOver ] = React.useState(false); 
//   const handleDragOverStart = () => setDragOver(true);
//   const handleDragOverEnd = () => setDragOver(false);
  
//   const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
//       event.dataTransfer.setData('text', event.currentTarget.id);
//   }
  
//   const enableDropping = (event: React.DragEvent<HTMLDivElement>) => { 
//       event.preventDefault();
//   }
      
//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//       const id = event.dataTransfer.getData('text');
//       console.log(`Somebody dropped an element with id: ${id}`);
//       setDragOver(false);
//   }
//    var window: any;
//   // const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     // console.log(event.target);
//     // console.log(event.currentTarget);
//     // console.log('clicked')
//   //   document.getElementById('exportBtn').addEventListener('click', async () => {
//   //   const out = {};
//   //   const dirHandle = await window.showDirectoryPicker();  
//   //   await handleDirectoryEntry( dirHandle, out );
//   //   console.log( out );
  
//   // async function handleDirectoryEntry( dirHandle, out ) {
//   //   for await (const entry of dirHandle.values()) {
//   //     if (entry.kind === "file"){
//   //       const file = await entry.getFile();
//   //       out[ file.name ] = file;
//   //     }
//   //     if (entry.kind === "directory") {
//   //       const newHandle = await dirHandle.getDirectoryHandle( entry.name, { create: false } );
//   //       const newOut = out[ entry.name ] = {};
//   //       await handleDirectoryEntry( newHandle, newOut );
//   //     }
//   //   }
//   // }
//   // });
//   // };
//   return (
//       <div>
//           <div id="d1" draggable="true" onDragStart={handleDragStart}>Drag me</div>
//           <div id="d2" draggable="true" onDragStart={handleDragStart}>... Or me!</div>
//           <div
//               onDragOver={enableDropping}
//               onDrop={handleDrop}
//               onDragEnter={handleDragOverStart}
//               onDragLeave={handleDragOverEnd}
//               style={ dragOver ? {fontWeight: 'bold', background: 'red'} : {} }
//           >
//               Drop Zone
//           </div> 
            
//       </div>
//   );
// }

// export default App;

