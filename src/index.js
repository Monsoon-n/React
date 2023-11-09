import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Reducers/index";
import Basic from "./page/basic/basic";
import Home from "./page/home/home";
import Calculator from "./page/calculator/calculator";
import Baidu from "./page/Baidu/main";
import Redux from "./page/Redux";
import ReduxResult from "./page/Redux-result";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
let store = createStore(rootReducer);
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
      {
        path: "/baidu",
        element: <Baidu />,
      },
      {
        path: "/redux",
        element: <Redux />,
      },
      {
        path: "/reduxresult",
        element: <ReduxResult />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
