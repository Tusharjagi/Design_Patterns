import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { StyleButton, StyleText } from "./HOC";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StyleButton />
    <StyleText />
  </React.StrictMode>
);
