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

const Customization = () => {

  // const customizationStyle = { 
  //   gridArea: 'dd',
  //   backgroundColor: 'rgb(230, 203, 27)',
  //   border: '2px solid white',
  //   fontSize: '30px',
  // } as const;

  const [customizationPage, setCustomizationPage] = (React as any).useState('styling');

  return (
    <div className="container">
      <Navbar setCustomizationPage={setCustomizationPage} />
      <MainContainer customizationPage={customizationPage} setCustomizationPage={setCustomizationPage} />
    </div>
  );
};

export default Customization;


