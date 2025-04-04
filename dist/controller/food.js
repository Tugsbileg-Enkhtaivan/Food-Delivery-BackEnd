"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFood = exports.patchUpdateFoods = exports.updateFoods = exports.getFoods = exports.createFood = void 0;
const Food_1 = require("../schema /Food");
const createFood = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const created = yield Food_1.Food.create(request.body);
        response.json({ success: true, food: created });
    }
    catch (error) {
        response.status(401).json({
            success: false,
            msg: error.message,
        });
    }
});
exports.createFood = createFood;
const getFoods = (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield Food_1.Food.find().populate("category");
    response.json({ success: true, foods });
});
exports.getFoods = getFoods;
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
const updateFoods = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const foodData = request.body;
    try {
        const updateFood = yield Food_1.Food.findByIdAndUpdate(id, foodData, {
            new: true,
        }).populate("category");
        if (!updateFood) {
            return response
                .status(404)
                .json({ success: false, message: "Food item not found" });
        }
        return response.json({ success: true, food: updateFood });
    }
    catch (error) {
        console.error(error);
        return response
            .status(500)
            .json({ success: false, message: "Server error" });
    }
});
exports.updateFoods = updateFoods;
const patchUpdateFoods = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const foodData = request.body;
    try {
        const updateFood = (yield Food_1.Food.findByIdAndUpdate(id, { $set: foodData }, { new: true })).populate("category");
        if (!updateFood) {
            return response
                .status(404)
                .json({ success: false, message: "Food not found" });
        }
        return response.json({ success: true, food: updateFood });
    }
    catch (error) {
        console.log(error);
        return response
            .status(500)
            .json({ success: false, message: "Server error" });
    }
});
exports.patchUpdateFoods = patchUpdateFoods;
const deleteFood = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const deletedFood = yield Food_1.Food.findByIdAndDelete(id);
        if (!deletedFood) {
            return response.status(404).json({ success: false, message: "Food item not found" });
        }
        return response.json({ success: true, message: "Food item deleted successfully" });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ sucess: false, message: "Server error" });
    }
});
exports.deleteFood = deleteFood;
//# sourceMappingURL=food.js.map