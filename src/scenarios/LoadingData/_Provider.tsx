import React from "react";

import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import { loadUserData } from "./loaders";
const Root = React.lazy(() => import("./Root"));

const router = createBrowserRouter([
  {
    path: "/root",
    element: (
      <React.Suspense fallback="Root component loading...">
        <Root />
      </React.Suspense>
    ),
    loader: loadUserData,
  },
  {
    path: "/",
    element: <Navigate to="root" replace />,
  },
]);

const Provider = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<div>Loading data...</div>}
    />
  );
};

export default Provider;
