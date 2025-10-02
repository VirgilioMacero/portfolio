import express from "express";
import sendMailRouter from "./sendMail.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: `${process.env.FRONTEND_URL}`, // tu frontend
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use("/api/sendMail", sendMailRouter);

app.listen(3001, () => console.log("Server running on 3001"));
