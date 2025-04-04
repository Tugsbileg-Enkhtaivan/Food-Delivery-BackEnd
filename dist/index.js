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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Food_1 = require("./schema /Food");
const food_1 = require("./routes/food");
const connection_1 = require("./utils/connection");
const category_1 = require("./routes/category");
dotenv_1.default.config();
const PORT = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1/foods", food_1.foodRouter);
app.use("/api/v1/categories", category_1.categoryRouter);
app.get("/", (_req, res) => {
    res.json(Food_1.Food);
});
app.get("/", (_request, response) => {
    response.send("ok");
});
// app.post("/foods", async (req, res) => {
// });
// app.listen(port, async () => {
//   const connectDb = async () => {
//     try {
//       await mongoose.connect(
//         "mongodb+srv://tugsuindawork:i3rD7VwbcYs6O1ZN@cluster0.7qddbcz.mongodb.net/"
//       );
//       console.log("Success");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   connectDb();
//   console.log(`Example app listening on port ${port}`);
// });
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connection_1.connection)();
    console.log(`Server is running http://localhost:${PORT}`);
}));
//# sourceMappingURL=index.js.map