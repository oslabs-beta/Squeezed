import { React } from '../deps.ts';
import SideBar from './SideBar.tsx';
import DragAndDrop from './DragAndDrop.tsx';
import Customization from './Customization.tsx';
import Preview from './Preview.tsx';
import Buttons from './Buttons.tsx';

const App = () => {
  
  // not sure if we need this and react router, going with just react router for now
  // const [page, setPage] = (React as any).useState('home');
  const sideBarStyle = { 
    gridArea: 'side',
    backgroundColor: 'blue',
    border: '2px solid black',
    fontSize: '30px',
  } as const;

  const dragAndDropStyle = { 
    gridArea: 'dd',
    backgroundColor: 'red',
    border: '2px solid blue',
    fontSize: '30px',
  
  } as const;

  const customizationStyle = { 
    gridArea: 'cust',
    backgroundColor: 'orange',
    border: '2px solid purple',
    fontSize: '30px',
  } as const;

  const previewStyle = { 
    gridArea: 'prev',
    backgroundColor: 'yellow',
    border: '2px solid black',
    fontSize: '30px',
  } as const;

const buttonsStyle = { 
  gridArea: 'buttons',
  backgroundColor: 'green',
  border: '2px solid orange',
  fontSize: '30px'
} as const;

  const styles = {
    display: 'grid',
    backgroundColor: 'black',
     gridTemplate: 'auto / repeat(7, 1fr)',
    border: '2px solid pink',
    gridTemplateAreas:
    `"side dd dd dd prev prev prev"
    "side dd dd dd prev prev prev"
    "side dd dd dd prev prev prev"
    "side dd dd dd prev prev prev"
    "side dd dd dd prev prev prev"
    "side dd dd dd prev prev prev"
    "side dd dd dd prev prev prev"
    "side dd dd dd prev prev prev"
    "side dd dd dd prev prev prev"
    "side dd dd dd prev prev prev"
    "side dd dd dd prev prev prev"
    "side dd dd dd prev prev prev"
    "side dd dd dd prev prev prev"
    "side dd dd dd prev prev prev"
    "side dd dd dd prev prev prev"
    "side dd dd dd prev prev prev"
    "side cust cust cust prev prev prev"
    "side cust cust cust prev prev prev"
    "side cust cust cust prev prev prev"
    "side cust cust cust prev prev prev"
    "side cust cust cust prev prev prev"
    "side cust cust cust prev prev prev"
    "buttons cust cust cust prev prev prev"
    "buttons cust cust cust prev prev prev"
    "buttons cust cust cust prev prev prev"
    "buttons cust cust cust prev prev prev"
    "buttons cust cust cust prev prev prev"`,
    height: '100%',
    width: '100%'
 } as const;

 

  return (
    <div className="app" style={styles}>
      <div style={sideBarStyle}><SideBar /></div>
      <div style={dragAndDropStyle}><DragAndDrop /></div>
      <div style={customizationStyle}><Customization /></div>
      <div style={previewStyle}><Preview /></div>
      <div style={buttonsStyle}><Buttons /></div>
    </div>
  );
};

export default App;


// const App = () => {

//   const SideBar = styled.div `
//     gridArea: side;
//     backgroundColor: rgb(255, 123, 0);
//     border: 2px solid black;
//     fontSize: 30px;


//   const Container = styled.div` 
//     display: grid;
//     backgroundColor: black;
//     gridTemplate: auto / repeat(7, 1fr);
//     border: 2px solid pink;
//     gridTemplateAreas:
//     "side dd dd dd dd prev prev"
//     "side dd dd dd dd prev prev"
//     "side dd dd dd dd prev prev"
//     "side dd dd dd dd prev prev"
//     "side dd dd dd dd prev prev"
//     "side dd dd dd dd prev prev"
//     "side dd dd dd dd prev prev"
//     "side dd dd dd dd prev prev"
//     "side dd dd dd dd prev prev"
//     "side dd dd dd dd prev prev"
//     "side dd dd dd dd prev prev"
//     "side dd dd dd dd prev prev"
//     "side dd dd dd dd prev prev"
//     "side dd dd dd dd prev prev"
//     "side dd dd dd dd prev prev"
//     "side dd dd dd dd prev prev"
//     "buttons cust cust cust cust prev prev"
//     "buttons cust cust cust cust prev prev"
//     "buttons cust cust cust cust prev prev"
//     "buttons cust cust cust cust prev prev"
//     "buttons cust cust cust cust prev prev"
//     "buttons cust cust cust cust prev prev"
//     "buttons cust cust cust cust prev prev"
//     "buttons cust cust cust cust prev prev"
//     "buttons cust cust cust cust prev prev"
//     "buttons cust cust cust cust prev prev"
//     "buttons cust cust cust cust prev prev";
//     height: 100%;
//     width: 100%;


//  `;

//   return (

//   <Container>
//     <SideBar>SideBar</SideBar>
//   </Container>
//   )
// };

// export default App;