// Importing react  from 'react'
import React from "react";
// Importing switch, route  from 'react-router-dom'
import { Switch, Route } from "react-router-dom";

//import the components
import Main from "./components/main";
import AddResume from "./components/addResume";

//this function is used to render data  according to the specified path
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />+
    <Route exact path="/addresume" component={AddResume} />
  </Switch>
);

//Exporting the routes component
export default Routes;
