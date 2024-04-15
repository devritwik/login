import { ItemType } from "../helper/const";
import { AddressModel } from "../model/address-model";
import { OrderModel } from "../model/order-model";
import { ProductModel } from "../model/product-model";
import { SalesChannelModel } from "../model/sales-channel-model";
import { UserModel } from "../model/user-model";

export default async function deleteItemFactory(item: ItemType, id: string) {
  if (item === "user") {
    return await UserModel.deleteOne({ id: id });
  } else if (item === "address") {
    return await AddressModel.deleteOne({ id: id });
  } else if (item === "order") {
    return await OrderModel.deleteOne({ id: id });
  } else if (item === "product") {
    return await ProductModel.deleteOne({ id: id });
  } else if (item === "saleschannel") {
    return await SalesChannelModel.deleteOne({ id: id });
  }

  return {};
}
