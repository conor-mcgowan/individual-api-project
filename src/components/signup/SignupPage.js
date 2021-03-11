import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUser } from "../../redux/actions";
import axios from "axios";
import "./SignupPage.scss";

const SignupPage = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState("");
  async function signup() {
    setSignupError("");
    if (username.length < 5 || username.length > 20) {
      setSignupError(
        "Username must be between five and 20 characters inclusive."
      );
      return;
    }
    if (password.length < 7 || password.length > 20) {
      setSignupError(
        "Password must be between seven and 20 characters inclusive."
      );
      return;
    }

    try {
      // fetch from the appropriate endpoint
      // post username and password in the body
      // const response = await fetch("/users/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ username: username, password: password }),
      // });
      // // check response
      // const json = await response.json();
      // //handle response
      const json = await axios.post("/users/signup", {
        username: username,
        password: password,
      });
      if (json.data.error) {
        setSignupError(json.data.error);
      } else {
        props.setUser(json.data.data.username);
        history.push("/search");
      }
    } catch (err) {
      setSignupError("Something went wrong, please try again later!");
    }
  }

  return (
    <>
      <h1 className="text-center">Signup</h1>
      <div className="form">
        <div className="form-container">
          <label className="label text-center" htmlFor="username">
            Username
          </label>
          <input
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
          />
        </div>
        <div className="form-container">
          <label className="label text-center" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
          />
        </div>
        <button className="submit" onClick={() => signup()}>
          Sign Up
        </button>
        {signupError.length > 0 && <div className="error">{signupError}</div>}
      </div>
    </>
  );
};

const mapDispatchToProps = {
  setUser,
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
