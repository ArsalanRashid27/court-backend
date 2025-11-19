import express from "express";
import Case from "../models/Case.js";

const router = express.Router();

router.post("/addcase", async (req, res) => {
    try {
        const newCase = new Case(req.body);
        await newCase.save();
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
