import React from "react";
import Logo from "./logo.png";

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <img id="logo" src={Logo} width="200px" />
        <nav>
          <ul>
            <li>
              <a href="/">Home </a>{" "}
            </li>
            <li>
              <a href="/about">About </a>{" "}
            </li>
            <li>
              <a href="/movie">Movie List Editor </a>{" "}
            </li>
            <li>
              <a href="/login">Login </a>{" "}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
