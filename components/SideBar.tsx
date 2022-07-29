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
    // console.log("handleDragStart area:", area)
    // console.log("current event target: ", event.currentTarget);
    if(area === "dragArea"){
      event.dataTransfer.setData("id", event.currentTarget.id);
    }
    else if(area === "dropArea"){
      // console.log("dragItem.current type:", typeof dragItem.current)
      dragItem.current = event.currentTarget.id;
      // console.log("handleDragStart current: ", dragItem.current)
      // console.log("handleDragStart: ", dragItem)
    }
    event.dataTransfer.setData("area", area);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    // console.log("drag enter id: ", dragItem.current)
  };
  
  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
    setContent(id);

    // const area = event.dataTransfer.getData("area");
    // if(area === "dragArea"){
    //   const id = event.dataTransfer.getData("id");
    //   setContent(id);
    //   console.log("enableDropping after set content", content)
    // }
    // else if(area === "dropArea"){
    //   // const oldId = event.dataTransfer.getData("oldId");
    //   // console.log("enable dropping old id: ", oldId)
    // }
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
        padding: "",
        fontSize: "",
        fontWeight: ""   
      };
      newElementsArr.push(newElement);
      setElementsArr(newElementsArr);
      setCurrentElement(newElement);
      // console.log("handleDrop from dragArea:", id); 
    }
    else if(area === "dropArea"){
      const dragItemContent = newElementsArr[dragItem.current];
      const dragItemEnterContent = newElementsArr[dragOverItem.current];
      console.log("handleDrop selected item:", dragItemContent); 
      console.log("handleDrop drager over item:", dragItemEnterContent); 

      // //reassign ids to match order of elementsArr
      // const tempId = dragItemContent.id;
      // dragItemContent.id = dragItemEnterContent.id;
      // dragItemEnterContent.id = tempId;

      // console.log("dragItemContent:", dragItemContent)
      newElementsArr.splice(dragItem.current, 1);
      newElementsArr.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      reorderElArr(newElementsArr);
      setElementsArr(newElementsArr);
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

  // const dragItem = useRef();

  // function onDragReorder(event, position) {
  //   dragItem.current = position;
  //   console.log("onDragReorder:", e.target.innerHTML);
  // }


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
        <div id="img" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{ backgroundColor:'rgb(158,233,163)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            IMAGE
          </button>
        </div>
        <div id="h1" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{ backgroundColor:'rgb(163,233,160)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            HEADER 1
          </button>
        </div>
        <div id="h2" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{ backgroundColor:'rgb(168,233,158)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            HEADER 2
          </button>
        </div>
        <div id="h3" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
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
        <div id="ol" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{backgroundColor:'rgb(187,233,147)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LIST (OL)
          </button>
        </div>
        <div id="ul" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
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
        <div id="title" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{backgroundColor:'rgb(232,233,123)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            TITLE
          </button>
        </div>
        <div id="area" onDragStart={(e) => handleDragStart(e, 'dragArea')}>
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




