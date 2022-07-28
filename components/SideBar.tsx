import { React } from '../deps.tsx';



const SideBar = (props:any) => {
  const {elementsArr, setElementsArr, currentElement, setCurrentElement} = props;
  const { setInputText, setTextAlign, setTextDecoration, setBackgroundColor, setColor, setMargin, setWidth, setHeight, setPadding, setFontSize, setClassName }= props;
  const [dragOver, setDragOver] = React.useState(false);
  const [content, setContent] = React.useState<string>('drag into here');

  const handleDragOverStart = () => setDragOver(true);
  const handleDragOverEnd = () => setDragOver(false);

  // const dragItem = React.useRef<HTMLDivElement | null>(null);
  // const dragOverItem = React.useRef<HTMLDivElement | null>(null);
  const dragItem = React.useRef<any>(null);
  const dragOverItem = React.useRef<any>(null);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, area:string) => {
    if(area === "dragArea"){
      event.dataTransfer.setData("id", event.currentTarget.id);
    }
    else if(area === "dropArea"){
      dragItem.current = event.currentTarget.id;
    }
    event.dataTransfer.setData("area", area);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };
  
  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
    setContent(id);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const area = event.dataTransfer.getData("area");
    const newElementsArr = [...elementsArr];
 
    if(area === "dragArea"){
      const id = event.dataTransfer.getData("id");
      setContent(id);
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
        padding: ""     
      };
      newElementsArr.push(newElement);
      setElementsArr(newElementsArr);
      setCurrentElement(newElement);
    }
    else if(area === "dropArea"){
      const dragItemContent = newElementsArr[dragItem.current];
      const dragItemEnterContent = newElementsArr[dragOverItem.current];
      // console.log("handleDrop selected item:", dragItemContent); 
      // console.log("handleDrop drager over item:", dragItemEnterContent); 

      newElementsArr.splice(dragItem.current, 1);
      newElementsArr.splice(dragOverItem.current, 0, dragItemContent);
      reorderElArr(newElementsArr);
      setElementsArr(newElementsArr);
      dragItem.current = null;
      dragOverItem.current = null;
      // console.log("handleDrop from dropArea", elementsArr)
    }
  };

  const reorderElArr = (arr) => {
    arr.forEach((el, ind) => {
      el.id = ind;
    })
  }
 
  const handleClick = (id: any) => {
    setCurrentElement(elementsArr[id]);

    const a = elementsArr[id].text;
    const b = elementsArr[id].textAlign;
    const c = elementsArr[id].textDecoration;
    const d = elementsArr[id].backgroundColor;
    const e = elementsArr[id].color;
    const f = elementsArr[id].margin; 
    const g = elementsArr[id].width;
    const h = elementsArr[id].height; 
    const i = elementsArr[id].padding; 
    const j = elementsArr[id].setFontSize;
    const k = elementsArr[id].setClassName;
    
    setInputText(a);
    setTextAlign(b)
    setTextDecoration(c)
    setBackgroundColor(d)
    setColor(e)
    setMargin(f)
    setWidth(g)
    setHeight(h)
    setPadding(i)
    setFontSize(j)
    setClassName(k)
  };

  const deleteElement = (id: any) => {
    let newElementsArr = [...elementsArr];
    newElementsArr.splice(id, 1);
    reorderElArr(newElementsArr);
    setElementsArr(newElementsArr);
  }

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
        // onDragEnter={handleDragOverStart}
        // onDragLeave={handleDragOverEnd}
        onDragStart={(e) => handleDragStart(e, 'dropArea')}
        onDragEnter={(e) => {dragEnter(e, index)}}
        className="draggedTags"
      // onDragOver={enableDropping}
        onClick={() => handleClick(index)} 
        id={index}>
        {elementsArr[index].element}
        <button 
          style={{backgroundImage:"linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", float: 'right', marginTop: '0px', marginRight: '-1px', height: '3px',}} 
          onClick={()=> deleteElement(index) }
        >
          X
        </button>
      </div>
    )})

  return (
    <div id="scroll">
      <link rel={'stylesheet'} href={'./static/css/App.css'} />
      <link rel={'stylesheet'} href={'./static/css/sideBarStyle.css'} />
      <div className="app" ></div>
      <div id='side'>
        <div id="div" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{ backgroundColor:'rgb(142,233,172)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            DIV
          </button>
        </div>
        <div id="paragraph"  onDragStart={(e) => handleDragStart(e, 'dragArea')} >
          <button style={{ backgroundColor:'rgb(148,233,168)', color: "#2d3033", width: "100%", fontSize: '16px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            PARAGRAPH
          </button>
        </div>
        <div id="button" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{ backgroundColor:'rgb(152,233,166)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            BUTTON
          </button>
        </div>
        <div id="image" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{ backgroundColor:'rgb(158,233,163)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            IMAGE
          </button>
        </div>
        <div id="header 1" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{ backgroundColor:'rgb(163,233,160)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            HEADER 1
          </button>
        </div>
        <div id="header 2" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{ backgroundColor:'rgb(168,233,158)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            HEADER 2
          </button>
        </div>
        <div id="header 3" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{backgroundColor: "rgb(173,233,155)",color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            HEADER 3
          </button>
        </div>
        <div id="footer" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{backgroundColor:'rgb(178,233,152)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            FOOTER
          </button>
        </div>
        <div id="ordered list" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{backgroundColor:'rgb(187,233,147)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LIST (OL)
          </button>
        </div>
        <div id="unordered list" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{ backgroundColor:'rgb(196,233,143)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LIST (UL)
          </button>
        </div>
        <div id="input" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{ backgroundColor:'rgb(202,233,139)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            INPUT
          </button>
        </div>
        <div id="link" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{backgroundColor:'rgb(207,233,137)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LINK
          </button>
        </div>
        <div id="label" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{backgroundColor:'rgb(212,233,134)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LABEL
          </button>
        </div>
        <div id="span" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{ backgroundColor:'rgb(218,233,131)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            SPAN
          </button>
        </div>
        <div id="form" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{ backgroundColor:'rgb(222,233,128)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            FORM
          </button>
        </div>
        <div id="menu" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{backgroundColor:'rgb(227,233,126)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            MENU
          </button>
        </div>
        <div id="label" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{backgroundColor:'rgb(232,233,123)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            TITLE
          </button>
        </div>
        <div id="span" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
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