export const Routes = Object.freeze({
  Dashboard: {
    path: "/dashboard",
    fullPath: "/dashboard",
    name: "Dashboard",
    Product: {
      path: "product",
      fullPath: "/dashboard/product",
      name: "Product",
    },
    ProductDetail: {
      path: "product/:productId",
      fullPath: "/dashboard/product/:productId",
      name: "Product Detail",
    },
    ThrowError: {
      path: "throw-error",
      name: "Throw Error",
    },
  },
});
