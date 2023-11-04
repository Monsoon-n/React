import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./pages/Header/header.jsx";
import Main from "./pages/main";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/home",
          // element: <Home />,
        },
        {
          path: "/calculator",
          // element: <Calculator />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
