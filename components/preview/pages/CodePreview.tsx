import { React } from '../../../deps.tsx';



const CodePreview: any = (props: any) => {
const {elementsArr, setElementsArr} = props;
const htmlTags = elementsArr.map((elements: any, index: any) =>{
  let eleFirst:any;
  let eleSecond:any;
  let midText: any;
  let endBr: any;
  if(elementsArr[index] === 'div') {
    eleFirst = `<div `
    endBr = '>'
    midText = 'This is your div'
    eleSecond = `</div>`
    
  }
  if(elementsArr[index] === 'paragraph') {
    eleFirst = `<p `
    endBr = '>'
    midText = 'This is your paragraph'
    eleSecond = `</p>`
  }
  if(elementsArr[index] === 'image') {
    eleFirst = `<img `
    endBr = ''
    midText = 'src="this is your image"'
    eleSecond = `/>`
  }
  if(elementsArr[index] === 'button') {
    eleFirst = `<button `
    endBr = '>'
    midText = 'This is your button'
    eleSecond = `</button>`
  }
  if(elementsArr[index] === 'form') {
    eleFirst = `<form `
    endBr = '>'
    midText = 'This is your form'
    eleSecond= `</form>`
  }
  if(elementsArr[index] === 'ordered list') {
    eleFirst = `<ol `
    endBr = '>'
    midText = 'This is your Ordered List'
    eleSecond = `</ol>`
  }
  if(elementsArr[index] === 'unordered list') {
    eleFirst = `<ul `
    endBr = '>'
    midText = 'This is your Unordered List'
    eleSecond = `</ul>`
  }
  if(elementsArr[index] === 'header 1') {
    eleFirst = `<h1 `
    endBr = '>'
    midText = 'This is your header 1'
    eleSecond =`</h1>`
  }
  if(elementsArr[index] === 'header 2') {
    eleFirst = `<h2 `
    endBr = '>'
    midText = 'This is your header 2'
    eleSecond =`</h2>`
  }
  if(elementsArr[index] === 'header 3') {
    eleFirst = `<h3 `
    endBr = '>'
    midText = 'This is your header 3'
    eleSecond =`</h3>`
  }
  if(elementsArr[index] === 'footer') {
    eleFirst = `<footer `
    endBr = '>'
    midText = 'This is your footer'
    eleSecond =`</footer>`
  }
  if(elementsArr[index] === 'span') {
    eleFirst = `<span `
    endBr = '>'
    midText = 'This is your span'
    eleSecond =`</span>`
  }
  if(elementsArr[index] === 'menu') {
    eleFirst = `<menu `
    endBr = '>'
    midText = 'This is your menu'
    eleSecond =`</menu>`
  }
  if(elementsArr[index] === 'input') {
    eleFirst = `<input `
    endBr = '>'
    midText = 'This is your input'
    eleSecond =`</input>`
  }
  if(elementsArr[index] === 'label') {
    eleFirst = `<label `
    endBr = '>'
    midText = 'This is your label'
    eleSecond =`</label>`
  }
  if(elementsArr[index] === 'link') {
    eleFirst = `<link `
    endBr = ''
    midText = 'This is your link'
   eleSecond = `/>`
  }
  return (
    <div id={index}><span style={{color: '#3DA2A7'}}>{eleFirst}</span><span style={{color:'#FCC981'}}>id={index}</span><span style={{color: '#3DA2A7'}}>{endBr}</span> {midText}  <span style={{color: '#3DA2A7'}}>{eleSecond}</span></div>
    )
  })
  return (
    <div id='codePreview'>
      <link rel={'stylesheet'} href={'./static/css/codePreview.css'} />
      <p id='import'><span style={{color: '#6C95B3'}}>import</span> <span style={{color:'#FCC981'}}>{'{'} h {'}'}</span> <span style={{color: '#6C95B3'}}> from</span> <span style={{color:'#FCC981'}}>"preact"</span></p>
      <p id='export'><span style={{color: '#6C95B3'}}>export default function </span> <span style={{color: '#3DA2A7'}}>App</span>() {'{'}</p>
      <p id= 'return'><span style={{color: '#6C95B3'}}>return </span>(</p>
      <p id='mainOpeningTag'><span style={{color: '#FEE68E'}}>{'<main>'}</span></p>
      <div id='htmlTags'> <span style={{color: 'pink'}}>{htmlTags}</span></div>
      <p id='mainClosingTag'><span style={{color: '#FEE68E'}}>{'</main>'}</span></p>
      <p id='paren'>);</p>
      <p id='endingCurly'>{"}"}</p>
      </div>
  )
}

export default CodePreview;

