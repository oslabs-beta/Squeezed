import { React } from '../../deps.tsx';
import { IPreviewProps } from './../utils/types.ts';

type IPreviewNavBarProps = {
  setPreviewPage: (previewPage: string) => void;
}

const Navbar: any = (props: IPreviewNavBarProps) => {
  const { setPreviewPage } = props;

  return (
    <div className="navBar" style={{width: '100%', padding: '0px',fontSize: '25px',marginTop: '-29px', backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033",  textAlign: 'center', border:'none'}}>
      <button style={{width: '50%', padding: '0px', backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", fontWeight: 'bolder', height: '50px', border:'none'}}
        className="codePreviewBtn"
        onClick={() => {
          setPreviewPage('codePreview');
        }}
      >
        <h3 className="codePreviewBtn">Code Preview</h3>
      </button>
      
      <button style={{width: '50%', padding: '0px', backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", fontWeight: 'bolder', height: '50px',border: 'none', borderLeft:'2px solid black'}}
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