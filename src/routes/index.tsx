import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import PrivateRoute from './PrivateRoute';
import { Counter } from "../features/counter/Counter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>404 page not found!</h1>,
    children: [
      {
        path: "/",
        element: <PrivateRoute />,
        children: [
          {
            path: "/",
            element: <Counter />
          }
        ]
      },
    ],
  },
]);
