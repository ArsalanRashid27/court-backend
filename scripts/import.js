import mongoose from "mongoose";
import dotenv from "dotenv";
import Case from "../models/Case.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

const data = [
  {
    SN: "1",
    CaseNumber: "CWPIL-97",
    Parties:
      "CONTRACTORS WELFARE ASSOCIATION HIMACHAL PRADESH Versus THE STATE OF HP AND OTHERS",
    PetitionerAdvocate: "GANESH BAROWALIA",
    RespondentAdvocate: "AG GAMBHIR SINGH",
  },
  {
    SN: "2",
    CaseNumber: "EX.P.-1027",
    Parties:
      "PARAS RAM Versus TEK RAM SHARMA, STATE OF HP AND OTHERS",
    PetitionerAdvocate: "NITIN THAKUR",
    RespondentAdvocate:
      "NITIN THAKUR GANESH BAROWALIA, LALIT KUMAR SHARMA",
  }
];

async function importData() {
  try {
    await Case.deleteMany(); // Purana data clean
    await Case.insertMany(data);
    console.log("Data Inserted Successfully!");
    process.exit();
  } catch (error) {
    console.log("Insert Error:", error);
    process.exit(1);
  }
}

importData();
