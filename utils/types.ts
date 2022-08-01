//Frontend

export interface IHtmlElement {
  id: number;
  element: string;  
  inputText: string;
//   setInputText?: (inputText: string) => void;
  texAlign: string;
//   setTextAlign?: (textAlign: string) => void;
  textDecoration: string;
//   setTextDecoration?: (textDecoration: string) => void;
  backgroundColor: string;
//   setBackgroundColor?: (backgroundColor: string) => void;
  color: string;
//   setColor?: (color: string) => void;
  margin: string;
//   setMargin?: (margin: string) => void;
  width: string;
//   setWidth?: (width: string) => void;
  height: string;
//   setHeight?: (height: string) => void;
  padding: string;
//   setPadding?: (padding: string) => void;
  fontSize: string;
//   setFontSize?: (fontSize: string) => void;
  className: string;
//   setClassName?: (className: string) => void;
}

export interface IProps {
  elementsArr: IHtmlElement[];
  setElementsArr: (elementsArr: IHtmlElement[]) => void;
  currentElement: IHtmlElement;
  setCurrentElement: (currentElement: IHtmlElement) => void;
}

export interface ISideBarProps extends IProps {
//   id: number;
//   element: string;  
//   inputText: string;
  setInputText: (inputText: string) => void;
//   texAlign: string;
  setTextAlign: (textAlign: string) => void;
//   textDecoration: string;
  setTextDecoration: (textDecoration: string) => void;
//   backgroundColor: string;
  setBackgroundColor: (backgroundColor: string) => void;
//   color: string;
  setColor: (color: string) => void;
//   margin: string;
  setMargin: (margin: string) => void;
//   width: string;
  setWidth: (width: string) => void;
//   height: string;
  setHeight: (height: string) => void;
//   padding: string;
  setPadding: (padding: string) => void;
//   fontSize: string;
  setFontSize: (fontSize: string) => void;
//   className: string;
  setClassName: (className: string) => void;
}



// const [user, setUser] = React.useState<any>('');
// const [projectId, setProjectId] = React.useState<any>('');
// const [projectList, setProjectList] = React.useState([]);
// const [loadProj, setLoadProj] = React.useState('');