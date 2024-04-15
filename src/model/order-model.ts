import { Schema, InferSchemaType } from "mongoose";
import * as mongoose from "mongoose";

const orderSchema = new Schema(
  {
    id: { type: String, require: true, unique: true },
    product: { type: Schema.Types.ObjectId, ref: "Product", require: true },
    address: { type: Schema.Types.ObjectId, ref: "Address", require: true },
    user: { type: Schema.Types.ObjectId, ref: "User", require: true },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "SalesChannel",
      require: true,
    },
    orderId: { type: String, require: true },
    date: { type: String, require: true },
    sellPrice: { type: Number, require: true },
    quantity: { type: Number, require: true },
    status: { type: String, require: true },
    shippingCost: { type: Number, require: true },
    trackingCode: { type: String, require: true },
    shippingProvider: { type: String, require: true },
    shippingNote: { type: String, require: false },
  },
  { timestamps: true }
);
export type Order = InferSchemaType<typeof orderSchema>;

export const OrderModel = mongoose.model("Order", orderSchema);
