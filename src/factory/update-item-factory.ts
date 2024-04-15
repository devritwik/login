import { Request } from "express";
import { ItemType } from "../helper/const";
import { AddressModel } from "../model/address-model";
import { OrderModel } from "../model/order-model";
import { ProductModel } from "../model/product-model";
import { UserModel } from "../model/user-model";
import { SalesChannelModel } from "../model/sales-channel-model";

export default async function updateItemFactory(
  item: ItemType,
  id: string,
  req: Request
) {
  if (item === "user") {
    return await UserModel.updateOne({ id: id }, { ...req.body });
  } else if (item === "address") {
    return await AddressModel.updateOne({ id: id }, { ...req.body });
  } else if (item === "order") {
    return await OrderModel.updateOne({ id: id }, { ...req.body });
  } else if (item === "product") {
    return await ProductModel.updateOne({ id: id }, { ...req.body });
  } else if (item === "saleschannel") {
    return await SalesChannelModel.updateOne({ id: id }, { ...req.body });
  }

  return {};
}
