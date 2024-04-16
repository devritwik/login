import { Request, RequestHandler, Response } from "express";
import { UserModel } from "../model/user-model";
import { v4 } from "uuid";
import * as bcrypt from "bcrypt";

export default function createUser(): RequestHandler {
  return async (req: Request, res: Response) => {
    try {
      const hash = await bcrypt.hash(req.body.password ?? "Password12345", 10);
      const user = new UserModel({
        id: v4(),
        ...req.body,
        password: hash,
      });
      await user.save();
      res.status(201).json({
        status: "ok",
        message: `User Created successfully`,
        user: user,
      });
    } catch (err: any) {
      res.status(500).json({
        status: "error",
        message: "Something Went Wrong" + err.message,
      });
    }
  };
}
