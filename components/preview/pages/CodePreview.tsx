import { React } from '../../../deps.tsx';



const CodePreview: any = (props: any) => {
const {elementsArr, setElementsArr} = props;
const htmlTags = elementsArr.map((elements: any, index: any) =>{
  let ele:any;
  if(elementsArr[index] === 'div') {
    ele = '<' + 'div' + ' ' + 'id' + '=' + `"${index}"` + '></' + 'div' + '>'
    
  }
  if(elementsArr[index] === 'paragraph') {
    ele = `${<div> '<p id='${index}'></p>' </div>}`
  }
  if(elementsArr[index] === 'image') {
    ele = `<img id='${index}'\>`
  }
  if(elementsArr[index] === 'idk') {
    ele = `<idk id='${index}'></idk>`
  }
  if(elementsArr[index] === 'form') {
    ele = `<form id='${index}'></form>`
  }
  if(elementsArr[index] === 'list') {
    ele = `<ul id='${index}'></ul>`
  }
  if(elementsArr[index] === 'footer') {
    ele = `<footer id='${index}'></footer>`
  }
  if(elementsArr[index] === 'link') {
    ele = `<link id='${index}'/>`
  }
  return (
    <div id={index}>{ele}</div>
    )
  })


  return (
    <div id='codePreview'>
      <link rel={'stylesheet'} href={'./static/css/codePreview.css'} />
      <p id='import'>import {'{'} h {'}'} from "preact"</p>
      <p id='export'>export default function App() {'{'}</p>
      <p id= 'return'>return (</p>
      <p id='mainOpeningTag'>{'<main>'}</p>
      <div id= 'htmlTags'>{htmlTags}</div>
      <p id='mainClosingTag'>{'</main>'}</p>
      <p id='paren'>);</p>
      <p id='endingCurly'>{"}"}</p>
      </div>
  )
}

export default CodePreview;

