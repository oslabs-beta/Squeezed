import { React } from '../../../deps.tsx';



const CodePreview: any = (props: any) => {
const {elementsArr, setElementsArr} = props;
// const {inputText, setInputText, textAlign, setTextAlign, textDecoration, setTextDecoration, backgroundColor, setBackgroundColor, color, setColor, margin, setMargin,width, setWidth, height, setHeight, padding, setPadding, }= props;
// console.log("elementsArr inside code preview", elementsArr);
const htmlTags = elementsArr.map((elements: any, index: any) =>{
  let eleFirst:any;
  let eleSecond:any;
  let midText: any;
  let endBr: any;
  if(elementsArr[index].element === 'div') {
    eleFirst = `<div `
    endBr = '>'
    midText = 'This is your div'
    eleSecond = `</div>`
    
  }
  if(elementsArr[index].element === 'paragraph') {
    eleFirst = `<p `
    endBr = '>'
    midText = 'This is your paragraph'
    eleSecond = `</p>`
  }
  if(elementsArr[index].element === 'img') {
    eleFirst = `<img `
    endBr = ' src='
    midText = 'src=""'
    eleSecond = `/>`
  }
  if(elementsArr[index].element === 'button') {
    eleFirst = `<button`
    endBr = '>'
    midText = 'This is your button'
    eleSecond = `</button>`
  }
  if(elementsArr[index].element === 'form') {
    eleFirst = `<form `
    endBr = '>'
    midText = 'This is your form'
    eleSecond= `</form>`
  }
  if(elementsArr[index].element === 'ol') {
    eleFirst = `<ol `
    endBr = '>'
    midText = 'This is your Ordered List'
    eleSecond = `</ol>`
  }
  if(elementsArr[index].element === 'ul') {
    eleFirst = `<ul `
    endBr = '>'
    midText = 'This is your Unordered List'
    eleSecond = `</ul>`
  }
  if(elementsArr[index].element === 'h1') {
    eleFirst = `<h1 `
    endBr = '>'
    midText = 'This is your header 1'
    eleSecond =`</h1>`
  }
  if(elementsArr[index].element === 'h2') {
    eleFirst = `<h2 `
    endBr = '>'
    midText = 'This is your header 2'
    eleSecond =`</h2>`
  }
  if(elementsArr[index].element === 'h3') {
    eleFirst = `<h3 `
    endBr = '>'
    midText = 'This is your header 3'
    eleSecond =`</h3>`
  }
  if(elementsArr[index].element === 'footer') {
    eleFirst = `<footer `
    endBr = '>'
    midText = 'This is your footer'
    eleSecond =`</footer>`
  }
  if(elementsArr[index].element === 'span') {
    eleFirst = `<span `
    endBr = '>'
    midText = 'This is your span'
    eleSecond =`</span>`
  }
  if(elementsArr[index].element === 'menu') {
    eleFirst = `<menu `
    endBr = '>'
    midText = 'This is your menu'
    eleSecond =`</menu>`
  }
  if(elementsArr[index].element === 'input') {
    eleFirst = `<input `
    endBr = '>'
    midText = 'This is your input'
    eleSecond =`</input>`
  }
  if(elementsArr[index].element === 'label') {
    eleFirst = `<label `
    endBr = '>'
    midText = 'This is your label'
    eleSecond =`</label>`
  }
  if(elementsArr[index].element === 'link') {
    eleFirst = `<link `
    endBr = ''
    midText = 'This is your link'
   eleSecond = `/>`
  }
  // console.log(1, elementsArr[index].textAlign)
  let bracket = ''
  let classTag = ''
  let bracket2 =''
  let tw=''
  let slash = ''
  if (elementsArr[index].padding !== '' || elementsArr[index].textAlign !== undefined || elementsArr[index].backgroundColor !== '' || elementsArr[index].color !== '' || elementsArr[index].margin !== '' || elementsArr[index].height !== '' || elementsArr[index].height !== '' || elementsArr[index].padding !== '' || elementsArr[index].width !== ''){
    classTag = `class =`
    bracket='{'
    tw= 'tw`'
    slash= '`'
    bracket2='}'
  }

  let text1= ''
  if (elementsArr[index].textAlign !== '' && elementsArr[index].textAlign !== undefined){
    text1= 'text-'
  }

  let bg= ''
  if (elementsArr[index].backgroundColor !== ''){
    bg= 'bg-'
  }

  let color= ''
  if (elementsArr[index].color !== ''){
    color= 'text-'
  }

  let m = ''
  if (elementsArr[index].margin !== ''){
    m = 'm-'
  }

  let h = ''
  if (elementsArr[index].height !== ''){
    h = 'h-'
  }
  let w = ''
  if (elementsArr[index].width !== ''){
    w = 'w-'
  }

  let p = ''
  if (elementsArr[index].padding !== ''){
    p = 'p-'
  }
  let fs = ''
  if (elementsArr[index].fontSize !== ''){
    fs = 'text-'
  }
  let cn = ''
  console.log(1000, elementsArr[index].className)
  if (elementsArr[index].className !== undefined && elementsArr[index].className !== ''){
    cn = 'className= '
  }

  console.log(45, elementsArr[index])
  
  return (
    <div id={index}><span style={{color: '#5FD389'}}>{eleFirst} {cn}{elementsArr[index].className} </span><span style={{color:'#37CFE0'}}>{classTag}</span> <span style={{color:'white'}}>{bracket}</span><span style={{color:'#5FD389'}}> {tw}</span><span style={{color:'#37CFE0'}}> {elementsArr[index].textDecoration} {bg}{elementsArr[index].backgroundColor} {color}{elementsArr[index].color} {m}{elementsArr[index].margin}  {w}{elementsArr[index].width} {h}{elementsArr[index].height} {p}{elementsArr[index].padding} {fs}{elementsArr[index].fontSize} {text1}{elementsArr[index].textAlign}</span><span style={{color: '#5FD389'}}> {slash}</span> <span style={{color:'white'}}> {bracket2}</span> <span style={{color: '#FDE086'}}> id={index}</span><span style={{color: '#5FD389'}}>{endBr}</span><span style={{color: 'white'}}> {elementsArr[index].text}</span> <span style={{color: '#5FD389'}}>{eleSecond}</span></div>
    )
    
  })


  return (
    <div id='codePreview'>
      <link rel={'stylesheet'} href={'./static/css/codePreview.css'} />
      <p id='import'><span style={{color: '#FF5581'}}>import</span> {'{'}<span style={{color:'#ffff76'}}> h</span> {'}'} <span style={{color: '#FF5581'}}> from</span> <span style={{color:'#ffff76'}}>'preact'</span>;</p>
      <p id='import'><span style={{color: '#FF5581'}}>import</span> {'{'}<span style={{color:'#ffff76'}}> PageProps </span> {'}'} <span style={{color: '#FF5581'}}> from</span> <span style={{color:'#ffff76'}}>'$fresh/server.ts'</span> ;</p>
      <p id='import'><span style={{color: '#FF5581'}}>import</span> {'{'}<span style={{color:'#ffff76'}}> useEffect, useState </span> {'}'} <span style={{color: '#FF5581'}}> from</span> <span style={{color:'#ffff76'}}>'preact/hooks'</span>;</p>
      <p id='import'><span style={{color: '#FF5581'}}>import</span> {'{'}<span style={{color:'#ffff76'}}> tw </span> {'}'} <span style={{color: '#FF5581'}}> from</span> <span style={{color:'#ffff76'}}>'twind'</span>;</p>
      <p id='export'><span style={{color: '#FF5581'}}>export default function </span> <span style={{color: '#37CFE0'}}>App </span>(<span style={{color: '#8B7FDA'}}>props: PageProps</span>) <span style={{color:'white'}} >{'{'}</span></p>
      <p id= 'return'><span style={{color: '#FF5581'}}>return </span>(</p>
      <p id='mainOpeningTag'><span style={{color: '#8B7FDA'}}>{'<main>'}</span></p>
      <div id='htmlTags'><span style={{color: 'pink'}}>{htmlTags}</span></div>
      <p id='mainClosingTag'><span style={{color: '#8B7FDA'}}>{'</main>'}</span></p>
      <p id='paren'>);</p>
      <p id='endingCurly'>{'}'};</p>
      </div>
  )
}

 export default CodePreview;

// import { h } from "preact";

// import { PageProps } from "$fresh/server.ts";

// import { useEffect, useState } from "preact/hooks";

// import { tw } from "twind";

// export default function App(props: PageProps) {

// return (

// <main>

// <h2 id=0> </h2>
// <img id=1 />
// <img class = { tw` bg-r text-r m-r w-r h-r p-r `} id=2 frrrr />
// </main>

// );

// }


// pink: #FF5581
// GREEB: #5FD389
// YELLOW: #FDE086
// BLYE: #37CFE0
// PURPLE: #8B7FDA
