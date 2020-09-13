import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Movie from "./Movie.js";
import Login from "./Login";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/movie">
        <Movie />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
