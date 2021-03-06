import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
  NavLink,
} from "react-router-dom";
import SignupPage from "./components/signup/SignupPage";
import LoginPage from "./components/login/LoginPage";
import HomePage from "./components/homepage/Homepage";
import Studies from "./components/studies/Studies";
import OTBGames from "./components/otb-games/OTBGames";
import { Provider } from "react-redux";
import store from "./redux/Store";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <nav className="menu">
            <NavLink
              to="/signup"
              className="link text-center"
              activeClassName="active-link"
            >
              Signup
            </NavLink>
            <NavLink
              to="/login"
              className="link text-center"
              activeClassName="active-link"
            >
              Login
            </NavLink>
            <NavLink
              to="/home"
              className="link text-center"
              activeClassName="active-link"
            >
              Homepage
            </NavLink>
            <NavLink
              to="/studies"
              className="link text-center"
              activeClassName="active-link"
            >
              Lichess Studies
            </NavLink>
            <NavLink
              to="/otbgames"
              className="link text-center"
              activeClassName="active-link"
            >
              OTB Games by FEN
            </NavLink>
          </nav>
          <main className="main-container">
            <Switch>
              <Route path="/signup" component={SignupPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/home" component={HomePage} />
              <Route path="/studies" component={Studies} />
              <Route path="/otbgames" component={OTBGames} />
              <Route path="*">
                <Redirect to="/home" />
              </Route>
            </Switch>
          </main>
        </>
      </Router>
    </Provider>
  );
}

export default App;
