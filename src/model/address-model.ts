import { Schema } from "mongoose";
import * as mongoose from "mongoose";

const addressSchema = new Schema(
  {
    id: { type: String, require: true, unique: true },
    line1: { type: String, require: true },
    subadminArea: { type: String, require: false },
    adminArea: { type: String, require: false },
    city: { type: String },
    country: { type: String, require: true },
    pin: { type: Number, require: true },
    name: { type: String, require: true, unique: false },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    formataddress: { type: String, require: false },
    lat: { type: String },
    long: { type: String },
  },
  { timestamps: true }
);
export type Address = mongoose.InferSchemaType<typeof addressSchema>;
export const AddressModel = mongoose.model("Address", addressSchema);
