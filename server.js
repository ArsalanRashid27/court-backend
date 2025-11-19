const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS for Vercel
app.use(cors({
    origin: "https://courtcases-frontend.vercel.app",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// MONGODB CONNECT
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Error:", err));


// Routes
app.use("/api", require("./routes/searchRoutes"));
app.use("/api", require("./routes/addCase"));
app.use("/api", require("./routes/deleteCase"));


// Test route
app.get("/", (req, res) => {
    res.send("Court Backend Running Successfully!");
});


// Start Server (Render-compatible)
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
