import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Storep from "./Store/Storep";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Paras from "./Paras";
import Paras1 from "./Paras1";

//Now First We havee to Create a Router

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Paras /> },
      { path: "/Paras1", element: <Paras1 /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Storep>
      <RouterProvider router={router} />
    </Storep>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
