import React from "react";
import ReactDOM from "react-dom";
import { SWRConfig } from "swr";

import App from "./App";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

ReactDOM.render(
  <SWRConfig value={{ fetcher }}>
    <App />
  </SWRConfig>,

  document.querySelector("#root")
);
