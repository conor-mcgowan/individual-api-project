import "./App.scss";
import React from "react";
import {Switch, Route, Browser Router as Router, Redirect, Navlink, NavLink} from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <Router>
      <>
      <nav className="menu">
        <NavLink to="/login" className="link text-center" activeClassName="active-link">Login</NavLink>
        <NavLink to="/home" className="link text-center" activeClassName="active-link">Homepage</NavLink>
        <NavLink to="/studies" className="link text-center" activeClassName="active-link">Lichess Studies</NavLink>
        <NavLink to="/otbgames" className="link text-center" activeClassName="active=link">OTB Games by FEN</NavLink>
      </nav>
      </>
    </Router>
  );
}

export default App;
