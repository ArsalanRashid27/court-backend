import express from "express";
import Case from "../models/Case.js";

const router = express.Router();

router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.json([]);
    }

    const results = await Case.find({
      $or: [
        { SN: { $regex: query, $options: "i" } },
        { CaseNumber: { $regex: query, $options: "i" } },
        { Parties: { $regex: query, $options: "i" } },
        { PetitionerAdvocate: { $regex: query, $options: "i" } },
        { RespondentAdvocate: { $regex: query, $options: "i" } }
      ]
    });

    // ---------------------------
    // DUPLICATE FILTER (Fix)
    // ---------------------------
    const unique = [];
    const seen = new Set();

    for (let r of results) {
      if (!seen.has(r.CaseNumber)) {
        unique.push(r);
        seen.add(r.CaseNumber);
      }
    }

    res.json(unique);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
