import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import * as xPython from "@x-python/core";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


await xPython.init();
