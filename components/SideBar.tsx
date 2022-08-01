import { React } from '../deps.tsx';
import { IHtmlElement, IProps, ISideBarProps } from './../utils/types.ts';

const SideBar: React.FC<ISideBarProps> = (props: ISideBarProps) => {
  const { elementsArr, setElementsArr, currentElement, setCurrentElement } = props;
  const { setInputText, setTextAlign, setTextDecoration, setBackgroundColor, setColor, setMargin, setWidth, setHeight, setPadding, setFontSize, setClassName } = props;
  const [dragOver, setDragOver] = React.useState<boolean>(false);
  const [content, setContent] = React.useState<string>('drag into here');

  const handleDragOverStart = () => setDragOver(true);
  const handleDragOverEnd = () => setDragOver(false);

  const dragItem = React.useRef<number>(-1);
  const dragOverItem = React.useRef<number>(-1);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, area: string) => {
    if(area === "dragArea"){
      event.dataTransfer.setData("id", event.currentTarget.id);
    }
    else if(area === "dropArea"){
      dragItem.current = parseInt(event.currentTarget.id);
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
    // console.log("before if statement", newElementsArr);
 
    if(area === "dragArea"){
      const id = event.dataTransfer.getData("id");
      console.log('new el', id)
      console.log('new el elArr length', elementsArr.length);
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
      dragItem.current = -1;
      dragOverItem.current = -1;
      reorderElArr(newElementsArr);
      setElementsArr(newElementsArr);
      console.log("after drop:", elementsArr);
    }
  };

  const reorderElArr = (arr: IHtmlElement[]) => {
    arr.forEach((el: IHtmlElement, ind: number) => {
      el.id = ind;
    })
  }
 
  // const handleClick = (id: number) => {
  //   const a = elementsArr[id].inputText;
  //   const b = elementsArr[id].texAlign;
  //   const c = elementsArr[id].textDecoration;
  //   const d = elementsArr[id].backgroundColor;
  //   const e = elementsArr[id].color;
  //   const f = elementsArr[id].margin; 
  //   const g = elementsArr[id].width;
  //   const h = elementsArr[id].height; 
  //   const i = elementsArr[id].padding; 
  //   const j = elementsArr[id].fontSize;
  //   const k = elementsArr[id].className;
    
  //   setCurrentElement(elementsArr[id]);
  //   setInputText(a);
  //   setTextAlign(b);
  //   setTextDecoration(c);
  //   setBackgroundColor(d);
  //   setColor(e);
  //   setMargin(f);
  //   setWidth(g);
  //   setHeight(h);
  //   setPadding(i);
  //   setFontSize(j);
  //   setClassName(k);
  // };

  const deleteElement = (id: number) => {
    // console.log("before delete", elementsArr, id)
    // console.log("splice", elementsArr.splice(id, 1))
    elementsArr.splice(id, 1);
    reorderElArr(elementsArr);
    // console.log("elementsArr after delete", elementsArr)
    setElementsArr(elementsArr);
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

  const elementsList = 
    [
      {
        id: 'div',
        element: 'DIV',
        backgroundColor: 'rgb(142,233,172)'
      },
      {
        id: 'paragraph',
        element: 'PARAGRAPH',
        backgroundColor: 'rgb(148,233,168)'
      },
      {
        id: 'button',
        element: 'BUTTON',
        backgroundColor: 'rgb(152,233,166)'
      },
      {
        id: 'img',
        element: 'IMAGE',
        backgroundColor: 'rgb(158,233,163)'
      },
      {
        id: 'h1',
        element: 'HEADER 1',
        backgroundColor: 'rgb(163,233,160)'
      },
      {
        id: 'h2',
        element: 'HEADER 2',
        backgroundColor: 'rgb(168,233,158)'
      },
      {
        id: 'h3',
        element: 'HEADER 3',
        backgroundColor: 'rgb(173,233,155)'
      },
      {
        id: 'footer',
        element: 'FOOTER',
        backgroundColor: 'rgb(178,233,152)'
      },
      {
        id: 'ol',
        element: 'LIST (OL)',
        backgroundColor: 'rgb(187,233,147)'
      },
      {
        id: 'ul',
        element: 'LIST (UL)',
        backgroundColor: 'rgb(196,233,143)'
      },
      {
        id: 'input',
        element: 'INPUT',
        backgroundColor: 'rgb(202,233,139)'
      },
      {
        id: 'link',
        element: 'LINK',
        backgroundColor: 'rgb(207,233,137)'
      },
      {
        id: 'label',
        element: 'LABEL',
        backgroundColor: 'rgb(212,233,134)'
      },
      {
        id: 'span',
        element: 'SPAN',
        backgroundColor: 'rgb(218,233,131)'
      },
      {
        id: 'button',
        element: 'LIST (UL)',
        backgroundColor: 'rgb(220,233,129)'
      },
      {
        id: 'form',
        element: 'FORM',
        backgroundColor: 'rgb(222,233,128)'
      },
      {
        id: 'menu',
        element: 'MENU',
        backgroundColor: 'rgb(227,233,126)'
      },
      {
        id: 'title',
        element: 'TITLE',
        backgroundColor: 'rgb(232,233,123)'
      },
      {
        id: 'area',
        element: 'AREA',
        backgroundColor: 'rgb(238,233,120)'
      }
    ];
    
    const renderElementsList = elementsList.map((el: { id: string, element: string, backgroundColor: string}) => {
      // console.log(el, ind);
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
      // console.log("html tags: ", elementsArr[index], index);
      return (
        <div 
          draggable='true'
          onDrop={handleDrop}
          // onDragEnter={handleDragOverStart}
          // onDragLeave={handleDragOverEnd}
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
