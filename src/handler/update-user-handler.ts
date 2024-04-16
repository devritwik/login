import { Request, RequestHandler, Response } from "express";
import { UserModel } from "../model/user-model";

export default function updateUser(): RequestHandler {
  return async (req: Request, res: Response) => {
    try {
      await UserModel.updateOne({ id: req.params.id }, { ...req.body });
      res.status(201).json({
        status: "ok",
        message: "User Updated",
      });
    } catch (err: any) {
      res.status(500).json({
        status: "error",
        message: "Something Went Wrong" + err.message,
      });
    }
  };
}
