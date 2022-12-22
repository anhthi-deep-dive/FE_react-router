import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Foo from "./Foo";
import FooError from "./FooError";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/foo",
    element: <Foo />,
    errorElement: <FooError />,
  },
]);

const Provider = () => {
  return <RouterProvider router={router} />;
};

export default Provider;
