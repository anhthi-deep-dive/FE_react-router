import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
  defer,
} from "react-router-dom";

import getUserInfoApi from "src/apis/getUserInfo";

import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/root",
    element: <Root />,
    loader: () =>
      defer({
        getUserInfoPromise: getUserInfoApi(),
      }),
  },
  {
    path: "/",
    element: <Navigate to="/root" replace />,
  },
]);

const Provider = () => {
  return <RouterProvider router={router} />;
};

export default Provider;
