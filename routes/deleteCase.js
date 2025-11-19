import express from "express";
import Case from "../models/Case.js";

const router = express.Router();

router.delete("/deletecase/:id", async (req, res) => {
    try {
        await Case.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
