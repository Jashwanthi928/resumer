// Importing mongoose
const mongoose = require("mongoose");

//this is a simple Mongoose Model
const resumeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  designation: { type: String, required: true },
  mailid: { type: String, required: true },
  contactnumber: { type: Number, required: true },
  githublink: { type: String, required: true },
  skills: { type: [String], required: true },
  repositories: { type: Number, required: true },
  commits: { type: Number, required: true },
  linesofcode: { type: Number, required: true },
  project1name: { type: String, required: true },
  project1description: { type: String, required: true },
  project1technologies: { type: [String], required: true },
  project2name: { type: String, required: true },
  project2description: { type: String, required: true },
  project2technologies: { type: [String], required: true },
  project3name: { type: String, required: true },
  project3description: { type: String, required: true },
  project3technologies: { type: [String], required: true },
  schoolname12th: { type: String, required: true },
  courseduration12th: { type: String, required: true },
  percentage12th: { type: String, required: true },
  schoolname10th: { type: String, required: true },
  courseduration10th: { type: String, required: true },
  percentage10th: { type: String, required: true },
  collegenamemasters: { type: String, required: true },
  coursenamemasters: { type: String, required: true },
  coursedurationmasters: { type: String, required: true },
  percentagemasters: { type: String, required: true },
  institutionnameextracourse: { type: String, required: true },
  coursenameextracourse: { type: String, required: true },
  coursedurationextracourse: { type: String, required: true },
  percentageextracourse: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

//create and export the model
module.exports = mongoose.model("Resume", resumeSchema);
