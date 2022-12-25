import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import { Routes } from "src/common/constants";

import Dashboard from "./Dashboard";
import DashboardChildError from "./Dashboard/DashboardChildError";
import Product from "./Dashboard/Product";
import ProductDetail from "./Dashboard/Product/ProductDetail";
import ThrowError from "./Dashboard/ThrowError/ThrowError";
import NotFound from "./NotFound";

const Pages = () => {
  const router = createBrowserRouter([
    {
      path: Routes.Dashboard.path,
      element: <Dashboard />,
      children: [
        {
          errorElement: <DashboardChildError />,
          children: [
            {
              path: Routes.Dashboard.Product.path,
              element: <Product />,
              children: [
                {
                  path: Routes.Dashboard.Product.ProductId.path,
                  element: <ProductDetail />,
                },
              ],
            },
            {
              path: Routes.Dashboard.ThrowError.path,
              element: <ThrowError />,
            },
          ],
        },
      ],
    },
    {
      path: "/",
      element: <Navigate to="/dashboard/product" replace />,
      errorElement: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Pages;
