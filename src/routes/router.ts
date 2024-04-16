import express from "express";
import handleLogin from "../handler/login-handler";
import createUser from "../handler/create-user-handler";
import updateUser from "../handler/update-user-handler";
import deleteUser from "../handler/delete-user-handler";
import getUser from "../handler/get-user-handler";

const loginRouter = express.Router();

loginRouter.post("/login", handleLogin());
loginRouter.post("/create", createUser());
loginRouter.patch("/update/:id", updateUser());
loginRouter.delete("/delete/:id", deleteUser());
loginRouter.get("/all", getUser());

export default loginRouter;
