import {React } from '../deps.tsx';



const SideBar = (props:any) => {
  const {elementsArr, setElementsArr, currentElement, setCurrentElement} = props;
  const {inputText, setInputText, textAlign, setTextAlign, textDecoration, setTextDecoration, backgroundColor, setBackgroundColor, color, setColor, margin, setMargin,width, setWidth, height, setHeight, padding, setPadding, }= props;
  const [dragOver, setDragOver] = React.useState(false);
  const [content, setContent] = React.useState<string>('drag into here');

  const handleDragOverStart = () => setDragOver(true);
  const handleDragOverEnd = () => setDragOver(false);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", event.currentTarget.id);
  };
  
  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    setContent(data);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");    
    // console.log("id: ", id)
    setContent(id);
    const newElementsArr = [...elementsArr];
    const newElement = {
      id: elementsArr.length,      
      element: id,
      text: "",
      texAlign: "", // dont change this to textAlign  
      textDecoration: "",
      backgroundColor: "",
      color: "",
      margin: "",
      width: "",
      height: "",
      padding: "",   
      fontSize: ""
    };
    newElementsArr.push(newElement);
    setElementsArr(newElementsArr);
    setCurrentElement(newElement);
  };
 
  const handleClick = (id: any) => {
    setCurrentElement(elementsArr[id]);
  };

const deleteElement = (id:any) => {
  // console.log('before', id)
  if (elementsArr.length===1){
    setElementsArr([]);
    setCurrentElement('');
  } else {
    const filteredElementsArr = elementsArr.filter((element: any)=> element.id !== id);
    console.log('filtered',filteredElementsArr)
    setElementsArr(filteredElementsArr);
    setCurrentElement('');
  }
}
  //  elementsArr = elementsArr.splice(id, 1)
  //  console.log('after',newArr)

  //  const filteredElementsArr = elementsArr.filter((element: any) => element[id] !== elementsArr[id]);
  // //  console.log(11,filteredElementsArr)
  // setElementsArr(filteredElementsArr);
  // setCurrentElement('');


  function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      .currentTarget
      .style
      .backgroundColor = 'yellow';
  }




const htmlTags = elementsArr.map((elements: any, index: any) => {
  // console.log("html tags: ", elementsArr[index], index);
  return (
    <div 
     draggable='true'
    // onDrop={handleDrop}
    //  onDragEnter={handleDragOverStart}
    //  onDragLeave={handleDragOverEnd}
    // onDragStart={onDragStart(event)}
    className="draggedTags"
    // onDragOver={enableDropping}
    onClick={() => handleClick(index)} 
    id={index}>
      {elementsArr[index].element}
    <button style={{backgroundImage:"linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", float: 'right', marginTop: '0px', marginRight: '-1px', height: '3px',}} onClick={()=> deleteElement(index) }
    >X</button>
    </div>
    )})

  return (

    <div id="scroll">
      <link rel={'stylesheet'} href={'./static/css/App.css'} />
      <link rel={'stylesheet'} href={'./static/css/sideBarStyle.css'} />
      <div className="app" ></div>
      <div id='side'>
        <div id="div" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(142,233,172)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            DIV
          </button>
        </div>
        <div id="paragraph"  onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(148,233,168)', color: "#2d3033", width: "100%", fontSize: '16px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            PARAGRAPH
          </button>
        </div>
        <div id="button" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(152,233,166)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            BUTTON
          </button>
        </div>
        <div id="img" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(158,233,163)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            IMAGE
          </button>
        </div>
        <div id="h1" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(163,233,160)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            HEADER 1
          </button>
        </div>
        <div id="h2" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(168,233,158)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            HEADER 2
          </button>
        </div>
        <div id="h3" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "rgb(173,233,155)",color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            HEADER 3
          </button>
        </div>
        <div id="footer" onDragStart={handleDragStart}>
          <button style={{backgroundColor:'rgb(178,233,152)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            FOOTER
          </button>
        </div>
        <div id="ol" onDragStart={handleDragStart}>
          <button style={{backgroundColor:'rgb(187,233,147)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LIST (OL)
          </button>
        </div>
        <div id="ul" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(196,233,143)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LIST (UL)
          </button>
        </div>
        <div id="input" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(202,233,139)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            INPUT
          </button>
        </div>
        <div id="link" onDragStart={handleDragStart}>
          <button style={{backgroundColor:'rgb(207,233,137)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LINK
          </button>
        </div>
        <div id="label" onDragStart={handleDragStart}>
          <button style={{backgroundColor:'rgb(212,233,134)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LABEL
          </button>
        </div>
        <div id="span" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(218,233,131)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            SPAN
          </button>
        </div>
        <div id="form" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(222,233,128)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            FORM
          </button>
        </div>
        <div id="menu" onDragStart={handleDragStart}>
          <button style={{backgroundColor:'rgb(227,233,126)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            MENU
          </button>
        </div>
        <div id="label" onDragStart={handleDragStart}>
          <button style={{backgroundColor:'rgb(232,233,123)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            TITLE
          </button>
        </div>
        <div id="span" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(238,233,120)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            AREA
          </button>
        </div>
     
      </div>
      <div
        onDragOver={enableDropping}
        onDrop={handleDrop}
        onDragEnter={handleDragOverStart}
        onDragLeave={handleDragOverEnd}
        id='drop'
      >
        <div id='hov' >{htmlTags}</div>
      </div>
    </div>
  );
};

export default SideBar;




