import { React } from '../deps.tsx';
import SideBar from './SideBar.tsx';
import DragAndDrop from './DragAndDrop.tsx';
import Customization from './customization/Customization.tsx';
import Preview from './preview/Preview.tsx';
import Buttons from './Buttons.tsx';



interface Props{
  elementsArr: string[];
  setElementsArr: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  // currentElement: string;
}

// function h(this: any, props: any) {
  
  
  
  const App = () => {
  //   this.state = {
  //     // populate state fields according to props fields
  
  //   };
  // }
  
  //Styling
  const sideBarStyle = { 
    gridArea: 'side',
  } as const;
  
  

  
  const customizationStyle = { 
    gridArea: 'cust',
    backgroundColor: "#2D3033",
    borderImage: "linear-gradient(180deg, rgb(0,143,104), rgb(250,224,66)) 1",
    borderWidth: '2px',
    borderStyle: 'solid',    
    fontSize: '30px',
  } as const;
  
  const previewStyle = { 
    gridArea: 'prev',
    backgroundColor: "#2D3033",
    borderImage: "linear-gradient(180deg, rgb(0,143,104), rgb(250,224,66)) 1",
    borderWidth: '2px',
    borderStyle: 'solid',    fontSize: '30px',


  } as const;
  
  const buttonsStyle = { 
    gridArea: 'buttons',
    backgroundColor: "#2D3033",
    borderImage: "linear-gradient(180deg, rgb(0,143,104), rgb(250,224,66)) 1",
    borderWidth: '2px',
    borderStyle: 'solid',    
    fontSize: '30px',

  } as const;
  
  const styles = {
    display: 'grid',
    backgroundColor: 'black',
    color: '#68EDA7',
    gridTemplate: 'auto / repeat(11, 1fr)',
    gridTemplateAreas:
    `"side side side side side side prev prev prev prev prev"
    "side side side side side side prev prev prev prev prev"
    "side side side side side side prev prev prev prev prev"
    "side side side side side side prev prev prev prev prev"
    "side side side side side side prev prev prev prev prev"
    "side side side side side side prev prev prev prev prev"
    "side side side side side side prev prev prev prev prev"
    "side side side side side side prev prev prev prev prev"
    "side side side side side side prev prev prev prev prev"
    "side side side side side side prev prev prev prev prev"
    "side side side side side side prev prev prev prev prev"
    "side side side side side side prev prev prev prev prev"
    "side side side side side side prev prev prev prev prev"
    "side side side side side side prev prev prev prev prev"
    "buttons cust cust cust cust cust prev prev prev prev prev"
    "buttons cust cust cust cust cust prev prev prev prev prev"
    "buttons cust cust cust cust cust prev prev prev prev prev"
    "buttons cust cust cust cust cust prev prev prev prev prev"
    "buttons cust cust cust cust cust prev prev prev prev prev"
    "buttons cust cust cust cust cust prev prev prev prev prev"
    "buttons cust cust cust cust cust prev prev prev prev prev"
    "buttons cust cust cust cust cust prev prev prev prev prev"`,
    width: '100%',
  } as const;
  
  //State
  const [elementsArr, setElementsArr] = React.useState<string[]>([]);
  const [currentElement, setCurrentElement] = React.useState<string>('drag into here');
  
  return (
    
    <div className="app" style={styles}>
      <div style={sideBarStyle}><SideBar elementsArr={elementsArr} setElementsArr={setElementsArr} currentElement={currentElement} setCurrentElement={setCurrentElement} /></div>
      <div style={customizationStyle}><Customization elementsArr={elementsArr} setElementsArr={setElementsArr} currentElement={currentElement} setCurrentElement={setCurrentElement}/></div>
      <div style={previewStyle}><Preview elementsArr={elementsArr} setElementsArr={setElementsArr} /></div>
      <div style={buttonsStyle}><Buttons /></div>
    </div>
  );
};

export default App;

// green #68EDA7
//yellow #FFE958

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