import { React } from "../../deps.tsx";
import MainContainer from "./MainContainer.tsx";
import Navbar from "./Navbar.tsx";
import { IPreviewProps } from "./../utils/types.ts";

const Preview = (props: IPreviewProps) => {
  const { elementsArr, setElementsArr } = props;
  const [previewPage, setPreviewPage] = React.useState<string>("codePreview");

  return (
    <div className="preview">
      <Navbar setPreviewPage={setPreviewPage} />
      <MainContainer
        previewPage={previewPage}
        setPreviewPage={setPreviewPage}
        elementsArr={elementsArr}
        setElementsArr={setElementsArr}
      />
    </div>
  );
};

export default Preview;
