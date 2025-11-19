import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("Mongo Error:", err));

import searchRoutes from "./routes/searchRoutes.js";
import addCaseRoutes from "./routes/addCase.js";
import deleteCaseRoutes from "./routes/deleteCase.js";

app.use("/api", searchRoutes);
app.use("/api", addCaseRoutes);
app.use("/api", deleteCaseRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
