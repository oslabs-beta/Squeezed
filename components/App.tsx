import { React, Link } from '../deps.tsx';
// import { Link } from '../deps.tsx'
import SideBar from './SideBar.tsx';
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
  
const App = () => {
  
  //Styling
 
  //State
  const [elementsArr, setElementsArr] = React.useState<any[]>([]);
  const [currentElement, setCurrentElement] = React.useState<any>('drag into here');
  const [projectId, setProjectId] = React.useState<any>('');
  const [user, setUser] = React.useState<any>('');
  const [projectList, setProjectList] = React.useState([]);
  const [loadProj, setLoadProj] = React.useState('');
  
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

  console.log("elementsArr in app", elementsArr);

  return (
    <div className="app">
      <link rel={'stylesheet'} href={'./static/css/App.css'} />
<div id='top'>
      <div id='sid'><SideBar elementsArr={elementsArr} 
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
         <div id='pr'>
        <Preview 
          elementsArr={elementsArr} 
          setElementsArr={setElementsArr} 
        />
      </div>
      </div>
<div id='btmLeft'>
     
      <div id='btns'>
        <Buttons 
          elementsArr={elementsArr} 
          setElementsArr={setElementsArr} 
          projectId={projectId}
          setProjectId={setProjectId}
          user={user}
          setUser={setUser}
          projectList={projectList}
          setProjectList={setProjectList}
          loadProj={loadProj}
          setLoadProj={setLoadProj}
        />
      </div>
      <div id='cu'><Customization 
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
      
     
      
      </div>
   
    </div>
  );
};

export default App;

// green #68EDA7
//yellow #FFE958
 

