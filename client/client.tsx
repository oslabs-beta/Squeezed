import { React, ReactDOM } from "../deps.ts";
import App from "../components/App.tsx";
// import { Route } from 'https://esm.sh/react-dom@18.2.0';

(ReactDOM as any).hydrate(
  // <Route path='/' element={<App/>}/>,
  // <App />,
  //@ts-ignore
  <App />,
  document.getElementById("root"),
);