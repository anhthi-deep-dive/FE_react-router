import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { loadUserData } from "./loaders";
const Root = React.lazy(() => import("./Root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback="Root component loading...">
        <Root />
      </React.Suspense>
    ),
    loader: loadUserData,
  },
]);

const Provider = () => {
  return <RouterProvider router={router} />;
};

export default Provider;
