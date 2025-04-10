import express from "express";
import { createCategory, getCategoriesWithFoods } from "../controller/category";
import { checkToken } from "../middleware/check-token";

const categoryRouter = express.Router();

categoryRouter
  .post("/",checkToken,createCategory)
  .get("/with-foods", getCategoriesWithFoods);

export { categoryRouter };
