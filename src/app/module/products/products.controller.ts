import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productService } from "./products.service";

const addProducts = catchAsync(async (req, res) => {
    const result = await productService.addProductDb(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Product Added Successfully",
      data: result,
    });
  });


export const productsController ={
    addProducts,
}