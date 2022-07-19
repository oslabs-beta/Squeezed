import {React, ReactDOM } from '../deps.tsx';

// interface Props{
//   elementsArr: string[];
//   // setElementsArr: React.Dispatch<React.SetStateAction<string>>;
//   // setElementsArr: void;
//   content: string;
//   // setContent: React.Dispatch<React.SetStateAction<string>>;
//   currentElement: string;
//   // setCurrentElement: React.Dispatch<React.SetStateAction<string>>
// }

const SideBar = ({elementsArr, setElementsArr, currentElement, setCurrentElement}) => {
  console.log("I'm in sidebar: ", elementsArr, currentElement);
  const [dragOver, setDragOver] = React.useState(false);
  const [content, setContent] = React.useState<string>('drag into here');
  const [currIndex, setCurrIndex] = React.useState<any>();
    const [clickedButton, setClickedButton] = React.useState<any>('');
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
    // console.log(data)
    setContent(data);
  };
  

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");    
    // const draggable = document.getElementById(id);
    // event.target.appendChild(draggable);
     console.log(5, id)
    // setContent(newContent);
    setContent(id);
    // console.log(content);
    // console.log(`After push: ${id}`)
    //   console.log(newC
    const newElementsArr = [...elementsArr];
    // console.log('Before push: ', newContent)
    // console.log(newC)
    // console.log('hi')
    newElementsArr.push(id);

    console.log('b4set', elementsArr)
    console.log('b4set', newElementsArr)

    setElementsArr(newElementsArr);
    setCurrentElement(id)
    // const index = newElementsArr.length-1
    // id2 = index
    // return id2;
    // setDragOver(data);
    console.log('hi', elementsArr)
  };

  const handleClick = (id: any) => {
    // const id = event.dataTransfer.getData("text");
    // setCurrentElement(id)
    // event.preventDefault();

    // const button: HTMLButtonElement = event.currentTarget;
    // setClickedButton(button.id);
    setCurrentElement(id);
    console.log(id)
    console.log(currentElement)
};

// console.log(content)
  const sideStyle = {
    gridArea: "bar",
    backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
    borderImage: "linear-gradient(180deg, rgb(0,143,104), rgb(250,224,66)) 1",
    borderWidth: '2px',
    borderStyle: 'solid',
    fontSize: "30px",
    overflow: "scroll",
  } as const;

  const dropStyle = {
    gridArea: "drop",
    backgroundColor: "#2D3033",
    borderImage: "linear-gradient(180deg, rgb(0,143,104), rgb(250,224,66)) 1",
    borderWidth: '2px',
    borderStyle: 'solid',
    fontSize: "30px",
    height: "600px",
  } as const;

  const styles = {
    display: "grid",
    gridTemplate: "auto / repeat(16, 1fr)",
    gridTemplateAreas: `"bar bar drop drop drop drop drop drop drop drop drop drop drop drop drop drop"
    "bar bar drop drop drop drop drop drop drop drop drop drop drop drop drop drop"
    "bar bar drop drop drop drop drop drop drop drop drop drop drop drop drop drop"`,
    height: "100%",
    width: "100%",
    color: '#7e55bb'
  };

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
// console.log('rend', rend)


const htmlTags = elementsArr.map((elements: any, index: any) =>{
  return (
    <div onClick={() => handleClick(index)} id={index} style={{borderColor: '#2D3033', borderWidth: '8px', borderStyle: 'solid', textAlign: 'center', fontWeight: 'bolder'}}>{elementsArr[index]} </div>
  )
})

  return (

    <div style={styles} id="scroll">
      <div style={sideStyle}>
        <div id="div" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            DIV
          </button>
        </div>
        <div id="paragraph"  onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '16px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            PARAGRAPH
          </button>
        </div>
        <div id="image" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            IMAGE
          </button>
        </div>
        <div id="form" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            FORM
          </button>
        </div>
        <div id="list" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LIST
          </button>
        </div>
        <div id="header" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            HEADER
          </button>
        </div>
        <div id="footer" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            FOOTER
          </button>
        </div>
        <div id="link" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LINK
          </button>
        </div>
        <div id="idk" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            IDK
          </button>
        </div>
        <div id="div" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            DIV
          </button>
        </div>
        <div id="image" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            IMAGE
          </button>
        </div>
        <div id="form" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            FORM
          </button>
        </div>
        <div id="list" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LIST
          </button>
        </div>
        <div id="header" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            HEADER
          </button>
        </div>
        <div id="footer" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '20px',fontWeight: 'bolder'}}  draggable="true">
            {" "}
            FOOTER
          </button>
        </div>
        <div id="link" onDragStart={handleDragStart}>
          <button style={{backgroundColor: "#2D3033", color: "#e8e1f3", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            LINK
          </button>
        </div>

      </div>
      <div
        onDragOver={enableDropping}
        onDrop={handleDrop}
        onDragEnter={handleDragOverStart}
        onDragLeave={handleDragOverEnd}
        style={dropStyle}
        >
        <div style={{backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033",width: "100%", fontSize: '20px'}}>{htmlTags}</div>
      </div>
    </div>
  );
// )
}

export default SideBar;











// export default function SideBar(this: any){
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