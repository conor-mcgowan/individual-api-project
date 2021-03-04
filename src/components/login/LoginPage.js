import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LoginPage.scss";

const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  function login() {
    if (username.length > 2 && password.length > 7) {
      history.push("/home");
    } else {
      setLoginError("Invalid username or password.");
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
        <div className="error">{loginError}</div>
      </div>
    </>
  );
};

export default LoginPage;
