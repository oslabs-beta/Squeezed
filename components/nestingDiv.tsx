import { React } from '../deps.tsx';

const nestingDiv = (props:any) => {
  // const {elementsArr, setElementsArr, currentElement, setCurrentElement} = props;
  // const { setInputText, setTextAlign, setTextDecoration, setBackgroundColor, setColor, setMargin, setWidth, setHeight, setPadding, setFontSize, setClassName }= props;
  //determine if element is being dragged over drop div
  // const [dragOver, setDragOver] = React.useState(false);
  // const [content, setContent] = React.useState<string>('drag into here');
  const [nesting, setNesting] = React.useState(false);

  const nestElement = (event, index) => {
    // console.log(event, index);
    //select current element
    const currElement = document.getElementById(index);
    console.log(currElement);
    //append div with drop functionality to current element
    // const nestedDiv = React.createElement(
    //   "div",
    //   {
    //     id: 'nested-drop-div',
    //     onDragOver: enableDropping,
    //     onDrop: handleDrop,
    //     onDragEnter: handleDragOverStart,
    //     onDragLeave: handleDragOverEnd
    //   });

    // currElement.appendChild(nestingDiv());
    // console.log(nestedDiv);
  }
  
  return (

      <div
        id='nesting-div'
        onDragOver={enableDropping}
        onDrop={handleDrop}
        onDragEnter={handleDragOverStart}
        onDragLeave={handleDragOverEnd}
      >
        Place nested elements here
      </div>
   
  )
};

export default nestingDiv;
