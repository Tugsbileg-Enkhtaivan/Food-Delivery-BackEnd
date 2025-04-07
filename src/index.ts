import express, { Application, request, Request, response, Response } from "express";
import dotenv from "dotenv";
import { Food } from "./schema /Food";
import { foodRouter } from "./routes/food";
import { connection } from "./utils/connection";
import { categoryRouter } from "./routes/category";

dotenv.config();

const PORT = 8000;

const app: Application = express();

app.use(express.json());

app.use("/api/v1/foods", foodRouter);
app.use("/api/v1/categories", categoryRouter);

app.get("/", (_req: Request, res: Response) => {
  res.json(Food);
});

app.get("/" , (_request, response) => {
  response.send("okay")
})

// zailasdo,aosmd
// asdpiansudnasdimoa

// app.post("/foods", async (req, res) => {

// });


//       console.log("Success");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   connectDb();

//   console.log(`Example app listening on port ${port}`);
// });

app.listen(PORT, async () => {
  await connection();
  console.log(`Server is running http://localhost:${PORT}`);
});
