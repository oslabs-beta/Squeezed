import { React } from '../../../deps.tsx';

const IslandPreview: any = (props: any) => {
  const {elementsArr, setElementsArr} = props;
  let htmlElement;
  let htmlText;
  let htmlTextAlign;
  let htmlTextDecoration;
  let htmlBackground;
  let htmlColor;
  let htmlMargin;
  let htmlWidth;
  let htmlHeight;
  let htmlPadding;
  let htmlFontSize;
  let htmlFontWeight;

  const testArray:string[]=[];
  elementsArr.forEach(ele => {
    for (let key in ele){
      htmlElement = Object.values(ele)[1]
      htmlText = Object.values(ele)[2]
      htmlTextAlign = Object.values(ele)[3]
      htmlTextDecoration = Object.values(ele)[4]
      htmlBackground = Object.values(ele)[5]
      htmlColor = Object.values(ele)[6]
      htmlMargin = Object.values(ele)[7]
      htmlWidth = Object.values(ele)[8]
      htmlHeight = Object.values(ele)[9]
      htmlPadding = Object.values(ele)[10]
      htmlFontSize = Object.values(ele)[11]
      htmlFontWeight = Object.values(ele)[12]
    }
    testArray.push(`<${htmlElement} style='color:${htmlColor};background-color:${htmlBackground};height:${htmlHeight};width:${htmlWidth};text-align:${htmlTextAlign};margin:${htmlMargin};text-decoration:${htmlTextDecoration};padding:${htmlPadding};font-size:${htmlFontSize};font-weight:${htmlFontWeight}'>${htmlText}</${htmlElement}>`)
    
  })

  let html = testArray.map((e,i) => (e)).join(' ');
  return (
    <div style={{height: '100%', width: '100%'}}>
      <iframe  height='750px' width='100%' frameBorder="0" srcDoc = {html}></iframe>
      <button 
    onClick={() =>  navigator.clipboard.writeText(`html: ${html}`)}
  >
    Copy
  </button>
    </div>
  )
}

export default IslandPreview;

