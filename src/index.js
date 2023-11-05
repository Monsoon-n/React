import React from "react";
import ReactDOM from "react-dom/client";
import Basic from "./page/basic/basic";
import Home from "./page/home/home";
import Calculator from "./page/calculator/calculator";
import Main from "./page/main.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index.js";

const store = createStore(rootReducer)

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
