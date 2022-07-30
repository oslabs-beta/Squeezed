// // Standard Library Dependencies 
// export { join, dirname } from 'https://deno.land/std@0.74.0/path/mod.ts';
// export * as log from 'https://deno.land/std@0.74.0/log/mod.ts';

//React
export * as ReactDOM from "https://esm.sh/react-dom@18.2.0"
// export { default as ReactDOMServer } from 'https://dev.jspm.io/react-dom@16.14.0/server';
import * as React from "https://esm.sh/react@18.2.0"
export { React }
import {
    BrowserRouter,
    HashRouter,
    Routes,
    Route,
    useNavigate,
    Link
  } from "https://esm.sh/react-router-dom@6.3.0"

export { BrowserRouter, HashRouter, Routes, Route, Link, useNavigate}
//Twind
import { setup, tw } from "https://esm.sh/twind@0.16.16";
import { getStyleTag, virtualSheet } from "https://esm.sh/twind@0.16.16/sheets";

// import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server";