import { Router } from "express";
import { productsRoutes } from "../module/products/products.route";

const router = Router();
const modelRoute = [
  {
    path: "/products",
    route: productsRoutes,
  },
];

modelRoute.forEach((item) => {
  return router.use(item.path, item.route);
});

export default router;
