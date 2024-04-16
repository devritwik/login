import { Request, RequestHandler, Response } from "express";
import { UserModel } from "../model/user-model";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export default function handleLogin(): RequestHandler {
  return async (req: Request, res: Response) => {
    try {
      const user = await UserModel.findOne({ username: req.body.username });
      const isMatched = await bcrypt.compare(
        req.body.password,
        user?.password ?? ""
      );
      if (user && isMatched) {
        const userPayload = {
          username: user.username,
          role: user.role,
          firstname: user.firstname,
          lastname: user.lastname,
        };

        jwt.sign(
          userPayload,
          String(process.env.PRIVATE_KEY ?? "SecretKey12345"),
          (error, token) => {
            console.log(token);
            res.status(200).json({
              status: "ok",
              message: `Logged In successfully`,
              token: token,
            });
          }
        );
      } else {
        res.status(400).json({
          status: "error",
          message: `Login Failed`,
        });
      }
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: `not updated`,
      });
    }
  };
}
