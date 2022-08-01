import { Link, React, useNavigate, serve } from "../deps.tsx";
import Popup from "./popup.tsx";
import Popup2 from"./Popup2.tsx"

export default function Buttons(props: any) {

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

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  function togglePopup2() {

    if (!projectId) {
      setIsOpen2(!isOpen2);
    } else {
      alert('Project Saved')
      save();
    }
  }

  async function save(){
    let jwt = sessionStorage.getItem("Authorization");
    const body = {
      project_id: projectId,
      elementsArr: elementsArr,
      project_name: saveName,
      user_id: user,
      authorization: jwt
    }
    await fetch('http://localhost:8080/home/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(data => data.json())
    .then(data => {
      console.log("save data", data);
    })
    .catch(err => console.log(err));
  }

  async function load() {
    let jwt = sessionStorage.getItem("Authorization");
    await fetch("http://localhost:8080/home/get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        user_id: user,
        authorization: jwt
       })
    })
    .then((data) => data.json())
    .then((data) => {
      console.log("load data", data);
      setProjectList(data);
      console.log(projectList);
    })
    .catch((err) => console.log(err));
    console.log(projectList)
  }


  async function deleteData(){
    let jwt = sessionStorage.getItem("Authorization");
    await fetch('http://localhost:8080/home/delete', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          project_id: projectId,
          authorization: jwt
        })
    })
    .then((data) => data.json())
    .catch((err) => console.log(err));
    setElementsArr([]);
    setCurrentElement('');
  }

  function clear(){
    setElementsArr([]);
    setCurrentElement('');
  }
  
  function startNew(){
    setProjectId('')
    setElementsArr([]);
    setCurrentElement('');
    setProjectList([]);
    setLoadProj('');
  }


  async function loadProject(id: any) {
    let jwt = sessionStorage.getItem("Authorization");
    await fetch('http://localhost:8080/home/load', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          project_id: id,
          authorization: jwt
        }),
    })
    .then((data) => data.json())
    .then((data) => {
      setElementsArr(data)
    })
    .catch((err) => console.log(err));

    setProjectId(id)
  }

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/');
  }

  function logout(){
    sessionStorage.clear();
    navigateToLogin();
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
        <div id="buttonContainer" style={{ maxHeight: '300px', overflow: 'scroll'}}>
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
              onClick={() => {
                load();
                togglePopup()
              }}
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
                width: "90%",
                fontSize: "20px",
                fontWeight: "bolder",
                marginTop: "15px",
                marginLeft: "7px",
              }}
            >
              New Project
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
            id="logoutBtn"
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              logout();
            }}
          >
          Logout
          </button>
  
        </div>
      </main>
    );
};
  


