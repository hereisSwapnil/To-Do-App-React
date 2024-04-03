import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

const root = document.getElementById("root");
const rootInstance = createRoot(root);

rootInstance.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>
);
