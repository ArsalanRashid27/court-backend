const express = require("express");
const router = express.Router();
const Case = require("../models/Case");

router.get("/search", async (req, res) => {
    const query = req.query.query;

    const results = await Case.find({
        CaseNumber: { $regex: query, $options: "i" }
    });

    res.json(results);
});

module.exports = router;
