//import statements
import { React } from '../deps.tsx';
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

export default function Buttons(props:any) {

// const [error, setError] = useState(null);
// const [isLoaded, setIsLoaded] = useState(false);
// const [items, setItems] = useState([]);
const {
  elementsArr, 
  setElementsArr, 
  currentElement, 
  setCurrentElement,
  project,
  setProject,
  user,
  setUser } = props;
// const {inputText, setInputText, textAlign, setTextAlign, textDecoration, setTextDecoration, backgroundColor, setBackgroundColor, color, setColor, margin, setMargin,width, setWidth, height, setHeight, padding, setPadding, }= props;
// useEffect(() => {
//   fetchResult()
// }, []);
// state

// async function loadProject() {
//   //fetch request to load project -> need to 
//   await fetch('http://localhost:8080/home', {
//       method: 'GET',
//       mode: 'no-cors',
//   })
//   .then((data) => data.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//   // set user and project state to the info pulled from backend
//   setProject(data.project);
//   setUser(data.user);
// }

async function deleteData(){
  await fetch('http://localhost:8080/home', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ project_id: project }),
      mode: 'no-cors',
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

async function save(){
  const body = {
    project_id: project,
    elementsArr: elementsArr,
    project: project,
    user: user
  }
  await fetch('http://localhost:8080/home', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
      mode: 'no-cors',
   })
   .then((data) => data.json())
   .then(data => console.log("I'm on the front end", data))
   .catch((err) => console.log(err));

// try{
//   const body = { project_id: null, elementsArr: elementsArr };
//   const url = 'https://localhost:8080';
//   const response = await fetch(url, {
//     mode: 'no-cors'
//   });
//   // let response = await fetch("http://localhost:8080", {
//   //   method: 'GET',
//   // });
//   const data = await response.text();
//   console.log("I'm on the front end", data)
//   console.log(response.body)
//   return response;

// } catch{
//     console.log("ERROR");
//   }
};

function exportFunc(){
  // this should open up the window directory with deno ???
  // Deno.readDir 
}

// const buttonsStyle = { 
//   gridArea: 'buttons',
//   backgroundColor: 'rgb(225, 0, 255)',
//   border: '2px solid white',
//   fontSize: '30px'
// } as const;

return (
  <main>
        <link rel={'stylesheet'} href={'./static/css/sideBarStyle.css'} />
    <div id="buttonContainer">
      <button style={{backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", width: "90%", fontSize: '20px', fontWeight: 'bolder', marginTop: '15px', marginLeft: '7px'}}
        id="clearBtn"
        onClick={() => {
          clear();
        }}
      >
        Clear Project
      </button>
      <button style={{backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", width: "90%", fontSize: '20px', fontWeight: 'bolder', marginTop: '15px' , marginLeft: '7px'}}
        id="saveBtn"
        onClick={() => {
          // serve(save);
          save();
          console.log('clicked');
        }}
      >
        Save Progress
      </button>
      <button
        id="loadBtn" style={{backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", width: "90%", fontSize: '20px', fontWeight: 'bolder', marginTop: '15px', marginLeft: '7px'}}
        onClick={() => {
          alert("Project deleted");
          deleteData();
        }}
      >
        Delete Project
      </button>
      <button style={{backgroundImage: "linear-gradient(#68EDA7, #FFE958)", color: "#2D3033", width: "90%", fontSize: '20px', fontWeight: 'bolder', marginTop: '15px', marginLeft: '7px'}}
        id="exportBtn"
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          // alert("Project Exported");
          console.log('clicked')
          exportFunc();
        }}
      >
        Export Code
      </button>
    </div>
  </main>
);
}