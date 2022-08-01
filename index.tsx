import { React, ReactDOM } from './deps.tsx';
import { BrowserRouter, HashRouter, Routes, Route} from './deps.tsx';
import App from './components/App.tsx';
import Login from './components/Login.tsx';
import Signup from './components/Signup.tsx';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />  
        <Route path="/home" element={<App />} />  
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
