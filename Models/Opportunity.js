const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OpportunitySchema = new Schema(
  {
    title: { type: String },
    organization: { type: String },
    organizationEmail: { type: String, unique: true },
    contact: { type: Number },
    description: { type: String },
    location: { type: String },
    date: { type: Date },
    time: { type: Date },
    duration: { type: String },
    skillsRequired: { type: [String] },
    minAge: { type: Number },
    maxAge: { type: Number },
    categories: { type: [String] },
    registrationDeadline: { type: Date },
    maxNumberOfVolunteers: { type: Number },
    additionalNotes: { type: String },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Opportunity", OpportunitySchema);
