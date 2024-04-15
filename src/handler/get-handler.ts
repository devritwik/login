import { Request, RequestHandler, Response } from "express";
import getItemFactory from "../factory/get-item-factory";
import { ItemType } from "../helper/const";

export function getAllItem(): RequestHandler {
  return async (req: Request, res: Response) => {
    const item = req.params.item as ItemType;
    const itemId = req.params.itemId;
    try {
      const data = await getItemFactory(item, itemId);
      res.status(200).json({
        status: "OK",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "Error",
        message: "Something Went wrong",
      });
    }
  };
}

export function getSingleItem(): RequestHandler {
  return (req: Request, res: Response) => {
    const item = req.params.item;
    const itemId = req.params.itemId;

    res.end(`Item is ${item} with id is ${itemId}`);
  };
}
