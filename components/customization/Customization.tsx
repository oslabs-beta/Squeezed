import { React } from '../../deps.tsx';
// import MainContainer from './MainContainer.tsx';
// import Navbar from './Navbar.tsx';
import { IHtmlElement, IProps, ICustomizationProps } from './../../utils/types.ts';

// const Customization = (props: ICustomizationProps) => {

//   const { elementsArr, 
//     setElementsArr, 
//     currentElement, 
//     setCurrentElement, 
//     inputText, 
//     setInputText, 
//     textAlign, 
//     setTextAlign, 
//     textDecoration, 
//     setTextDecoration, 
//     backgroundColor,
//     setBackgroundColor,
//     color,
//     setColor,
//     margin,
//     setMargin,
//     width,
//     setWidth,
//     height,
//     setHeight,
//     padding,
//     setPadding,
//     fontSize,
//     setFontSize,
//     className,
//     setClassName,
//    } = props;
  
//   const [customizationPage, setCustomizationPage] = (React as any).useState('styling');

//   return (
//     <div className="container">
//       <Navbar setCustomizationPage={setCustomizationPage} />
//       <MainContainer 
//         elementsArr={elementsArr} 
//         setElementsArr={setElementsArr}
//         customizationPage={customizationPage} 
//         setCustomizationPage={setCustomizationPage} 
//         currentElement={currentElement} 
//         setCurrentElement={setCurrentElement} 
//         inputText={inputText} 
//         setInputText={setInputText} 
//         textAlign={textAlign} 
//         setTextAlign={setTextAlign} 
//         textDecoration={textDecoration} 
//         setTextDecoration={setTextDecoration} 
//         backgroundColor={backgroundColor} 
//         setBackgroundColor={setBackgroundColor} 
//         color={color} 
//         setColor={setColor} 
//         margin={margin} 
//         setMargin={setMargin} 
//         width={width} 
//         setWidth={setWidth} 
//         height={height} 
//         setHeight={setHeight} 
//         padding={padding} 
//         setPadding={setPadding}
//         fontSize = {fontSize}
//         setFontSize = {setFontSize}
//         className = {className}
//         setClassName = {setClassName} />
//       {/* <MainContainer customizationPage={customizationPage} setCustomizationPage={setCustomizationPage} elementsArr={elementsArr} setElementsArr={setElementsArr} currentElement={currentElement} setCurrentElement={setCurrentElement} /> */}
//     </div>
//   );
// };

// export default Customization;

type submitForm = {
  text: string;
};

const Customization = (props: ICustomizationProps) => {

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
  
  const [customizationPage, setCustomizationPage] = (React as any).useState('styling');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("currentElement: ", currentElement)
    const updateCurrentElement = {
      id: currentElement.id,
      element: currentElement.element,
      inputText: inputText,
      texAlign: textAlign,
      textDecoration: textDecoration,
      backgroundColor: backgroundColor,
      color: color,
      margin: margin,
      width: width,
      height: height,
      padding: padding,
      fontSize: fontSize,
      className: className
    };
    // console.log("updateCurrentElement: ", updateCurrentElement)
    setCurrentElement(updateCurrentElement);
    // console.log('styling page current element: ', currentElement)
    // const newElementsArr = [...elementsArr];
    // newElementsArr.push(updateCurrentElement);
    // setElementsArr(newElementsArr);
    elementsArr[currentElement.id] = updateCurrentElement;
    // console.log('styling page elements array: ', elementsArr);

    setInputText('');
    setTextAlign('');
    setTextDecoration('');
    setBackgroundColor('');
    setColor('');
    setMargin('');
    setWidth('');
    setHeight('');
    setPadding('');
    setFontSize('');
    setClassName('');
  };

  return (
    <form onSubmit={handleSubmit} style={{fontSize: '20px', color: 'white'}}>
      <link rel={'stylesheet'} href={'./static/css/customizationStyles.css'} />
      <div style={{fontSize: '26px',textAlign:'center' , marginTop: '20px'}} id='selectedEle'>Element selected: {currentElement.element}</div>  
      <br />
      <div style={{marginLeft: '40px'}}>
        <label htmlFor="inputText">Input Text </label>  
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="Enter text"
          className="input"
          style={{backgroundColor: '#68EDA7', color: 'black'}}
        /> 
        <br />

        <label htmlFor="fontSize">Font Size </label>  
        <input
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          type="text"
          placeholder="Enter font size"
          className="input"
        /> 
        <br/>

        <label htmlFor="backgroundColor">Background </label>  
        <input
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          type="text"
          placeholder="Enter color name"
          className="input"
        /> 
        <br />

        <label htmlFor="color">Text Color </label>  
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="text"
          placeholder="Enter color name"
          className="input"
        /> 
        <br />

        <label htmlFor="margin">Margin </label>  
        <input
          value={margin}
          onChange={(e) => setMargin(e.target.value)}
          type="text"
          placeholder="Enter margin value"
          className="input"
        /> 
        <br />

        {/* <label htmlFor="border">Border </label>  
        <input
          value={fontWeight}
          onChange={(e) => setFontWeight(e.target.value)}
          type="text"
          placeholder="Enter Font Weight"
          className="input"

        />  */}
      </div>

      <div style={{float: 'right', marginTop: '-175px', marginRight: '40px'}}>
     
        <label htmlFor="height">Height </label>  
        <input
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          type="text"
          placeholder="Enter height"
          className="input"
        /> 
        <br />

        <label htmlFor="width">Width </label>  
        <input
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          type="text"
          placeholder="Enter width"
          className="input"
        /> 
        <br />

        <label htmlFor="padding">Padding </label>  
        <input
          value={padding}
          onChange={(e) => setPadding(e.target.value)}
          type="text"
          placeholder="Enter padding"
          className="input"
        /> 
        <br />
     
        <label htmlFor="className">Class Name </label>  
        <input
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          type="text"
          placeholder="Enter Class Name"
          className="input"  
        /> 
        <br/>

        <label htmlFor="textDecoration">Text Decoration </label>
        <select className="textDecoration" onChange={e => setTextDecoration(e.target.value)} style={{backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033"}}>
          <option>default</option>
          <option>overline</option>
          <option>line-through</option>
          <option>underline</option>
          <option>none</option>
        </select>
        <br />
      
        <label htmlFor="textAlign">Text Align </label>
        <select onChange={e => setTextAlign(e.target.value)} style={{backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033"}}>
          <option>default</option>
          <option>center</option>
          <option>right</option>
          <option>left</option>
          <option>justify</option>
        </select>
        <br/>
        <br/>
        <br/>
      </div>

      <button type="submit" className="btn"  style={{marginLeft: '42%', backgroundImage: "linear-gradient(#68EDA7, #FFE958)", fontSize: '20px', marginBottom: '20px',color: "#2D3033", marginTop:'20px'}}>
        Submit
      </button>
    </form>
  );
};

export default Customization;