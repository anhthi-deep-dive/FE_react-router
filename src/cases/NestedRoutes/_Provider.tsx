import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Profile from "./Profile";
import User from "./User";

const router = createBrowserRouter([
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "user/:userId",
        element: <User />,
      },
      {
        path: "product/:productId?",
        element: <i>Product Component without productId param</i>,
      },
    ],
  },
]);

const Provider = () => {
  return <RouterProvider router={router} />;
};

export default Provider;
