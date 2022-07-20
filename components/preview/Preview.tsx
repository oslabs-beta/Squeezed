//import statements
// import React from 'react';
import { React } from '../../deps.tsx';
import MainContainer from './MainContainer.tsx';
import Navbar from './Navbar.tsx';

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       button: any;
//       img: any;
//       input: any;
//       div: any;
//       h1: any;
//       h3: any;
//       p: any;
//     }
//   }
// }

const Preview = (props:any) => {

  // const customizationStyle = { 
  //   gridArea: 'dd',
  //   backgroundColor: 'rgb(230, 203, 27)',
  //   border: '2px solid white',
  //   fontSize: '30px',
  // } as const;
  const {elementsArr, setElementsArr} = props;
  const {inputText, setInputText, textAlign, setTextAlign, textDecoration, setTextDecoration, backgroundColor, setBackgroundColor, color, setColor, margin, setMargin,width, setWidth, height, setHeight, padding, setPadding, }= props;

  const [previewPage, setPreviewPage] = (React as any).useState('codePreview');

  return (
    <div className="preview">
      <Navbar setPreviewPage={setPreviewPage} />
      <MainContainer previewPage={previewPage} setPreviewPage={setPreviewPage} elementsArr={elementsArr} setElementsArr={setElementsArr} inputText={inputText} setInputText={setInputText} textAlign={textAlign} setTextAlign={setTextAlign} textDecoration={textDecoration} setTextDecoration={setTextDecoration} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} color={color} setColor={setColor} margin={margin} setMargin={setMargin} width={width} setWidth={setWidth} height={height} setHeight={setHeight} padding={padding} setPadding={setPadding}/>
    </div>
  );
};

export default Preview;

