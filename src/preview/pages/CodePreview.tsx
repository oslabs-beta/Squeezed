import { React } from '../../../deps.tsx';
import { IHtmlElement, IPreviewProps } from './../../utils/types.ts';

//generates code preview 
const CodePreview: any = (props: IPreviewProps) => {
const {elementsArr, setElementsArr} = props;

let testArray: string[] = [];

const htmlTags = elementsArr.map((elements: IHtmlElement, index: number) => {
  let eleFirst:any;
  let eleSecond:any;
  let midText: any;
  let endBr: any;

  if(elementsArr[index].element === 'div') {
    eleFirst = `<div `
    endBr = '>'
    eleSecond = `</div>`
    
  }
  if(elementsArr[index].element === 'paragraph') {
    eleFirst = `<p `
    endBr = '>'
    eleSecond = `</p>`
  }
  if(elementsArr[index].element === 'img') {
    eleFirst = `<img `
    endBr = ' src='
    eleSecond = `/>`
  }
  if(elementsArr[index].element === 'button') {
    eleFirst = `<button`
    endBr = '>'
    eleSecond = `</button>`
  }
  if(elementsArr[index].element === 'form') {
    eleFirst = `<form `
    endBr = '>'
    eleSecond= `</form>`
  }
  if(elementsArr[index].element === 'ol') {
    eleFirst = `<ol `
    endBr = '>'
    eleSecond = `</ol>`
  }
  if(elementsArr[index].element === 'ul') {
    eleFirst = `<ul `
    endBr = '>'
    eleSecond = `</ul>`
  }
  if(elementsArr[index].element === 'h1') {
    eleFirst = `<h1 `
    endBr = '>'
    eleSecond =`</h1>`
  }
  if(elementsArr[index].element === 'h2') {
    eleFirst = `<h2 `
    endBr = '>'
    eleSecond =`</h2>`
  }
  if(elementsArr[index].element === 'h3') {
    eleFirst = `<h3 `
    endBr = '>'
    eleSecond =`</h3>`
  }
  if(elementsArr[index].element === 'footer') {
    eleFirst = `<footer `
    endBr = '>'
    eleSecond =`</footer>`
  }
  if(elementsArr[index].element === 'span') {
    eleFirst = `<span `
    endBr = '>'
    eleSecond =`</span>`
  }
  if(elementsArr[index].element === 'menu') {
    eleFirst = `<menu `
    endBr = '>'
    eleSecond =`</menu>`
  }
  if(elementsArr[index].element === 'input') {
    eleFirst = `<input `
    endBr = '>'
    eleSecond =`</input>`
  }
  if(elementsArr[index].element === 'label') {
    eleFirst = `<label `
    endBr = '>'
    eleSecond =`</label>`
  }
  if(elementsArr[index].element === 'link') {
    eleFirst = `<link `
    endBr = ''
   eleSecond = `/>`
  }
  if(elementsArr[index].element === 'title') {
    eleFirst = `<title `
    endBr = '>'
   eleSecond = `</title>`
  }
  if(elementsArr[index].element === 'area') {
    eleFirst = `<area `
    endBr = '>'
   eleSecond = `</area>`
  }

  let bracket = '';
  let classTag = '';
  let bracket2 ='';
  let tw = '';
  let slash = '';
  if (elementsArr[index].padding !== '' || elementsArr[index].texAlign !== undefined || elementsArr[index].backgroundColor !== '' || elementsArr[index].color !== '' || elementsArr[index].margin !== '' || elementsArr[index].height !== '' || elementsArr[index].height !== '' || elementsArr[index].padding !== '' || elementsArr[index].width !== ''){
    classTag = `class=`;
    bracket='{';
    tw= 'tw`';
    slash= '`';
    bracket2='}';
  }

  let text1= '';
  if (elementsArr[index].texAlign !== '' && elementsArr[index].texAlign !== undefined){
    text1= 'text-';
  };

  let bg = '';
  if (elementsArr[index].backgroundColor !== ''){
    bg= 'bg-';
  }

  let color = '';
  if (elementsArr[index].color !== ''){
    color = 'text-';
  }

  let m = '';
  if (elementsArr[index].margin !== ''){
    m = 'm-';
  }

  let h = '';
  if (elementsArr[index].height !== ''){
    h = 'h-';
  }
  let w = '';
  if (elementsArr[index].width !== ''){
    w = 'w-';
  }

  let p = '';
  if (elementsArr[index].padding !== ''){
    p = 'p-';
  }
  let fs = '';
  if (elementsArr[index].fontSize !== ''){
    fs = 'text-';
  }
  let cn = '';
  if (elementsArr[index].className !== undefined && elementsArr[index].className !== ''){
    cn = 'className=';
  } 
  else {
    elementsArr[index].className = index.toString();
  }
  
  testArray.push(`${eleFirst} ${cn}"${elementsArr[index].className}" ${classTag}${bracket}${tw}${bg}${elementsArr[index].backgroundColor}${color}${elementsArr[index].color}${m}${elementsArr[index].margin}${w}${elementsArr[index].width}${h}${elementsArr[index].height}${p}${elementsArr[index].padding}${fs}${elementsArr[index].fontSize}${text1}${elementsArr[index].textDecoration}${text1}${elementsArr[index].texAlign}${slash}${bracket2} id="${index}"${endBr} ${elementsArr[index].inputText} ${eleSecond}`)
  
  return (
    <div id={index.toString()}><span style={{color: '#5FD389'}}>{eleFirst} {cn}{elementsArr[index].className} </span><span style={{color:'#37CFE0'}}>{classTag}</span> <span style={{color:'white'}}>{bracket}</span><span style={{color:'#5FD389'}}> {tw}</span><span style={{color:'#37CFE0'}}> {elementsArr[index].textDecoration} {bg} {elementsArr[index].backgroundColor} {color}{elementsArr[index].color} {m}{elementsArr[index].margin}  {w}{elementsArr[index].width} {h}{elementsArr[index].height} {p}{elementsArr[index].padding} {fs}{elementsArr[index].fontSize} {text1}{elementsArr[index].texAlign} </span><span style={{color: '#5FD389'}}> {slash}</span> <span style={{color:'white'}}> {bracket2}</span> <span style={{color: '#FDE086'}}> id='{index}'</span><span style={{color: '#5FD389'}}>{endBr}</span><span style={{color: 'white'}}> {elementsArr[index].inputText}</span> <span style={{color: '#5FD389'}}>{eleSecond}</span></div>
  )
    
  });
  let html = testArray.map((e,i) => (e)).join('\n');
  
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
      <div className="tooltip">
      <button  
        id='btn'
        onClick={() => 
      
        navigator.clipboard.writeText(`
          import { h } from 'preact';
          
          import { PageProps } from '$fresh/server.ts' ;
          
          import { useEffect, useState } from 'preact/hooks';
          
          import { tw } from 'twind';
          
          export default function App (props: PageProps) {
          
            return (
          
              <main>
          
                  ${html} 
          
              </main>

            );
          
          };`
        )}
      >

      <p id='clip'>&#128203;</p>
      </button>
  
      <span className="tooltiptext">Click to copy!</span>
    </div>
      </div>
  )
}

export default CodePreview;










