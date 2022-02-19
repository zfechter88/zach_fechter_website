import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Doctor from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Doctor />
  </StrictMode>,
  rootElement
);
