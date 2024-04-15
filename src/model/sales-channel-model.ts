import { Schema, InferSchemaType } from "mongoose";
import * as mongoose from "mongoose";

const salesChannelSchema = new Schema(
  {
    id: { type: String, require: true, unique: true },
    name: { type: String, required: true, unique: true },
    fees: { type: Number, require: true },
  },
  { timestamps: true }
);
export type SalesChannel = InferSchemaType<typeof salesChannelSchema>;
export const SalesChannelModel = mongoose.model(
  "SalesChannel",
  salesChannelSchema
);
