const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 🔥 CORS FIX for Vercel frontend
app.use(cors({
    origin: "https://courtcases-frontend.vercel.app",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// ✅ MongoDB Connect
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("DB Error:", err));


// ✅ Routes
app.use("/api", require("./routes/searchRoutes"));
app.use("/api", require("./routes/addCase"));
app.use("/api", require("./routes/deleteCase"));


// ✅ Root Test Route
app.get("/", (req, res) => {
    res.send("Court Case Backend is Running...");
});


// ✅ Start Server (Render uses PORT from environment)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
