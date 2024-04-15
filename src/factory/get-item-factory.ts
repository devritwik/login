import { ItemType } from "../helper/const";
import { AddressModel } from "../model/address-model";
import { OrderModel } from "../model/order-model";
import { ProductModel } from "../model/product-model";
import { SalesChannelModel } from "../model/sales-channel-model";
import { UserModel } from "../model/user-model";

export default async function getItemFactory(item: ItemType, id?: string) {
  let query = {};
  if (id) query = { id: id };
  if (item === "user") {
    return await UserModel.find(query).sort({ updatedAt: -1 });
  } else if (item === "address") {
    if (id)
      return await AddressModel.find({ user: id })
        .populate("user")
        .sort({ updatedAt: -1 });
    else
      return await AddressModel.find({})
        .populate("user")
        .sort({ updatedAt: -1 });
  } else if (item === "order") {
    return await OrderModel.find(query)
      .populate("product")
      .populate("user")
      .populate("address")
      .populate("channel")
      .sort({ updatedAt: -1 })
      .exec();
  } else if (item === "product") {
    return await ProductModel.find(query).sort({ updatedAt: -1 });
  } else if (item === "saleschannel") {
    return await SalesChannelModel.find(query).sort({ updatedAt: -1 });
  }

  return {};
}

export async function getSingleItem() {}
