import { Router } from "express";
import { productsController } from "./products.controller";


const router = Router();

router.post("/", productsController.addProducts);




export const productsRoutes = router;
