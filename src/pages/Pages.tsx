import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import Dashboard from "./Dashboard";
import DashboardChildError from "./Dashboard/DashboardChildError";
import Product from "./Dashboard/Product";
import ProductDetail from "./Dashboard/Product/ProductDetail";

const Pages = () => {
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          errorElement: <DashboardChildError />,
          children: [
            {
              path: "product",
              element: <Product />,
              children: [
                {
                  path: ":productId",
                  element: <ProductDetail />,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "/",
      element: <Navigate to="/dashboard" replace />,
      errorElement: <div>404 Not Found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Pages;
