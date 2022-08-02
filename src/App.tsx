import { React, Link } from '../deps.tsx';
import SideBar from './SideBar.tsx';
import Customization from './Customization.tsx';
import Preview from './preview/Preview.tsx';
import Buttons from './Buttons.tsx';
import Signup from './Signup.tsx';
import Login from './Signup.tsx';
import { IHtmlElement, IProps} from './utils/types.ts';
  
const App: React.FC = () => {

  //Styling

  

  //State
  const [elementsArr, setElementsArr] = React.useState<IHtmlElement[]>([] as IHtmlElement[]);
  const [currentElement, setCurrentElement] = React.useState<IHtmlElement>({} as IHtmlElement);
  const [user, setUser] = React.useState<string>('');
  const [projectId, setProjectId] = React.useState<string>('');
  const [projectList, setProjectList] = React.useState<any>([]);
  const [loadProj, setLoadProj] = React.useState<string>('');

  //Styling State
  const [inputText, setInputText] = React.useState<string>('');
  const [textAlign, setTextAlign] = React.useState<string>('');
  const [textDecoration, setTextDecoration] = React.useState<string>('');
  const [backgroundColor, setBackgroundColor] = React.useState<string>('');
  const [color, setColor] = React.useState<string>('');
  const [margin, setMargin] = React.useState<string>('');
  const [width, setWidth] = React.useState<string>('');
  const [height, setHeight] = React.useState<string>('');
  const [padding, setPadding] = React.useState<string>('');
  const [fontSize, setFontSize] = React.useState<string>('');
  const [className, setClassName] = React.useState<string>('');
  
  //update user state after user has logged in
  React.useEffect(() => {
    setUser(sessionStorage.getItem('userId') as string);
  }, [user]);

  return (
    <div className="app">
    <link rel={'stylesheet'} href={'./static/css/App.css'} />
<div id='top'>
    <div id='sid'><SideBar 
          elementsArr={elementsArr} 
          setElementsArr={setElementsArr} 
          currentElement={currentElement} 
          setCurrentElement={setCurrentElement} 
          setInputText={setInputText} 
          setTextAlign={setTextAlign} 
          setTextDecoration={setTextDecoration} 
          setBackgroundColor={setBackgroundColor} 
          setColor={setColor} 
          setMargin={setMargin} 
          setWidth={setWidth} 
          setHeight={setHeight} 
          setPadding={setPadding}
          setFontSize={setFontSize}
          setClassName={setClassName}
        />
      </div>
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
          currentElement={currentElement} 
          setCurrentElement={setCurrentElement} 
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
      <div id='cu'>
        <Customization 
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
          fontSize={fontSize}
          setFontSize={setFontSize}
          className={className}
          setClassName={setClassName}
        />
      </div>

      </div>

     
    </div>
  );
};

export default App;
 

