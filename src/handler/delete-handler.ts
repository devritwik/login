import { Request, RequestHandler, Response } from "express";
import deleteItemFactory from "../factory/delete-item-factory";
import { ItemType } from "../helper/const";

export default function deleteItem(): RequestHandler {
  return async (req: Request, res: Response) => {
    const item = req.params.item as ItemType;
    const id = req.params.itemId;

    try {
      await deleteItemFactory(item, id);
      res.status(200).json({
        status: "ok",
        message: `${item} deleted successfully`,
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: `${item} not deleted`,
      });
    }
  };
}
