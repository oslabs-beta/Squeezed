import {React } from '../deps.tsx';

// interface Props{
//   elementsArr: string[];
//   // setElementsArr: React.Dispatch<React.SetStateAction<string>>;
//   // setElementsArr: void;
//   content: string;
//   // setContent: React.Dispatch<React.SetStateAction<string>>;
//   currentElement: string;
//   // setCurrentElement: React.Dispatch<React.SetStateAction<string>>
// }

const SideBar = (props:any) => {
  const {elementsArr, setElementsArr, currentElement, setCurrentElement} = props;
  // const {inputText, setInputText, textAlign, setTextAlign, textDecoration, setTextDecoration, backgroundColor, setBackgroundColor, color, setColor, margin, setMargin,width, setWidth, height, setHeight, padding, setPadding, }= props;
  const [dragOver, setDragOver] = React.useState(false);
  const [content, setContent] = React.useState<string>('drag into here');
  // const [currIndex, setCurrIndex] = React.useState<any>();
  //   const [clickedButton, setClickedButton] = React.useState<any>('');
  // let id2: any;
  // const [elementsArr, setElementsArr] = React.useState<string[]>([]);
  // const content = this.props.content;
  // const setContent = this.props.setContent;
  // const elementsArr = this.props.elements.Arr;
  // const setElementsArr = this.props.setElementsArr;
  // const currentElement = this.props.currentElement;

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
      padding: ""     
    };
    newElementsArr.push(newElement);
    // console.log("newElementsArr:", newElementsArr);
    setElementsArr(newElementsArr);
    setCurrentElement(newElement);
   
    // const index = newElementsArr.length-1
    // id2 = index
    // return id2;
    // setDragOver(data);
    // console.log('elementsArr:', elementsArr)
  };
 
  const handleClick = (id: any) => {
    // const id = event.dataTransfer.getData("text");
    // setCurrentElement(id)
    // event.preventDefault();
    // const button: HTMLButtonElement = event.currentTarget;
    // setClickedButton(button.id);
    // const ele = document.getElementsByClassName('draggedTags')
    // console.log('e', id)
    // console.log(1,elementsArr[id])
    // console.log(2,elementsArr[id].style)
    // console.log(3,elementsArr[id].style.backgroundColor)
    // elementsArr[id].style.backgroundColor = 'pink';
    setCurrentElement(elementsArr[id]);
    // setHeight(elementsArr[id][height])
    // console.log('work please', elementsArr[id])
    // console.log(currentElement)
    // setInputText(inputText)
    // setTextAlign(textAlign);
  };

// console.log(content)
  // const sideStyle = {
  //   // gridArea: "bar",
  //   // backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
  //   // borderImage: "linear-gradient(180deg, rgb(0,143,104), rgb(250,224,66)) 1",
  //   // borderWidth: '2px',
  //   // borderStyle: 'solid',
  //   // fontSize: "30px",
  //   // width: '50%',
  //   // float: 'left'
  //   height: '100px',
  //   background: 'yellow',
  //   textAlign: 'center',
  //   boxSizing: 'border-box',
  //   border: '1px solid red'

  // } as const;

  // const dropStyle = {
  //   // gridArea: "drop",
  //   // backgroundColor: "#2D3033",
  //   // borderImage: "linear-gradient(180deg, rgb(0,143,104), rgb(250,224,66)) 1",
  //   // borderWidth: '2px',
  //   // borderStyle: 'solid',
  //   // fontSize: "30px",
  //   // width: '50%',
  //   // float: 'right'
  //   height: '100px',
  //   background: 'yellow',
  //   textAlign: 'center',
  //   boxSizing: 'border-box',
  //   border: '1px solid red'

  // } as const;

  // const styles = {
  //   // display: "inline block",
  //   // gridTemplate: "auto / repeat(16, 1fr)",
  //   // gridTemplateAreas: `"bar bar drop drop drop drop drop drop drop drop drop drop drop drop drop drop"
  //   // "bar bar drop drop drop drop drop drop drop drop drop drop drop drop drop drop"
  //   // "bar bar drop drop drop drop drop drop drop drop drop drop drop drop drop drop"`,
  //   display: 'grid',
  //       gridTemplateColumns: '1fr 1fr',
  //       columnGap: '10px',
  //   width: "100%",
  //   color: '#7e55bb'
  // };


// ReactDOM.render(
//   <React.StrictMode>
//     <id/>
//   </React.StrictMode>,
// const newArr = [];
// newArr.push(content);
// console.log(`newArr: ${newArr}`)
// const rend = [];
// for (let i = 0; i< elementsArr.length; i++){
//   rend.push(<dprops.mentsArr[i]</div>)
// }
// cobuttonle.log('rend', rend)


const htmlTags = elementsArr.map((elements: any, index: any) => {
  console.log("html tags: ", elementsArr[index], index);
  return (
    <div 
    className="draggedTags"
    onDragOver={enableDropping}
    onDrop={handleDrop}
    onDragEnter={handleDragOverStart}
    onDragLeave={handleDragOverEnd} 
    onClick={() => handleClick(index)} 
    id={index}>
      {elementsArr[index].element}
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
          <button style={{ backgroundColor:'rgb(145,233,172)', color: "#2d3033", width: "100%", fontSize: '16px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            PARAGRAPH
          </button>
        </div>
        <div id="button" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(151,233,167)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            BUTTON
          </button>
        </div>
        <div id="image" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(155,233,165)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            IMAGE
          </button>
        </div>
        <div id="header 1" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(160,233,162)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            HEADER 1
          </button>
        </div>
        <div id="header 2" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(159,233,162)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            HEADER 2
          </button>
        </div>
        <div id="header 3" onDragStart={handleDragStart}>
          <button style={{color: "rgb(164,233,160)", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            HEADER 3
          </button>
        </div>
        <div id="footer" onDragStart={handleDragStart}>
          <button style={{backgroundColor:'rgb(168,233,158)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            FOOTER
          </button>
        </div>
        <div id="ordered list" onDragStart={handleDragStart}>
          <button style={{backgroundColor:'rgb(173,233,155)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            ORDERED LIST
          </button>
        </div>
        <div id="unordered list" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(178,233,153)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            UNORDERED LIST
          </button>
        </div>
        <div id="input" onDragStart={handleDragStart}>
          <button style={{ color: "rgb(182,233,150)", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            INPUT
          </button>
        </div>
        <div id="link" onDragStart={handleDragStart}>
          <button style={{backgroundColor:'rgb(181,233,151)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LINK
          </button>
        </div>
        <div id="label" onDragStart={handleDragStart}>
          <button style={{backgroundColor:'rgb(5,0,255)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LABEL
          </button>
        </div>
        <div id="span" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(186,233,149)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            SPAN
          </button>
        </div>
        <div id="form" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(192,233,145)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            FORM
          </button>
        </div>
        <div id="menu" onDragStart={handleDragStart}>
          <button style={{backgroundColor:'rgb(5,0,255)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            MENU
          </button>
        </div>
        <div id="label" onDragStart={handleDragStart}>
          <button style={{backgroundColor:'rgb(5,0,255)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LABEL
          </button>
        </div>
        <div id="span" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(5,0,255)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            SPAN
          </button>
        </div>
        <div id="form" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(5,0,255)',color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            FORM
          </button>
        </div>
        <div id="menu" onDragStart={handleDragStart}>
          <button style={{ backgroundColor:'rgb(5,0,255)', color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            MENU
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





// #8FE9AB
// #98E9A6
// #AEE99B
// #C4E88E
// #D0E888
// #DAE983
// #E3E97E
// #EAE97B
// #F4E875
// #F9E873


// expo#rt default function SideBar(this: any){
//    this.state = {
//     htmlElements : ['div', 'paragraph', 'h1', 'form', 'button', 'img']
//   };

//   const sideBarStyle = {
//     gridArea: 'side',
//     backgroundColor: 'rgb(255, 123, 0)',
//     border: '2px solid white',
//     fontSize: '30px',
//   } as const;
//   interface Props {
//     name: string;
//     className?: string;
//     onClick: (e: Event) => void;
//   }

// function move(){
// console.log('ugh')
// return
// }

// const handleDrag = (event: React.DragEvent<HTMLAnchorElement>) => {
//   console.log(event.currentTarget);
//   alert("dragged");
// }
//   return (
//     <main className='container' >
//       <ul className="sideBar">
//         {/* {this.state.htmlElements.map((el: any) => (
//           <li className="sidebar-button" />
//         ))} */}
//         {/* <Button
//   variant="contained"
//   href="/required"
//   onDrag={handleDrag}
// >
//   Drag Event
// </Button> */}
//         <button className="sidebar-button" draggable="true" onDragStart={handleDragStart}> DIV</button>
//         <button className="sidebar-button" draggable="true" onClick={() => {move()}}> BUTTON</button>
//         <button className="sidebar-button" draggable="true" onClick={() => {move()}}> FORM</button>
//         <button className="sidebar-button" draggable="true" onClick={() => {move()}}> IMAGE</button>
//         <button className="sidebar-button" draggable="true" onClick={() => {move()}}> PARAGRAPH</button>
//         <button className="sidebar-button" draggable="true" onClick={() => {move()}}> HEADER</button>
//         <button className="sidebar-button" draggable="true" onClick={() => {move()}}> LIST</button>
//       </ul>
//     </main>
//   );
// }

// const SideBar = () => {
//   return(
//     <div>SIDEBAR</div>
//   )

// }

// export default SideBar;