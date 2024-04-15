import { Request, RequestHandler, Response } from "express";
import { UserModel } from "../model/user-model";
import { ItemType } from "../helper/const";
import { v4 } from "uuid";
import createItemFactory from "../factory/create-item-factory";

export default function createItem(): RequestHandler {
  return async (req: Request, res: Response) => {
    const item: ItemType = req.params.item as ItemType;

    let itemType = createItemFactory(item, req);

    try {
      if (itemType) {
        await itemType.save();
      }
      res.status(201).json({
        status: "OK",
        message: `New ${item} created successfully`,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "Error",
        message: "Creation Failed",
      });
    }
  };
}
