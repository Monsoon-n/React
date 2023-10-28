import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: '/login',
      element: <div>login</div>
    },
    {
      path: '/home',
      element: <Home/>,
      children: [
        {
          path: "first",
          element: <div>first</div>,
        },
        {
          path: "/home/jisuanqi",
          element: <div>jisuanqi</div>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
