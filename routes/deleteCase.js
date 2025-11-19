const express = require("express");
const router = express.Router();
const Case = require("../models/Case");

router.delete("/deletecase/:id", async (req, res) => {
    try {
        await Case.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = router;
