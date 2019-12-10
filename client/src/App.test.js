// Importing react  from 'react'
import React from "react";
// Importing reactdom  from 'reactdom'
import ReactDOM from "react-dom";
// Importing app component from app.js
import App from "./App";

//rendering App component
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
