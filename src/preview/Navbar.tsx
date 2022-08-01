import { React } from '../../deps.tsx';
import { IPreviewProps } from './../utils/types.ts';

type IPreviewNavBarProps = {
  setPreviewPage: (previewPage: string) => void;
}

const Navbar: any = (props: IPreviewNavBarProps) => {
  const { setPreviewPage } = props;

  return (
    <div className="navBar"  >
      <button 
      style={{width:'50%', height: '12%', backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033"}}
        className="codePreviewBtn"
        onClick={() => {
          setPreviewPage('codePreview');
        }}
      >
        Code Preview
      </button>
      <button 
      style={{width:'50%',  height: '12%', backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033"}}

        className="islandPreviewBtn"
        onClick={() => {
          setPreviewPage('islandPreview');
        }}
      >
        Island Preview
      </button>
    </div>
  )
}

export default Navbar;

// style={{width: '50%', padding: '0px', backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", fontWeight: 'bolder', height: '50px',border: 'none', borderLeft:'2px solid black'}}