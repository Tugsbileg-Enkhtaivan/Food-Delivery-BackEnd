import express, { Request, Response } from "express";

const port = 3000;

const app = express();

app.get("/", (_req: Request, res: Response) => {
  const food = [
    {
      _id: {
        "type": ObjectId,
      }
    }
  ];
  res.json(food);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
