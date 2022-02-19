import { StrictMode } from "react";
import ReactDOM from "react-dom";
require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});

import Doctor from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Doctor />
  </StrictMode>,
  rootElement
);
