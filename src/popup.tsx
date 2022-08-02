import { React } from "../deps.tsx";

const Popup = (props:any) => {
  return (
    <div className="popup-box">
      <link rel={"stylesheet"} href={"./static/css/popup.css"} />

      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
