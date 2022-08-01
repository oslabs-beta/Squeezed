import { React } from '../deps.tsx';
import { IHtmlElement, IProps, ISideBarProps } from './../utils/types.ts';
import elementsList from './../utils/elementsList.js';

const SideBar: React.FC<ISideBarProps> = (props: ISideBarProps) => {
  const { elementsArr, setElementsArr, currentElement, setCurrentElement } = props;
  const { setInputText, setTextAlign, setTextDecoration, setBackgroundColor, setColor, setMargin, setWidth, setHeight, setPadding, setFontSize, setClassName } = props;
  const [dragOver, setDragOver] = React.useState<boolean>(false);
  const [content, setContent] = React.useState<string>('drag into here');

  const handleDragOverStart = () => setDragOver(true);
  const handleDragOverEnd = () => setDragOver(false);

  // const dragItem = React.useRef<number>(-1);
  // const dragOverItem = React.useRef<number>(-1);
  const dragItem = React.useRef<any>(null);
  const dragOverItem = React.useRef<any>(null);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, area: string) => {
    if(area === "dragArea"){
      event.dataTransfer.setData("id", event.currentTarget.id);
    }
    else if(area === "dropArea"){
      dragItem.current = event.currentTarget.id;
    }
    event.dataTransfer.setData("area", area);
  };

  const dragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
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
        inputText: "",
        texAlign: "", // dont change this to textAlign  
        textDecoration: "",
        backgroundColor: "",
        color: "",
        margin: "",
        width: "",
        height: "",
        padding: "",
        fontSize: "",
        className: ""
      };
      newElementsArr.push(newElement);
      setElementsArr(newElementsArr);
      setCurrentElement(newElement);
    }
    else if(area === "dropArea"){
      const dragItemContent = newElementsArr[dragItem.current];
      const dragItemEnterContent = newElementsArr[dragOverItem.current];
      newElementsArr.splice(dragItem.current, 1);
      newElementsArr.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      // console.log("new arr after drop:", newElementsArr);
      reorderElArr(newElementsArr);
      setElementsArr(newElementsArr);
    }
  };
 
  const handleClick = (id: number) => {
    const a = elementsArr[id].inputText;
    const b = elementsArr[id].texAlign;
    const c = elementsArr[id].textDecoration;
    const d = elementsArr[id].backgroundColor;
    const e = elementsArr[id].color;
    const f = elementsArr[id].margin; 
    const g = elementsArr[id].width;
    const h = elementsArr[id].height; 
    const i = elementsArr[id].padding; 
    const j = elementsArr[id].fontSize;
    const k = elementsArr[id].className;
    
    setCurrentElement(elementsArr[id]);
    setInputText(a);
    setTextAlign(b);
    setTextDecoration(c);
    setBackgroundColor(d);
    setColor(e);
    setMargin(f);
    setWidth(g);
    setHeight(h);
    setPadding(i);
    setFontSize(j);
    setClassName(k);
  };

  const deleteElement = (id: number) => {
    // console.log("before delete", elementsArr, id)
    // console.log("splice", elementsArr.splice(id, 1))
    const newElementsArr = [...elementsArr];
    newElementsArr.splice(id, 1);
    console.log("elementsArr after delete", newElementsArr);
    reorderElArr(newElementsArr);
    setElementsArr(newElementsArr);
    // setCurrentElement({} as IHtmlElement);
  }

  const reorderElArr = (arr: IHtmlElement[]) => {
    arr.forEach((el: IHtmlElement, ind: number) => {
      console.log('reorder:', el, ind);
      el.id = ind;
    })
  }

  function onDragStart(event: any) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      .currentTarget
      .style
      .backgroundColor = 'yellow';
  }
    
    const renderElementsList = elementsList.map((el: { id: string, element: string, backgroundColor: string}) => {
      return (
        <div id={el.id} onDragStart={(e) => handleDragStart(e, 'dragArea')}>
          <button style={{ backgroundColor: el.backgroundColor, color: "#2d3033", width: "100%", fontSize: '20px',fontWeight: 'bolder'}} draggable="true">
            {" "}
            {el.element}
          </button>
        </div>
      )
    });
  
    const createdElements = elementsArr.map((el: IHtmlElement, index: number) => {
      return (
        <div 
          draggable='true'
          onDrop={handleDrop}
          onDragStart={(e) => handleDragStart(e, 'dropArea')}
          onDragEnter={(e) => {dragEnter(e, index)}}
          className="draggedTags"
          onDragOver={enableDropping}
          onClick={() => handleClick(index)} 
          id={index.toString()}>
          {elementsArr[index].element}

          <button 
            id='delete-btn'
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
      <div className="app">
        <div id='side'>
          {renderElementsList}
        </div>

        <div 
          id='drop'
          onDragOver={enableDropping}
          onDrop={handleDrop}
          onDragEnter={handleDragOverStart}
          onDragLeave={handleDragOverEnd}
        >
          <div id='hov'>{createdElements}</div>
        </div>
      </div>
    </div>
  );
};
  
export default SideBar;
