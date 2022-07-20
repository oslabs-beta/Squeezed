import { React } from '../../deps.tsx';

const Navbar: any = (props: any) => {
  const { setCustomizationPage } = props;

  return (
    <div className="navBar"  style={{width: '100%', padding: '0px', backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", fontWeight: 'bolder', height: '40px'}}>
      <button style={{width: '50%', padding: '0px', fontSize: '15px',marginTop: '-10px', backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", fontWeight: 'bolder', height: '40px', border: 'none'}}
        className="stylingBtn"
        onClick={() => {
          setCustomizationPage('styling');
        }}
      >
        <h3 className="stylingBtnText">Styling</h3>
      </button>
      <button style={{width: '50%', padding: '0px', fontSize: '15px', marginTop: '-10px', backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", fontWeight: 'bolder', height: '40px', border: 'none'}}
        className="routingBtn"
        onClick={() => {
          setCustomizationPage('routing');
        }}
      >
        <h3 className="routingBtnText">Routing</h3>
      </button>
    </div>
  )
}

export default Navbar;