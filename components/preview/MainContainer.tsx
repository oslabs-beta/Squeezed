import { React } from '../../deps.tsx';
import CodePreview from './pages/CodePreview.tsx';
import IslandPreview from './pages/IslandPreview.tsx';

const MainContainer: any = (props: any) => {

  const { previewPage, setPreviewPage } = props;
  const {elementsArr, setElementsArr} = props;
  // const {inputText, setInputText, textAlign, setTextAlign, textDecoration, setTextDecoration, backgroundColor, setBackgroundColor, color, setColor, margin, setMargin,width, setWidth, height, setHeight, padding, setPadding, }= props;

  let page: any;

  // if (previewPage === 'codePreview') page = <CodePreview elementsArr={elementsArr} setElementsArr={setElementsArr} inputText={inputText} setInputText={setInputText} textAlign={textAlign} setTextAlign={setTextAlign} textDecoration={textDecoration} setTextDecoration={setTextDecoration} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} color={color} setColor={setColor} margin={margin} setMargin={setMargin} width={width} setWidth={setWidth} height={height} setHeight={setHeight} padding={padding} setPadding={setPadding}/>;
  if (previewPage === 'codePreview') page = <CodePreview elementsArr={elementsArr} setElementsArr={setElementsArr}  />;
  if (previewPage === 'islandPreview') page = <IslandPreview elementsArr={elementsArr} setElementsArr={setElementsArr} />;
  
  return <div className="previewPage">{page}</div>;
};

export default MainContainer;