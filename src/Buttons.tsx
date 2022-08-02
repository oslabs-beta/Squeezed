import { Link, React, useNavigate, serve } from "../deps.tsx";
import Popup from "./popup.tsx";
import Popup2 from "./Popup2.tsx";

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
    setLoadProj,
  } = props;

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  function togglePopup2() {
    if (!projectId) {
      setIsOpen2(!isOpen2);
    } else {
      alert("Project Saved");
      save();
    }
  }

  async function save() {
    let jwt = sessionStorage.getItem("Authorization");
    const body = {
      project_id: projectId,
      elementsArr: elementsArr,
      project_name: saveName,
      user_id: user,
      authorization: jwt,
    };
    await fetch("http://localhost:8080/home/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      .then((data) => {
        if(!projectId) setProjectId(data.project_id);
      })
      .catch((err) => console.log(err));
  }

  async function load() {
    let jwt = sessionStorage.getItem("Authorization");
    await fetch("http://localhost:8080/home/get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user,
        authorization: jwt,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        setProjectList(data);
      })
      .catch((err) => console.log(err));
  }

  async function deleteData() {
    let jwt = sessionStorage.getItem("Authorization");
    await fetch("http://localhost:8080/home/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project_id: projectId,
        authorization: jwt,
      }),
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
    setElementsArr([]);
    setCurrentElement("");
  }

  function clear() {
    setElementsArr([]);
    setCurrentElement("");
  }

  function startNew() {
    setProjectId("");
    setElementsArr([]);
    setCurrentElement("");
    setProjectList([]);
    setLoadProj("");
  }

  async function loadProject(id: any) {
    let jwt = sessionStorage.getItem("Authorization");
    await fetch("http://localhost:8080/home/load", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project_id: id,
        authorization: jwt,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        setElementsArr(data);
        setProjectId(id);
      })
      .catch((err) => console.log(err));
  }

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/");
  };

  function logout() {
    sessionStorage.clear();
    navigateToLogin();
  }

  const projs = projectList.map((elements: any, index: any) => {
    return (
      <div>
        <link rel={"stylesheet"} href={"./static/css/buttons.css"} />
        <div
          id="projectPopUp"
          onClick={() => {
            setLoadProj(elements.id);
          }}
        >
          <div id="projNames">{elements.name} </div>
        </div>
      </div>
    );
  });

  return (
    <main>
      <link rel={"stylesheet"} href={"./static/css/buttons.css"} />
      <div id="buttonContainer">
        <button
          id="clearBtn"
          onClick={() => {
            clear();
          }}
        >
          Clear Project
        </button>
        <button
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
                  <form
                    onSubmit={() => {
                      save();
                      togglePopup2();
                    }}
                  >
                    <input
                      value={saveName}
                      onChange={(e) => setSaveName(e.target.value)}
                      type="text"
                      id="inputFields"
                      placeholder="Enter Name"
                      required
                    ></input>
                    <button id="SaveProject" type="submit">
                      Save project
                    </button>
                  </form>
                </div>
              </>
            }
            handleClose={togglePopup2}
          />
        )}
        <button
          id="loadBtn"
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
              togglePopup();
            }}
            id="loadProjectButton"
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
                        <div id="tableEle">{projs}</div>
                      </tbody>
                    </table>
                  </div>
                  <button
                    id="loadButton"
                    onClick={() => {
                      loadProject(loadProj);
                      togglePopup();
                    }}
                  >
                    Load project
                  </button>
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
          id="newProjectBtn"
        >
          New Project
        </button>
        <button
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
}
