import { React } from '../../deps.tsx';

const Navbar: any = (props: any) => {
  const { setCustomizationPage } = props;

  return (
    <div className="navBar">
      <button
        className="stylingBtn"
        onClick={() => {
          setCustomizationPage('styling');
        }}
      >
        <h3 className="stylingBtnText">Styling</h3>
      </button>
      <button
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