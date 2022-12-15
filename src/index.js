import React from "react";
import ReactDOM from "react-dom/client";
import ModalDialog from "./lib/ModalDialog";
import "./lib/modalDialog.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalDialog name="Modal Dialog Test" />
  </React.StrictMode>
);
