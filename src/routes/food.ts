import express from "express";
import {
  createFood,
  deleteFood,
  getFoods,
  updateFoods,
} from "../controller/food";
import { checkToken } from "../middleware/check-token";

export const foodRouter = express.Router();

foodRouter.post("/",checkToken, createFood).get("/", getFoods).put("/:id", updateFoods).delete("/:id", deleteFood).patch("/:id", updateFoods);
