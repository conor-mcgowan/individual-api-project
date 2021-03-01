import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
  NavLink,
} from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import HomePage from "./components/homepage/HomePage";
import Studies from "./components/studies/Studies";
import FavoritePuzzles from "./components/favorite-puzzles/FavoritePuzzles";
import OTBGames from "./components/otb-games/OTBGames";
import "./App.scss";
import FavoritesProvider from "./contexts/FavoritesContext";

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <>
        <nav className="menu">
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
            to="/favpuzzles"
            className="link text-center"
            activeClassName="active-link"
          >
            Favorite Puzzles
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
            <Route path="/login" component={LoginPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/studies" component={Studies} />
            <Route path="/favpuzzles" component={FavoritePuzzles} />
            <Route path="/otbgames" component={OTBGames} />
            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </main>
      </>
    </Router>
    // </Provider>
  );
}

export default App;
