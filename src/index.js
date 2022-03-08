import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";
//translation file
import "utils/translation/i18n";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
