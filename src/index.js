import React from "react";
import ReactDOM from "react-dom/client";
import Basic from "./basic";
import Show from "./show";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Basic />,
    children: [
      {
        path: "/home",
        element: <Show />,
      },
    ],
  },
  // {
  //   path: "/home",
  //   element: <Show />,
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
