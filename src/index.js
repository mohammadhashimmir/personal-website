import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const first=document.querySelector("#root");
const second=ReactDOM.createRoot(first);

second.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)