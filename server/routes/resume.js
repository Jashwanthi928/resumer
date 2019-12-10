// Importing express, mongoose, modals and router
const express = require("express");
const router = express.Router();
const Resume = require("../models/Resume");
const Mongoose = require("mongoose");

router.get("/resumes", (req, res, next) => {
  //returning all resumes
  const resumes = Resume.find({}, (err, resumes) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        data: resumes
      });
    }
  });
});

//posting resumes to database
router.post("/resumes", (req, res, next) => {
  console.log(req.body);
  //creating new mongoose modal
  let newresume = new Resume({
    _id: new Mongoose.Types.ObjectId(),
    name: req.body["name"],
    image: req.body["image"],
    designation: req.body["designation"],
    mailid: req.body["mailid"],
    contactnumber: req.body["contactnumber"],
    skills: req.body["skills"],
    githublink: req.body["githublink"],
    repositories: req.body["repositories"],
    linesofcode: req.body["linesofcode"],
    commits: req.body["commits"],
    project1name: req.body["project1name"],
    project1description: req.body["project1description"],
    project1technologies: req.body["project1technologies"],
    project2name: req.body["project2name"],
    project2description: req.body["project2description"],
    project2technologies: req.body["project2technologies"],
    project3name: req.body["project3name"],
    project3description: req.body["project3description"],
    project3technologies: req.body["project3technologies"],
    project3technologies: req.body["project3technologies"],
    schoolname12th: req.body["schoolname12th"],
    courseduration12th: req.body["courseduration12th"],
    percentage12th: req.body["percentage12th"],
    schoolname10th: req.body["schoolname10th"],
    courseduration10th: req.body["courseduration10th"],
    percentage10th: req.body["percentage10th"],
    collegenamemasters: req.body["collegenamemasters"],
    coursenamemasters: req.body["coursenamemasters"],
    coursedurationmasters: req.body["coursedurationmasters"],
    percentagemasters: req.body["percentagemasters"],
    institutionnameextracourse: req.body["institutionnameextracourse"],
    coursenameextracourse: req.body["coursenameextracourse"],
    coursedurationextracourse: req.body["coursedurationextracourse"],
    percentageextracourse: req.body["percentageextracourse"]
  });
  //saving resume in database
  newresume.save(err => {
    if (err) {
      res.status(400).json({
        message: "The Resume was not saved",
        errorMessage: err.message
      });
    } else {
      res.status(201).json({
        message: "Resume was saved successfully"
      });
    }
  });
});

module.exports = router;
