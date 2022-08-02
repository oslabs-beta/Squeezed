import { React } from "../../../deps.tsx";
import { IHtmlElement, IPreviewProps } from "./../../utils/types.ts";

//generates preview of code preview
const IslandPreview: any = (props: IPreviewProps) => {
  const { elementsArr, setElementsArr } = props;
  let htmlElement: unknown;
  let htmlText: unknown;
  let htmlTextAlign: unknown;
  let htmlTextDecoration: unknown;
  let htmlBackground: unknown;
  let htmlColor: unknown;
  let htmlMargin: unknown;
  let htmlWidth: unknown;
  let htmlHeight: unknown;
  let htmlPadding: unknown;
  let htmlFontSize: unknown;

  const testArray: string[] = [];
  elementsArr.forEach((ele: IHtmlElement) => {
    for (let key in ele) {
      htmlElement = Object.values(ele)[1];
      htmlText = Object.values(ele)[2];
      htmlTextAlign = Object.values(ele)[3];
      htmlTextDecoration = Object.values(ele)[4];
      htmlBackground = Object.values(ele)[5];
      htmlColor = Object.values(ele)[6];
      htmlMargin = Object.values(ele)[7];
      htmlWidth = Object.values(ele)[8];
      htmlHeight = Object.values(ele)[9];
      htmlPadding = Object.values(ele)[10];
      htmlFontSize = Object.values(ele)[11];
    }
    testArray.push(
      `<${htmlElement} style='color:${htmlColor};background-color:${htmlBackground};height:${htmlHeight};width:${htmlWidth};text-align:${htmlTextAlign};margin:${htmlMargin};text-decoration:${htmlTextDecoration};padding:${htmlPadding};font-size:${htmlFontSize};'>${htmlText}</${htmlElement}>`
    );
  });

  let html = testArray.map((e: any, i: number) => e).join(" ");

  return (
    <div id="mainDiv">
      <link rel={"stylesheet"} href={"./static/css/islandPreview.css"} />
      <iframe frameBorder="0" srcDoc={html}></iframe>
    </div>
  );
};

export default IslandPreview;
