import { React } from '../../deps.tsx';

const Navbar: any = (props: any) => {
  const { setPreviewPage } = props;

  return (
    <div className="navBar" style={{width: '100%', height: '1%'}}>
      <button style={{width: '50%', padding: '0px', fontSize: '20px', height: '100px', backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", fontWeight: 'bolder'}}
        className="codePreviewBtn"
        onClick={() => {
          setPreviewPage('codePreview');
        }}
      >
        <h3 className="codePreviewBtn">Code Preview</h3>
      </button>
      <button style={{width: '50%', padding: '0px', fontSize: '20px', height: '100px', backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", fontWeight: 'bolder'}}
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