import { React } from "../../deps.tsx";
import { IPreviewProps } from "./../utils/types.ts";

type IPreviewNavBarProps = {
  setPreviewPage: (previewPage: string) => void;
};

const Navbar: any = (props: IPreviewNavBarProps) => {
  const { setPreviewPage } = props;

  return (
    <div className="navBar">
      <link rel={"stylesheet"} href={"./static/css/navBarStyling.css"} />
      <button
        className="codePreviewBtn"
        onClick={() => {
          setPreviewPage("codePreview");
        }}
      >
        Code Preview
      </button>
      <button
        className="islandPreviewBtn"
        onClick={() => {
          setPreviewPage("islandPreview");
        }}
      >
        Island Preview
      </button>
    </div>
  );
};

export default Navbar;
