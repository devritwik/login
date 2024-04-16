import { Request, RequestHandler, Response } from "express";
import { UserModel } from "../model/user-model";

export default function getUser(): RequestHandler {
  return async (req: Request, res: Response) => {
    try {
      const users = await UserModel.find().select({ password: 0 }).exec();
      res.status(201).json({
        status: "ok",
        data: users,
      });
    } catch (err: any) {
      res.status(500).json({
        status: "error",
        message: "Something Went Wrong" + err.message,
      });
    }
  };
}
