import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import User from "./User";
import UserError from "./UserError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/user",
    element: <User />,
    errorElement: <UserError />,
  },
]);

const Provider = () => {
  return <RouterProvider router={router} />;
};

export default Provider;
