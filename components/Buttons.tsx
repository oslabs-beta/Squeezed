//import statements
import { React } from "../deps.tsx";
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import Popup from "./popup.tsx";


export default function Buttons(props: any) {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [data, setData] = React.useState('');
  const {
    elementsArr,
    setElementsArr,
    currentElement,
    setCurrentElement,
    project,
    setProject,
    user,
    setUser,
  } = props;

  async function togglePopup() {
    let output;
    await fetch("http://localhost:8080/home/get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: 1 }),
    })
      
      .then((data) => data.json())
      .then((data) => {
        output = data
      })
      .catch((err) => console.log(err));
      
      console.log(output)
    // setIsOpen(!isOpen);


  }

  async function save(){
    const body = {
      project_id: project,
      elementsArr: elementsArr,
      project: project,
      user: user
    }
    await fetch('http://localhost:8080/home/save', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    })
    .then((data) => data.json())
    .then(data => console.log("I'm on the front end", data))
    .catch((err) => console.log(err));
  
  }

  async function deleteData(){
    await fetch('http://localhost:8080/home', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ project_id: project }),
    })
    .then((data) => data.json())
    .catch((err) => console.log(err));
    // setElementsArr([]);
    // setCurrentElement('');
  }

  function clear(){
    //clears front end
    setElementsArr([]);
    setCurrentElement('');
  }
    

  function exportFunc() {
    // this should open up the window directory with deno ???
    // Deno.readDir
    // handle = await window.showDirectoryPicker()({mode: 'read' })
  }

  // const buttonsStyle = {
  //   gridArea: 'buttons',
  //   backgroundColor: 'rgb(225, 0, 255)',
  //   border: '2px solid white',
  //   fontSize: '30px'
  // } as const;

  return (
    <main>
      <link rel={"stylesheet"} href={"./static/css/sideBarStyle.css"} />
      <div id="buttonContainer">
        <button
          style={{
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            color: "#2D3033",
            width: "90%",
            fontSize: "20px",
            fontWeight: "bolder",
            marginTop: "10px",
            marginLeft: "7px",
          }}
          id="clearBtn"
          onClick={() => {
            clear();
          }}
        >
          Clear Project
        </button>
        <button
          style={{
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            color: "#2D3033",
            width: "90%",
            fontSize: "20px",
            fontWeight: "bolder",
            marginTop: "15px",
            marginLeft: "7px",
          }}
          id="saveBtn"
          onClick={() => {
            // serve(save);
            save();
            console.log("clicked");
          }}
        >
          Save Progress
        </button>
        <button
          id="loadBtn"
          style={{
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            color: "#2D3033",
            width: "90%",
            fontSize: "20px",
            fontWeight: "bolder",
            marginTop: "15px",
            marginLeft: "7px",
          }}
          onClick={() => {
            alert("Project deleted");
            deleteData();
          }}
        >
          Delete Project
        </button>

        <div>
          <button
            onClick={togglePopup}
            style={{
              backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
              color: "#2D3033",
              width: "90%",
              fontSize: "20px",
              fontWeight: "bolder",
              marginTop: "15px",
              marginLeft: "7px",
            }}
          >
            Load Project
          </button>
          {isOpen && (
            <Popup
              content={
                <>
                <div id="search">
                  <div id="tableDiv">
                      <table>
                        <tbody>
                          {data}
                        </tbody>
                      </table>
                  </div>
                  <button type="submit" id='loadButton'>Load project</button>
                </div>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
      </div>
    </main>
  );
};
