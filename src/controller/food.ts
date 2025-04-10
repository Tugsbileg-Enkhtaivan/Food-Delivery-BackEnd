import { request, response } from "express";
import { Food } from "../schema /Food";

export const createFood = async (request, response) => {
  try {
    const created = await Food.create(request.body);
    response.json({ success: true, food: created });
  } catch (error) {
    response.status(401).json({
      success: false,
      msg: error.message,
    });
  }
};

export const getFoods = async (_request, response) => {
  const foods = await Food.find().populate("category");
  response.json({ success: true, foods });
};

// export const deleteFood = async (Request, Response) => {
//   const food = await Food.findByIdAndDelete(Request.params.id);
//   Response.json({ success: true, food });
// };

// export const updateFood = async (Request, Response) => {
//   const food = await Food.findByIdAndUpdate(Request.params.id, Request.body, {
//     new: true,
//   });
//   Response.json({ success: true, food });
// };

export const updateFoods = async (request, response) => {
  const { id } = request.params;
  const foodData = request.body;

  try {
    const updateFood = await Food.findByIdAndUpdate(id, foodData, {
      new: true,
    }).populate("category");

    if (!updateFood) {
      return response
        .status(404)
        .json({ success: false, message: "Food item not found" });
    }

    return response.json({ success: true, food: updateFood });
  } catch (error) {
    console.error(error);
    return response
      .status(500)
      .json({ success: false, message: "Server error" });
  }
};

export const patchUpdateFoods = async (request, response) => {
  const { id } = request.params;
  const foodData = request.body;

  try {
    const updateFood = (
      await Food.findByIdAndUpdate(id, { $set: foodData }, { new: true })
    ).populate("category");

    if (!updateFood) {
      return response
        .status(404)
        .json({ success: false, message: "Food not found" });
    }

    return response.json({ success: true, food: updateFood });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ success: false, message: "Server error" });
  }
};

export const deleteFood = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedFood = await Food.findByIdAndDelete(id);

    if (!deletedFood) {
      return response
        .status(404)
        .json({ success: false, message: "Food item not found" });
    }
    return response.json({
      success: true,
      message: "Food item deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ success: false, message: "Server error" });
  }
};
