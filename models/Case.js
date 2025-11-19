const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
    CaseNumber: String,
    Parties: String,
    PetitionerAdvocate: String,
    RespondentAdvocate: String
});

module.exports = mongoose.model("Case", caseSchema);
