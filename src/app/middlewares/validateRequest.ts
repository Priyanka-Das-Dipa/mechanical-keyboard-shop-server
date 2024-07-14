import { AnyZodObject } from "zod";
import catchAsync from "../utils/catchAsync";

const validationRequest = (zodSchema: AnyZodObject) => {
  return catchAsync(async (req, res, next) => {
    await zodSchema.parseAsync(req.body);
    next();
  });
};

export default validationRequest;
