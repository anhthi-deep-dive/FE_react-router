import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import Product from "./Product";
import Root from "./Root";
import User from "./User";

const router = createBrowserRouter([
  {
    path: "/root",
    element: <Root />,
    children: [
      {
        path: "user/:userId",
        element: <User />,
      },
      {
        path: "product/:productId?",
        element: <Product />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="root/user/123" replace />,
  },
]);

const Provider = () => {
  return <RouterProvider router={router} />;
};

export default Provider;
