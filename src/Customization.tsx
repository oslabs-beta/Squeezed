import { React } from '../deps.tsx';
import { ICustomizationProps } from './utils/types.ts';

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
  
  const [customizationPage, setCustomizationPage] = React.useState<string>('styling');

  // updates current element and elementsArr
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
    setCurrentElement(updateCurrentElement);
    elementsArr[currentElement.id] = updateCurrentElement;

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
    <div id='styling'>
    <form onSubmit={handleSubmit}>
      <link rel={'stylesheet'} href={'./static/css/customizationStyles.css'} />
      <div id='selectedEle'>Element selected: {currentElement.element}</div>  
      <br />
      <div id='lft'>
        <label htmlFor="inputText">Input Text </label>  
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="Enter text"
          className="input"
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
      </div>

      <div id='rt'>
     
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
        <select className="textDecoration" onChange={e => setTextDecoration(e.target.value)}>
          <option>default</option>
          <option>overline</option>
          <option>line-through</option>
          <option>underline</option>
          <option>none</option>
        </select>
        <br />
      
        <label htmlFor="textAlign">Text Align </label>
        <select className='textAlign' onChange={e => setTextAlign(e.target.value)}>
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

      <button type="submit" className="btn"  >
        Submit
      </button>
    </form>
    </div>
  );
};

export default Customization;