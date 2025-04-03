import express from "express";
import { createFood, getFoods } from "../controller/food";

export const foodRouter = express.Router();

foodRouter.post("/", createFood).get('/', getFoods)
