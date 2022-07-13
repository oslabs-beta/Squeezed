import React from "https://dev.jspm.io/react@16.13.1";
import ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";
import App from "../components/app.tsx";
import { Route } from 'https://esm.sh/react-dom@18.2.0';

(ReactDOM as any).hydrate(
  <Route path='/' element={<App/>}/>,
  // <App />,
  //@ts-ignore
  document.getElementById("root"),
);