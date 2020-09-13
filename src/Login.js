import React from "react";
import Navbar from "./Navbar.js";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ marginTop: "5rem" }}>
          <form action="">
            <div></div>
            <label>Username:</label>
            <input type="text" name="rating" />
            <br />
            <label>Password:</label>
            <input type="text" name="rating" />
            <br />
            <button>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
