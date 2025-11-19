const express = require("express");
const router = express.Router();
const Case = require("../models/Case");

router.post("/addcase", async (req, res) => {
    try {
        const newCase = new Case(req.body);
        await newCase.save();
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = router;
