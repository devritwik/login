import { Schema, InferSchemaType } from "mongoose";
import * as mongoose from "mongoose";

const userSchema = new Schema(
  {
    id: { type: String, require: true, unique: true },
    username: { type: String, required: true, unique: true },
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    password: { type: String, require: true },
    isActive: { type: Boolean, require: true, default: true },
    role: { type: String, require: true, default: "user" },
  },
  { timestamps: true }
);

export type User = InferSchemaType<typeof userSchema>;

export const UserModel = mongoose.model("User", userSchema);
