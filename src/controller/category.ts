import { response } from "express";
import { categoryRouter } from "../routes/category";
import { Category } from "../schema /Category";

export const createCategory = async (request, response) => {
  try {
    const created = await Category.create(request.body);
    response.json({ success: true, category: created });
  } catch (error) {
    response.status(401).json({
      success: false,
      msg: error.message,
    });
  }
};

export const getCategoriesWithFoods = async (_req, res) => {
  try {
    const categories = await Category.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "category",
          as: "foods",
        },
      },
    ]);

    res.json({ success: true, categories });
  } catch (error) {
    res.status(404).json({ success: true, error: error.message });
  }
};
