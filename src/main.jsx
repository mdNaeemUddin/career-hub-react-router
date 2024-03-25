import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootNew from "./Components/RootNew/RootNew";
import Home from "./Components/Home/Home";
import ApplyJob from "./Components/ApplyJob/ApplyJob";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
Home

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootNew></RootNew>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apply-jobs",
        element: <ApplyJob></ApplyJob>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
