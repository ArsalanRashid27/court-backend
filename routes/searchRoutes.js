const express = require("express");
const router = express.Router();
const Case = require("../models/Case");

// SEARCH IN ALL IMPORTANT FIELDS
router.get("/search", async (req, res) => {
    const query = req.query.query;

    if (!query) return res.json([]);

    const results = await Case.find({
        $or: [
            { CaseNumber: { $regex: query, $options: "i" } },
            { Parties: { $regex: query, $options: "i" } },
            { PetitionerAdvocate: { $regex: query, $options: "i" } },
            { RespondentAdvocate: { $regex: query, $options: "i" } }
        ]
    });

    res.json(results);
});

module.exports = router;
