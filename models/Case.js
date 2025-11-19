import mongoose from "mongoose";

const CaseSchema = new mongoose.Schema({
  SN: String,
  CaseNumber: String,
  Parties: String,
  PetitionerAdvocate: String,
  RespondentAdvocate: String
});

export default mongoose.model("Case", CaseSchema);
