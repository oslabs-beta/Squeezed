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

const Customization = (props:any) => {
 

  // const customizationStyle = { 
  //   gridArea: 'dd',
  //   backgroundColor: 'rgb(230, 203, 27)',
  //   border: '2px solid white',
  //   fontSize: '30px',
  // } as const;



  // const { inputText, setInputText, textAlign, setTextAlign, textDecoration, setTextDecoration, backgroundColor, setBackgroundColor, color, setColor, margin, setMargin,width, setWidth, height, setHeight, padding, setPadding } = props;

  const { elementsArr, setElementsArr, currentElement, setCurrentElement } = props;
  
  const [customizationPage, setCustomizationPage] = (React as any).useState('styling');

  return (
    <div className="container">
      <Navbar setCustomizationPage={setCustomizationPage} />
      {/* <MainContainer customizationPage={customizationPage} setCustomizationPage={setCustomizationPage} currentElement={currentElement} setCurrentElement={setCurrentElement} inputText={inputText} setInputText={setInputText} textAlign={textAlign} setTextAlign={setTextAlign} textDecoration={textDecoration} setTextDecoration={setTextDecoration} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} color={color} setColor={setColor} margin={margin} setMargin={setMargin} width={width} setWidth={setWidth} height={height} setHeight={setHeight} padding={padding} setPadding={setPadding} */}
      <MainContainer customizationPage={customizationPage} setCustomizationPage={setCustomizationPage} elementsArr={elementsArr} setElementsArr={setElementsArr} currentElement={currentElement} setCurrentElement={setCurrentElement} />
    </div>
  );
};

export default Customization;


