import { React } from '../../deps.tsx';

const Navbar: any = (props: any) => {
  const { setPreviewPage } = props;

  return (
    <div className="navBar">
      <button
        className="codePreviewBtn"
        onClick={() => {
          setPreviewPage('codePreview');
        }}
      >
        <h3 className="codePreviewBtn">Code Preview</h3>
      </button>
      <button
        className="islandPreviewBtn"
        onClick={() => {
          setPreviewPage('islandPreview');
        }}
      >
        <h3 className="islandPreviewBtn">Island Preview</h3>
      </button>
    </div>
  )
}

export default Navbar;