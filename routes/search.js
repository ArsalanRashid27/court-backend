// server.js (ESM)
// ❌ require nahi ❌
// ✔ import ✔

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Load .env
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log("MongoDB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend Running...");
});

// Import routes
import searchRoutes from "./routes/searchRoutes.js";
app.use("/api", searchRoutes);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
