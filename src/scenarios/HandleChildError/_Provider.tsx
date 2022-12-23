import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ChildError from "./ChildError";
import Root from "./Root";
import User from "./User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Root Errors</div>,
    children: [
      {
        errorElement: <ChildError />,
        children: [
          {
            path: "user",
            element: <User />,
          },
        ],
      },
    ],
  },
]);

const Provider = () => {
  return <RouterProvider router={router} />;
};

export default Provider;
