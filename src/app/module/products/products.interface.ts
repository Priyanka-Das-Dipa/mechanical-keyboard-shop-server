import { z } from "zod";
import { productValidation } from "./products.validation";


export type TProducts = z.infer<
  typeof productValidation.addProductValidationSchema
>;
