import { Request } from "express";
import { ItemType } from "../helper/const";
import { UserModel } from "../model/user-model";
import { v4 } from "uuid";
import { ProductModel } from "../model/product-model";
import { AddressModel } from "../model/address-model";
import { OrderModel } from "../model/order-model";
import { SalesChannelModel } from "../model/sales-channel-model";

export default function createItemFactory(item: ItemType, req: Request) {
  let itemType;
  if (item === "user") {
    itemType = new UserModel({
      id: v4(),
      ...req.body,
    });
  } else if (item === "address") {
    itemType = new AddressModel({
      id: v4(),
      ...req.body,
    });
  } else if (item === "order") {
    itemType = new OrderModel({
      id: v4(),
      ...req.body,
    });
  } else if (item === "product") {
    itemType = new ProductModel({
      id: v4(),
      ...req.body,
    });
  } else if (item === "saleschannel") {
    itemType = new SalesChannelModel({
      id: v4(),
      ...req.body,
    });
  }
  return itemType;
}
