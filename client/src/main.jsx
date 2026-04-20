import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Importations CSS
import "./assets/css/bootstrap.css";
import "./assets/css/all.css";
import "./assets/css/style.css";

// Importation JS (le bundle est crucial)
import "./assets/js/bootstrap.bundle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
