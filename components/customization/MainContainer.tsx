import { React } from '../../deps.tsx';
import Routing from './pages/Routing.tsx';
import Styling from './pages/Styling.tsx';

const MainContainer: any = (props:any) => {
  const { customizationPage, setCustomizationPage } = props;
  const { currentElement, setCurrentElement } = props;
  const {inputText, setInputText, textAlign, setTextAlign, textDecoration, setTextDecoration, backgroundColor, setBackgroundColor, color, setColor, margin, setMargin,width, setWidth, height, setHeight, padding, setPadding, }= props;

  let page: any;

  if (customizationPage === 'styling') page = <Styling currentElement={currentElement} setCurrentElement={setCurrentElement}  inputText={inputText} setInputText={setInputText} textAlign={textAlign} setTextAlign={setTextAlign} textDecoration={textDecoration} setTextDecoration={setTextDecoration} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} color={color} setColor={setColor} margin={margin} setMargin={setMargin} width={width} setWidth={setWidth} height={height} setHeight={setHeight} padding={padding} setPadding={setPadding}
  />;
  if (customizationPage === 'routing') page = <Routing />;
  
  return <div className="customizationPage">{page}</div>;
};

export default MainContainer;