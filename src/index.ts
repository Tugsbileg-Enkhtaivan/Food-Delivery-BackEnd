import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import { Food } from "./schema /Food";

const port = 8000;

const app: Application = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.json(Food);
});

// app.post("/foods", async (req, res) => {
 
// });

app.listen(port, async () => {
  const connectDb = async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://tugsuindawork:i3rD7VwbcYs6O1ZN@cluster0.7qddbcz.mongodb.net/"
      );

      console.log("Success");
    } catch (error) {
      console.log(error);
    }
  };

  connectDb();

  console.log(`Example app listening on port ${port}`);
});
