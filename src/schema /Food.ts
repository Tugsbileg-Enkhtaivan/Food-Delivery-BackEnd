import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    foodName : String,
    price : Number,
    category: String
})
export const Food = mongoose.model("Food", foodSchema)