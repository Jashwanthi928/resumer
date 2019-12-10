// Importing react and destructuring component from 'react'
import React, { Component } from "react";
// Importing custom style
import "../index.css";


//Creating the Main component
class Main extends Component {
  state = {
    resumes: []
  };

  // Data is fetched from api after component is mounted
  componentDidMount = () => {
    fetch("https://resumeapplicationbackend.herokuapp.com/resumes")
      .then(res => {
        return res.json();
      })
      .then(resumeData => {
        this.setState({ resumes: resumeData.data });
      });
  };

  //rendering the dom elements through react to display each resume
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="resumeCardHolders">
            {this.state.resumes.map(resume => (
              <div key={resume._id}>
                <div className="card mb-3 resumeCards">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={resume.image}
                        className="card-img resumeCardImage"
                        alt="image"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{resume.name}</h5>
                        <p className="card-text">
                          Mail Id: {resume.mailid}
                          <br />
                          Contact: {resume.contactnumber}
                          <br />
                          Github: {resume.githublink}
                        </p>

                        <button
                          data-toggle="modal"
                          data-target="#myModal"
                          type="button"
                          className="btn btn-primary viewButton"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade customModal" id="myModal">
                  <div className="modal-dialog custom-modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">{resume.name}</h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                        >
                          &times;
                        </button>
                      </div>
                      <div className="modal-body custom-modal-body">
                        <div className="container profilePictureAndNameDivision">
                          <div className="row felxibleProfilePictureAndNameDivisionRow">
                            <div className="nameAndDesignation">
                              <h1>{resume.name}</h1>
                              <h2>{resume.designation}</h2>
                            </div>
                          </div>
                        </div>
                        <hr className="horizontalLine" />
                        <div className="contactDetailsBand">
                          <div className="contact">
                            <i className="fas fa-envelope icon"></i>
                            <a href={`mailto:${resume.mailid}`}>
                              {resume.mailid}
                            </a>
                          </div>
                          <div className="contact">
                            <i className="fas fa-mobile-alt icon"></i>
                            <a href={`tel:${resume.contactnumber}`}>
                              {" "}
                              {resume.contactnumber}
                            </a>
                          </div>
                          <div className="contact">
                            <i className="fab fa-github icon"></i>
                            <a
                              href={`${resume.githublink}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {resume.githublink}
                            </a>
                          </div>
                        </div>
                        <hr className="horizontalLine" />
                        <div className="skillsAndRepository">
                          <div className="skills">
                            <h2>Skills</h2>
                            <span className="badge badge-secondary">
                              {resume.skills}
                            </span>
                          </div>
                          <div className="repository">
                            <h3>
                              Repositories:{" "}
                              <span className="githubdetails">
                                {resume.repositories}
                              </span>
                            </h3>
                            <h3>
                              Commits:
                              <span className="githubdetails">
                                {" "}
                                {resume.commits}
                              </span>
                            </h3>
                            <h3>
                              Lines of codes:
                              <span className="githubdetails">
                                {" "}
                                {resume.linesofcode}
                              </span>
                            </h3>
                          </div>
                        </div>
                        <hr />
                        <div className="projectsAndEducation">
                          <div className="projects/Internships">
                            <h2 className="projectstitle">
                              Projects/Internships
                            </h2>
                            <div className="project">
                              <h5>{resume.project1name}</h5>
                              <li>{resume.project1description}</li>
                              <p className="technologiesUsed">
                                {resume.project1technologies}
                              </p>
                            </div>
                            <div className="project">
                              <h5>{resume.project2name}</h5>
                              <li>{resume.project2description}</li>
                              <p className="technologiesUsed">
                                {resume.project2technologies}
                              </p>
                            </div>
                            <div className="project">
                              <h5>{resume.project3name}</h5>
                              <li>{resume.project3description}</li>
                              <p className="technologiesUsed">
                                {resume.project3technologies}
                              </p>
                            </div>
                          </div>
                          <div className="educationList">
                            <h2>Education</h2>
                            <div className="education">
                              <h4>{resume.institutionnameextracourse}</h4>
                              <p>
                                {resume.coursenameextracourse}
                                <br />
                                {resume.coursedurationextracourse}
                                <br />
                                <b>{resume.percentageextracourse}</b>
                              </p>
                            </div>
                            <div className="education">
                              <h4>{resume.collegenamemasters}</h4>
                              <p>
                                {resume.coursenamemasters} <br />
                                {resume.coursedurationmasters}
                                <br />
                                <b>{resume.percentagemasters}</b>
                              </p>
                            </div>
                            <div className="education">
                              <h4>{resume.schoolname12th}</h4>
                              <p>
                                12th Grade <br />
                                {resume.courseduration12th}
                                <br />
                                <b>{resume.percentage12th}</b>
                              </p>
                            </div>
                            <div className="education">
                              <h4>{resume.schoolname10th}</h4>
                              <p>
                                10th Grade <br />
                                {resume.courseduration10th}
                                <br />
                                <b>{resume.percentage10th}</b>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

// Exporting the Main component
export default Main;
