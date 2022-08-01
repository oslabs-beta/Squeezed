import { React } from '../../deps.tsx';

import Styling from './pages/Styling.tsx';

const MainContainer: any = (props:any) => {
  const { elementsArr, 
    setElementsArr, 
    currentElement, 
    setCurrentElement, 
    inputText, 
    setInputText, 
    textAlign, 
    setTextAlign, 
    textDecoration, 
    setTextDecoration, 
    backgroundColor,
    setBackgroundColor,
    color,
    setColor,
    margin,
    setMargin,
    width,
    setWidth,
    height,
    setHeight,
    padding,
    setPadding,
    fontSize,
    setFontSize,
    className,
    setClassName,
   } = props;
  const { customizationPage, setCustomizationPage } = props;
  // const { currentElement, setCurrentElement } = props;
  // const {inputText, setInputText, textAlign, setTextAlign, textDecoration, setTextDecoration, backgroundColor, setBackgroundColor, color, setColor, margin, setMargin,width, setWidth, height, setHeight, padding, setPadding, }= props;

  let page: any;

  if (customizationPage === 'styling') page = <Styling 
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
  setClassName = {setClassName} />
  // if (customizationPage === 'styling') page = <Styling currentElement={currentElement} setCurrentElement={setCurrentElement} elementsArr={elementsArr} setElementsArr={setElementsArr} />;
  // if (customizationPage === 'routing') page = <Routing />;
  
  return <div className="customizationPage">{page}</div>;
};

export default MainContainer;