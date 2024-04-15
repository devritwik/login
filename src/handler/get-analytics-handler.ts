import { Request, RequestHandler, Response } from "express";
import { OrderModel } from "../model/order-model";
import { ProductModel } from "../model/product-model";
import { UserModel } from "../model/user-model";
import { SalesChannelModel } from "../model/sales-channel-model";
import { AddressModel } from "../model/address-model";

export function getAnalytics(): RequestHandler {
  return async (req: Request, res: Response) => {
    try {
      const orderCount = await OrderModel.countDocuments({});
      const productCount = await ProductModel.countDocuments({});
      const userCount = await UserModel.countDocuments({});
      const salesChannelCount = await SalesChannelModel.countDocuments({});
      const addressCount = await AddressModel.countDocuments({});
      res.status(200).json({
        status: "ok",
        data: {
          orderCount,
          productCount,
          userCount,
          salesChannelCount,
          addressCount,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "ok",
        message: "Something went wrong",
      });
    }
  };
}
