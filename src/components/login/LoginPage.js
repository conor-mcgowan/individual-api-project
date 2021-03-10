import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUser } from "../../redux/actions";
import "./LoginPage.scss";

const LoginPage = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  async function login() {
    setLoginError("");
    if (
      username.length < 4 ||
      username.length > 20 ||
      password.length < 7 ||
      password.length > 20
    ) {
      setLoginError("Invalid username or password.");
      return;
    }
    try {
      // fetch from the appropriate endpoint
      // post username and password in the body
      const response = await fetch("/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      // check response
      const json = await response.json();
      //handle response
      if (json.error) {
        setLoginError(json.error);
      } else {
        props.setUser(json.data.username);
        history.push("/home");
      }
    } catch (err) {
      setLoginError("Something went wrong, please try again.");
    }
  }
  return (
    <>
      <h1 className="text-center">Login</h1>
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
        <button className="submit" onClick={() => login()}>
          Log In
        </button>
        {loginError.length > 0 && <div className="error">{loginError}</div>}
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
