export interface IHtmlElement {
  id: number;
  element: string;  
  inputText: string;
  texAlign: string;
  textDecoration: string;
  backgroundColor: string;
  color: string;
  margin: string;
  width: string;
  height: string;
  padding: string;
  fontSize: string;
  className: string;
}

export interface IProps {
  elementsArr: IHtmlElement[];
  setElementsArr: (elementsArr: IHtmlElement[]) => void;
  currentElement: IHtmlElement;
  setCurrentElement: (currentElement: IHtmlElement) => void;
}

export interface ISideBarProps extends IProps {
  setInputText: (inputText: string) => void;
  setTextAlign: (textAlign: string) => void;
  setTextDecoration: (textDecoration: string) => void;
  setBackgroundColor: (backgroundColor: string) => void;
  setColor: (color: string) => void;
  setMargin: (margin: string) => void;
  setWidth: (width: string) => void;
  setHeight: (height: string) => void;
  setPadding: (padding: string) => void;
  setFontSize: (fontSize: string) => void;
  setClassName: (className: string) => void;
}

export interface ICustomizationProps extends IProps { 
  inputText: string;
  setInputText: (inputText: string) => void;
  textAlign: string;
  setTextAlign: (textAlign: string) => void;
  textDecoration: string;
  setTextDecoration: (textDecoration: string) => void;
  backgroundColor: string;
  setBackgroundColor: (backgroundColor: string) => void;
  color: string;
  setColor: (color: string) => void;
  margin: string;
  setMargin: (margin: string) => void;
  width: string;
  setWidth: (width: string) => void;
  height: string;
  setHeight: (height: string) => void;
  padding: string;
  setPadding: (padding: string) => void;
  fontSize: string;
  setFontSize: (fontSize: string) => void;
  className: string;
  setClassName: (className: string) => void;
}

export interface IPreviewProps { 
  elementsArr: IHtmlElement[];
  setElementsArr: (elementsArr: IHtmlElement[]) => void;
}

export interface IPreviewMainContainerProps {
  previewPage: string;
  setPreviewPage: (previewPage: string) => void;
}