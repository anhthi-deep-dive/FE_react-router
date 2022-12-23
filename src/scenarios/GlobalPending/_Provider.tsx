import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Product from "./Product";
import Root from "./Root";
import User from "./User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "user",
        element: <User />,
      },
      {
        path: "product",
        element: <Product />,
      },
    ],
  },
]);

const Provider = () => {
  return <RouterProvider router={router} />;
};

export default Provider;
