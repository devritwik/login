import { Schema, InferSchemaType } from "mongoose";
import * as mongoose from "mongoose";

const productSchema = new Schema(
  {
    id: { type: String, require: true, unique: true },
    name: { type: String, required: true, unique: true },
    quantity: { type: Number, required: true },
    productPrice: { type: Number, required: false },
  },
  { timestamps: true }
);
export type Product = InferSchemaType<typeof productSchema>;
export const ProductModel = mongoose.model("Product", productSchema);
