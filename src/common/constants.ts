export const Routes = Object.freeze({
  Dashboard: {
    path: "/dashboard",
    name: "Dashboard",
    Product: {
      path: "product",
      name: "Product",
      ProductId: {
        path: ":productId",
        name: "Product Detail",
      },
    },
    ThrowError: {
      path: "throw-error",
      name: "Throw Error",
    },
  },
});
