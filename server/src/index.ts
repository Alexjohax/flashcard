import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/Deck";

const PORT = 5000;

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("gg");
});

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

const db = mongoose
  .connect(
    "mongodb+srv://flashcard:pN0NSaOf0CJJuTvT@cluster0.0egfvi2.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(5000);
  });
