import React from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./About.js";
import Contact from "./Contact2.js";
import Home from "./Home.js";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
