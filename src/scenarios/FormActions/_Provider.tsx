import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import { updateUserAction } from "./actions";
import Root from "./Root";
import UpdateUser from "./UpdateUser";

const router = createBrowserRouter([
  {
    path: "/root",
    element: <Root />,
  },
  {
    path: "/update-user/:userId",
    action: updateUserAction,
    element: <UpdateUser />,
  },
  {
    path: "/",
    element: <Navigate to="/update-user/123" replace />,
  },
]);

const Provider = () => {
  return <RouterProvider router={router} />;
};

export default Provider;
