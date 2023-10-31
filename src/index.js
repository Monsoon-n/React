import React from "react";
import ReactDOM from "react-dom/client";
import Basic from "./page/basic/basic";
import Home from "./page/home/home";
import Calculator from "./page/calculator/calculator";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Basic />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
