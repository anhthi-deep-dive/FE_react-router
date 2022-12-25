import { lazy, Suspense } from "react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Routes } from "./common/constants";
import LoadingOverlay from "./components/LoadingOverlay";
import Dashboard from "./pages/Dashboard";
import DashboardChildError from "./pages/Dashboard/DashboardChildError";
import { getProductsLoader } from "./pages/Dashboard/Product/Product.loaders";
import ProductDetail from "./pages/Dashboard/Product/ProductDetail";
import ThrowError from "./pages/Dashboard/ThrowError/ThrowError";
import NotFound from "./pages/NotFound";

const Product = lazy(() => import("./pages/Dashboard/Product"));

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap');

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
  }

  div, a {
    box-sizing: border-box;
  }
`;

const App = () => {
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
              element: (
                <Suspense fallback={<div>Product component loading...</div>}>
                  <Product />
                </Suspense>
              ),
              loader: getProductsLoader,
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

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} fallbackElement={<LoadingOverlay />} />
    </>
  );
};

export default App;
