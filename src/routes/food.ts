import express from "express";
import {
  createFood,
  deleteFood,
  getFoods,
  updateFoods,
} from "../controller/food";

export const foodRouter = express.Router();

foodRouter.post("/", createFood).get("/", getFoods).put("/:id", updateFoods).delete("/:id", deleteFood).patch("/:id", updateFoods);
