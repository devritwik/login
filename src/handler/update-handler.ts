import { Request, RequestHandler, Response } from "express";
import updateItemFactory from "../factory/update-item-factory";
import { ItemType } from "../helper/const";

export default function updateItem(): RequestHandler {
  return async (req: Request, res: Response) => {
    const item = req.params.item as ItemType;
    const id = req.params.itemId;
    try {
      await updateItemFactory(item, id, req);
      res.status(200).json({
        status: "ok",
        message: `${item} updated successfully`,
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: `${item} not updated`,
      });
    }
  };
}
