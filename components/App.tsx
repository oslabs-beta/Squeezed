import { React, Link } from '../deps.tsx';
import SideBar from './SideBar.tsx';
import DragAndDrop from './DragAndDrop.tsx';
import Customization from './customization/Customization.tsx';
import Preview from './preview/Preview.tsx';
import Buttons from './Buttons.tsx';
import Signup from './Signup.tsx';
import Login from './Signup.tsx';

interface Props{
  elementsArr: string[];
  setElementsArr: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  // currentElement: string;
}
  
const App = () => {

  //Styling
  const sideBarStyle = { 
    gridArea: 'side',
  } as const;
  
  const customizationStyle = { 
    gridArea: 'cust',
    backgroundColor: "#2D3033",
    borderColor: "rgb(250,224,66)",
    borderWidth: '3px',
    borderStyle: 'solid',    
    fontSize: '30px',
  } as const;
  
  const previewStyle = { 
    gridArea: 'prev',
    backgroundColor: "#2D3033",
    fontSize: '30px',
    borderRight: "3px solid #68EDA7",
    borderButtom: "3px solid #FFE958",  
  } as const;
  
  const buttonsStyle = { 
    gridArea: 'buttons',
    backgroundColor: "#2D3033",
    borderLeft: "3px solid #FFE958",
    borderButtom: "3px solid #FFE958",
    fontSize: '30px'
  } as const;
  
  const styles = {
    display: 'grid',
    backgroundColor: 'black',
    borderButtom: "3px solid #FFE958",
    color: '#68EDA7',
    gridTemplate: 'auto / repeat(15, 1fr)',
    gridTemplateAreas:
    `"side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"`,
    width: '100%',
    height: '100%'
  } as const;

  //State
  const [elementsArr, setElementsArr] = React.useState<any[]>([]);
  const [currentElement, setCurrentElement] = React.useState<any>('drag into here');
  const [project, setProject] = React.useState<any>('');
  const [user, setUser] = React.useState<any>('');

  //Customization state
  // const [inputText, setInputText] = (React as any).useState('');
  // const [textAlign, setTextAlign] = (React as any).useState('');
  // const [textDecoration, setTextDecoration] = (React as any).useState('');
  // const [backgroundColor, setBackgroundColor] = (React as any).useState('');
  // const [color, setColor] = (React as any).useState('');
  // const [margin, setMargin] = (React as any).useState('');
  // const [width, setWidth] = (React as any).useState('');
  // const [height, setHeight] = (React as any).useState('');
  // const [padding, setPadding] = (React as any).useState('');
  // const [fontSize, setFontSize] = (React as any).useState('');
  // const [className, setClassName] = (React as any).useState('');
  // const [border, setBorder] = (React as any).useState('');

  const [inputText, setInputText] = (React as any).useState('');
  const [textAlign, setTextAlign] = (React as any).useState('');
  const [textDecoration, setTextDecoration] = (React as any).useState('');
  const [backgroundColor, setBackgroundColor] = (React as any).useState('');
  const [color, setColor] = (React as any).useState('');
  const [margin, setMargin] = (React as any).useState('');
  const [width, setWidth] = (React as any).useState('');
  const [height, setHeight] = (React as any).useState('');
  const [padding, setPadding] = (React as any).useState('');
  const [fontSize, setFontSize] = (React as any).useState('');
  const [className, setClassName] = (React as any).useState('');

  console.log("user", user);
  // console.log("app session storage:", sessionStorage);
  console.log("elementsArr in app", elementsArr);
  //set user based on session storage
  React.useEffect(() => {
    setUser(sessionStorage.getItem("userId"));
  }, [user]);
  // console.log("app userId:", user);

  return (
    <div className="app" style={styles}>
      <div style={sideBarStyle}><SideBar elementsArr={elementsArr} 
      setElementsArr={setElementsArr} 
      currentElement={currentElement} 
      setCurrentElement={setCurrentElement} 
      inputText={inputText} 
      setInputText={setInputText} 
      textAlign={textAlign} 
      setTextAlign={setTextAlign} 
      textDecoration={textDecoration} 
      setTextDecoration={setTextDecoration} 
      backgroundColor={backgroundColor} 
      setBackgroundColor={setBackgroundColor} 
      color={color} setColor={setColor} 
      margin={margin} 
      setMargin={setMargin} 
      width={width} 
      setWidth={setWidth} 
      height={height} 
      setHeight={setHeight} 
      padding={padding} 
      setPadding={setPadding}
      fontSize = {fontSize}
      setFontSize = {setFontSize}
      className = {className}
      setClassName = {setClassName}
      /></div>

      <div style={customizationStyle}><Customization 
      elementsArr={elementsArr} 
      setElementsArr={setElementsArr} 
      currentElement={currentElement} 
      setCurrentElement={setCurrentElement} 
      inputText={inputText} 
      setInputText={setInputText} 
      textAlign={textAlign} 
      setTextAlign={setTextAlign} 
      textDecoration={textDecoration} 
      setTextDecoration={setTextDecoration} 
      backgroundColor={backgroundColor} 
      setBackgroundColor={setBackgroundColor} 
      color={color} 
      setColor={setColor} 
      margin={margin} 
      setMargin={setMargin} 
      width={width} 
      setWidth={setWidth} 
      height={height}
      setHeight={setHeight} 
      padding={padding} 
      setPadding={setPadding}
      fontSize = {fontSize}
      setFontSize = {setFontSize}
      className = {className}
      setClassName = {setClassName}
      /></div>
      {/* <div style={customizationStyle}><Customization elementsArr={elementsArr} setElementsArr={setElementsArr} currentElement={currentElement} setCurrentElement={setCurrentElement} /></div> */}
      {/* <div style={previewStyle}><Preview elementsArr={elementsArr} setElementsArr={setElementsArr} inputText={inputText} setInputText={setInputText} textAlign={textAlign} setTextAlign={setTextAlign} textDecoration={textDecoration} setTextDecoration={setTextDecoration} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} color={color} setColor={setColor} margin={margin} setMargin={setMargin} width={width} setWidth={setWidth} height={height} setHeight={setHeight} padding={padding} setPadding={setPadding} */}
      <div style={previewStyle}>
        <Preview 
          elementsArr={elementsArr} 
          setElementsArr={setElementsArr} 
        />
      </div>
      <div style={buttonsStyle}>
        <Buttons 
          elementsArr={elementsArr} 
          setElementsArr={setElementsArr} 
          project={project}
          setProject={setProject}
          user={user}
          setUser={setUser}
        />
      </div>
    </div>
  );
};

export default App;

// green #68EDA7
//yellow #FFE958
 

