// import {React, react, ReactDOM} from './deps.tsx';
import {React, ReactDOM } from './deps.tsx';
import App from './components/App.tsx';
import { BrowserRouter, Routes, Route, Link } from './deps.tsx'
import Login from './components/Login.tsx'
import Signup from './components/Signup.tsx'
// import SideBar from './components/SideBar.tsx'
//import all main react components

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />  
        <Route path="/home" element={<App />} />  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
