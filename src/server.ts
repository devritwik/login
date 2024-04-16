import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import loginRouter from "./routes/router";

const app = express();
dotenv.config();

//Use all routes
app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", loginRouter);

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
