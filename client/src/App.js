// Importing react and destructuring component from 'react'
import React, { Component } from "react";
//Importing link and withrouter from react-router dom
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

//import the routes
import Routes from "./routes";

// Creating the App component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "/"
    };
  }
  // rendering the addresume and viewresume
  render() {
    const showAddResume = this.state.location;
    let addResume;
    if (showAddResume !== "/addresume") {
      addResume = (
        <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/addresume">Add Resume</Link>
          </a>
        </li>
      );
    }

    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link">
                  <Link to="/"> View Resume </Link>
                </a>
              </li>
              {addResume}
            </ul>
          </div>
        </nav>

        <Routes />
      </div>
    );
  }
}

// exportng the App component
export default withRouter(App);
