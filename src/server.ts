import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import genericRouter from "./routes/router";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

const app = express();
dotenv.config();

//Use all routes
app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//all routes add below
app.use(genericRouter);

app.get("/health", (req, res) => {
  res.end("I am alive");
});

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();

app.listen(3000, () => {
  console.log(`Server Started at 3000 port`);
});
