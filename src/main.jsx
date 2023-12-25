import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  HashRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Documents, Home } from "./page";

const router = createBrowserRouter([
  {
    path: "/pdmi-print-fe",
    element: <Home />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/docs",
    element: <Documents />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
