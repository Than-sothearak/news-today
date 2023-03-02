import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./page/Home";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { Single } from "./page/Single";
import { Write } from "./page/Write";
import Layout from "./components/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Home />
      },
      {
        path: "/single",
        element:<Single />
      },
      {
        path: "/write",
        element:<Write />
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
