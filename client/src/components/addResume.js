// Importing react and destructuring component from 'react'
import React, { Component } from "react";
//Importing redirect from 'react-router'
import { Redirect } from "react-router";

//creating Addresume component
class AddResume extends Component {
  // Setting the initial state
  state = {
    name: null,
    designation: null,
    image: null,
    mailid: null,
    contactnumber: null,
    githublink: null,
    skills: null,
    repositories: null,
    commits: null,
    linesofcode: null,
    project1name: null,
    project1description: null,
    project1technologies: null,
    project2name: null,
    project2description: null,
    project2technologies: null,
    project3name: null,
    project3description: null,
    project3technologies: null,
    schoolname12th: null,
    courseduration12th: null,
    percentage12th: null,
    schoolname10th: null,
    courseduration10th: null,
    percentage10th: null,
    collegenameug: null,
    coursenameug: null,
    coursedurationug: null,
    percentageug: null,
    institutionnameextracourse: null,
    coursenameextracourse: null,
    coursedurationextracourse: null,
    percentageextracourse: null,
    redirect: false
  };
  //   Setting the state according to the value entered in the input box
  getInputValues = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createItem = e => {
    e.preventDefault();
    const resume = {
      name: this.state.name,
      designation: this.state.designation,
      image: this.state.image,
      mailid: this.state.mailid,
      contactnumber: this.state.contactnumber,
      githublink: this.state.githublink,
      skills: this.state.skills,
      repositories: this.state.repositories,
      commits: this.state.commits,
      linesofcode: this.state.linesofcode,
      project1name: this.state.project1name,
      project1description: this.state.project1description,
      project1technologies: this.state.project1technologies,
      project2name: this.state.project2name,
      project2description: this.state.project2description,
      project2technologies: this.state.project2technologies,
      project3name: this.state.project3name,
      project3description: this.state.project3description,
      project3technologies: this.state.project3technologies,
      schoolname12th: this.state.schoolname12th,
      courseduration12th: this.state.courseduration12th,
      percentage12th: this.state.percentage12th,
      schoolname10th: this.state.schoolname10th,
      courseduration10th: this.state.courseduration10th,
      percentage10th: this.state.percentage10th,
      collegenameug: this.state.collegenameug,
      coursenameug: this.state.coursenameug,
      coursedurationug: this.state.coursedurationug,
      percentageug: this.state.percentageug,
      institutionnameextracourse: this.state.institutionnameextracourse,
      coursenameextracourse: this.state.coursenameextracourse,
      coursedurationextracourse: this.state.coursedurationextracourse,
      percentageextracourse: this.state.percentageextracourse
    };
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(resume)
    };
    fetch(
      "https://resumeapplicationbackend.herokuapp.com/resumes",
      options
    ).then(res => {
      console.log(res);
      this.setState({ redirect: true });
    });
  };

  // renders form
  render() {
    const redirect = this.state.redirect;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <section>
          <div className="itemCreation">
            <form onSubmit={this.createItem}>
              <div className="control">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={this.getInputValues} />
              </div>

              <div className="control">
                <label htmlFor="designation">Designation: </label>
                <textarea
                  name="designation"
                  onChange={this.getInputValues}
                ></textarea>
              </div>

              <div className="control">
                <label htmlFor="mailid">Mail Id: </label>
                <input
                  type="text"
                  name="mailid"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="contactnumber">Contact Number: </label>
                <input
                  type="number"
                  name="contactnumber"
                  onChange={this.getInputValues}
                />
              </div>

              <div className="control">
                <label htmlFor="githublink">Github Link: </label>
                <input
                  type="text"
                  name="githublink"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="skills">skills: </label>
                <input
                  type="text"
                  name="skills"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="repositories">Repositories: </label>
                <input
                  type="number"
                  name="repositories"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="commits">Commits: </label>
                <input
                  type="number"
                  name="commits"
                  onChange={this.getInputValues}
                />
              </div>

              <div className="control">
                <label htmlFor="commits">Lines of code: </label>
                <input
                  type="number"
                  name="linesofcode"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="project1name">Project1 Name: </label>
                <input
                  type="text"
                  name="project1name"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="project1description">
                  Project1 Description:{" "}
                </label>
                <input
                  type="text"
                  name="project1description"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="project1technologies">
                  Project1 Technologies:{" "}
                </label>
                <input
                  type="text"
                  name="project1technologies"
                  onChange={this.getInputValues}
                />
              </div>

              <div className="control">
                <label htmlFor="project2name">Project2 Name: </label>
                <input
                  type="text"
                  name="project2name"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="project2description">
                  Project2 Description:{" "}
                </label>
                <input
                  type="text"
                  name="project2description"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="project2technologies">
                  Project2 Technologies:{" "}
                </label>
                <input
                  type="text"
                  name="project2technologies"
                  onChange={this.getInputValues}
                />
              </div>

              <div className="control">
                <label htmlFor="project3name">Project3 Name: </label>
                <input
                  type="text"
                  name="project3name"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="project3description">
                  Project3 Description:{" "}
                </label>
                <input
                  type="text"
                  name="project3description"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="project3technologies">
                  Project3 Technologies:{" "}
                </label>
                <input
                  type="text"
                  name="project3technologies"
                  onChange={this.getInputValues}
                />
              </div>

              <div className="control">
                <label htmlFor="schoolname12th">
                  School Name(12th Grade):{" "}
                </label>
                <input
                  type="text"
                  name="schoolname12th"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="courseduration12th">
                  Course Duration(12th Grade):{" "}
                </label>
                <input
                  type="text"
                  name="courseduration12th"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="percentage12th">Percentage(12th Grade): </label>
                <input
                  type="text"
                  name="percentage12th"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="schoolname10th">
                  School Name(10th Grade):{" "}
                </label>
                <input
                  type="text"
                  name="schoolname10th"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="courseduration10th">
                  Course Duration(10th Grade):{" "}
                </label>
                <input
                  type="text"
                  name="courseduration10th"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="percentage10th">Percentage(10th Grade): </label>
                <input
                  type="text"
                  name="percentage10th"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="collegenameug">
                  College Name(UG):{" "}
                </label>
                <input
                  type="text"
                  name="collegenameug"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="coursenameug">
                  Course Name(UG):{" "}
                </label>
                <input
                  type="text"
                  name="coursenameug"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="coursedurationug">
                  Course Duration(UG):{" "}
                </label>
                <input
                  type="text"
                  name="coursedurationug"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="percentagemasters">Percentage(UG): </label>
                <input
                  type="text"
                  name="percentageug"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="institutionnameextracourse">
                  Institution Name(Extra Course):{" "}
                </label>
                <input
                  type="text"
                  name="institutionnameextracourse"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="coursenameextracourse">
                  Course Name(Extra Course):{" "}
                </label>
                <input
                  type="text"
                  name="coursenameextracourse"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="coursedurationextracourse">
                  Course Duration(Extra course):{" "}
                </label>
                <input
                  type="text"
                  name="coursedurationextracourse"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="percentageextracourse">
                  Percentage(Extra Course):{" "}
                </label>
                <input
                  type="text"
                  name="percentageextracourse"
                  onChange={this.getInputValues}
                />
              </div>
              <div className="control">
                <label htmlFor="image">Image Link: </label>
                <input
                  type="text"
                  name="image"
                  onChange={this.getInputValues}
                />
              </div>

              <input type="submit" value="submit" />
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

//Exporting the Addresume component
export default AddResume;
