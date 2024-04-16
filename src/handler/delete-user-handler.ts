import { Request, RequestHandler, Response } from "express";
import { UserModel } from "../model/user-model";

export default function deleteUser(): RequestHandler {
  return async (req: Request, res: Response) => {
    try {
      await UserModel.deleteOne({ id: req.params.id });
      res.status(201).json({
        status: "ok",
        message: "User Deleted",
      });
    } catch (err: any) {
      res.status(500).json({
        status: "error",
        message: "Something Went Wrong" + err.message,
      });
    }
  };
}
