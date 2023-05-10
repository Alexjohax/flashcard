import express, { Request, Response } from "express";
import mongoose from "mongoose";
const app = express();

const db = mongoose.connect(
  "mongodb+srv://flashcard:pN0NSaOf0CJJuTvT@cluster0.0egfvi2.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/", (req: Request, res: Response) => {
  res.send("gg");
});

app.get("/hello", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(5000);
