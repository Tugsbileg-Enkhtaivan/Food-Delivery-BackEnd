import express, { Application, request, Request, response, Response } from "express";
import dotenv from "dotenv";
import { Food } from "./schema /Food";
import cors from "cors";
import { foodRouter } from "./routes/food";
import { connection } from "./utils/connection";
import { categoryRouter } from "./routes/category";
import { authRouter } from "./routes/auth";

dotenv.config();


const app: Application = express();

app.use(express.json());

app.use(cors());

const PORT = 8000;


app.use("/api/v1/foods", foodRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/auth", authRouter);


app.get("/" , (_req, res) => {
  res.send("okay")
})


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
