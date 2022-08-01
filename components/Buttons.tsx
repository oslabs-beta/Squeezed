//import statements
import { Link, React } from "../deps.tsx";
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import Popup from "./popup.tsx";
import Popup2 from"./Popup2.tsx"


export default function Buttons(props: any) {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [saveName, setSaveName] = React.useState("");
  const {
    elementsArr,
    setElementsArr,
    currentElement,
    setCurrentElement,
    projectId,
    setProjectId,
    user,
    setUser,
    projectList,
    setProjectList,
    loadProj,
    setLoadProj
  } = props;

  async function togglePopup() {
    setIsOpen(!isOpen);
  }
  async function togglePopup2() {
    if (!projectId) {
      setIsOpen2(!isOpen2);
    } else {
      alert('Project Saved')
      save();
    }
  }

  async function load() {
    await fetch("http://localhost:8080/home/get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: 1 }),
    })
      
      .then((data) => data.json())
      .then((data) => {
        setProjectList(data)
      })
      .catch((err) => console.log(err));
      
      console.log(projectList)
  }

  async function save(){
    const body = {
      project_id: projectId,
      elementsArr: elementsArr,
      project_name: saveName,
      user_id: 1
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
    console.log('deleting', projectId)
    await fetch('http://localhost:8080/home/delete', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ project_id: projectId }),
    })
    .then((data) => data.json())
    .catch((err) => console.log(err));
    setElementsArr([]);
    setCurrentElement('');
  }
// function logOut {

// }
  function clear(){
    //clears front end
    setElementsArr([]);
    setCurrentElement('');
  }
  
  function startNew(){
    //clears front end
    setProjectId('')
    setElementsArr([]);
    setCurrentElement('');
    setProjectList([]);
    setLoadProj('');
  }

  function selectProject(id: any) {
    setLoadProj(id)
  }


  async function loadProject(id: any) {
    await fetch('http://localhost:8080/home/load', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ project_id: id }),
    })
    .then((data) => data.json())
    .then((data) => {
      setElementsArr(data)
      console.log('data is here', data)
    })
    .catch((err) => console.log(err));

    setProjectId(id)
  }


  const projs = projectList.map((elements: any, index: any) => { 
    return (
      <div>
      <link rel={"stylesheet"} href={"./static/css/buttons.css"} />
      <div id='test' style={{ backgroundColor: '#2d3033', color: 'white',fontWeight: 'bolder',borderRadius: '5px', width: '100%', overflow: 'auto', marginTop: '10px'}} onClick={()=> { setLoadProj(elements.id)}}>
          <div id='test' style={{ padding: '15px'}}> {elements.name} </div>
      </div>
      </div>
    )})




  return (
    <main>
      <link rel={"stylesheet"} href={"./static/css/sideBarStyle.css"} />
      <link rel={"stylesheet"} href={"./static/css/buttons.css"} />
      <div id="buttonContainer" style={{ maxHeight: '100%', width:'100%', marginLeft: '12%', marginRight: '12%'}}>
        <button
          style={{
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            color: "#2D3033",
            width: "100%",
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
            width: "100%",
            fontSize: "20px",
            fontWeight: "bolder",
            marginTop: "15px",
            marginLeft: "7px",
          }}
          id="saveBtn"
          onClick={() => {
            togglePopup2();
          }}
        >
          Save Progress
        </button>
        {isOpen2 && (
            <Popup2
              content={
                <>
                  <div id="inputName">
                    <form onSubmit={() => {
                      save();
                      togglePopup2();
                    }}>
                      <input
                        value={saveName}
                        onChange={(e) => setSaveName(e.target.value)}
                        type="text"
                        style={{border:'black', color: 'black'}}
                        placeholder="Enter Name"
                        required
                      ></input>                      
                      <button id='SaveProject' type="submit">Save project</button>
                    </form>
                  </div>
                </>
              }
              handleClose={togglePopup2}
            />
          )}
        <button
          id="loadBtn"
          style={{
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            color: "#2D3033",
            width: "100%",
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
            onClick={() => {
              load();
              togglePopup()
            }}
            style={{
              backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
              color: "#2D3033",
              width: "100%",
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
                  <div id="tableDiv">
                      <table>
                        <tbody>
                          <div id='tableEle' >
                          {projs}
                          </div>
                        </tbody>
                      </table>
                  </div>
                  <button style={{backgroundColor: '#2d3033', color: '#68EDA7', marginLeft: '20%'}} id='loadButton' onClick={() =>{
                    loadProject(loadProj);
                    togglePopup();
                  }}>Load project</button>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </div> 
        <button
            onClick={() => {
              startNew();

            }}
            style={{
              backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
              color: "#2D3033",
              width: "100%",
              fontSize: "20px",
              fontWeight: "bolder",
              marginTop: "15px",
              marginLeft: "7px",
            }}
          >
            New Project
          </button>
        <button
          id="loadBtn"
          style={{
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            color: "#2D3033",
            width: "100%",
            fontSize: "20px",
            fontWeight: "bolder",
            marginTop: "15px",
            marginLeft: "7px",
          }}
          onClick={() => {
            alert("Logged out");
            
          }}
        >
        <Link to='/' id='logOutLink'>
            <p>Log Out</p>
            </Link>
        </button>

      </div>
    </main>
  );
};
