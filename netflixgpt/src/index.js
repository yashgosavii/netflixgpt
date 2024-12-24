import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App";
import appStore from "./store/appStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
