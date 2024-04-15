import express from "express";
import { getAllItem, getSingleItem } from "../handler/get-handler";
import createItem from "../handler/create-handler";
import updateItem from "../handler/update-handler";
import deleteItem from "../handler/delete-handler";
import { getAnalytics } from "../handler/get-analytics-handler";

const genericRouter = express.Router();

genericRouter.get("/get/:item/", getAllItem());
genericRouter.get("/get/:item/:itemId", getAllItem());
genericRouter.post("/create/:item", createItem());
genericRouter.patch("/update/:item/:itemId", updateItem());
genericRouter.delete("/delete/:item/:itemId", deleteItem());
genericRouter.get("/analytics", getAnalytics());
export default genericRouter;
