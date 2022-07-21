import { React } from '../../deps.tsx';

const Navbar: any = (props: any) => {
  const { setCustomizationPage } = props;

  return (
    <div className="navBar" >
      {/* <div id='btn1'>
            <link rel={'stylesheet'} href={'./static/css/styling.css'} />
      <button 
        className="stylingBtn"
        onClick={() => {
          setCustomizationPage('styling');
        }}
      >
        <h3 className="stylingBtnText">Styling</h3>
      </button>
      </div>
      <div id='btn2'>
      <button 
        className="routingBtn"
        onClick={() => {
          setCustomizationPage('routing');
        }}
      >
        <h3 className="routingBtnText">Routing</h3>
      </button>
      </div> */}
    </div>
  )
}

export default Navbar;