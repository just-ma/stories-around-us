import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import BrandonPage from "./Pages/BrandonPage/BrandonPage";
import MelissaPage from "./Pages/MelissaPage/MelissaPage";
import ZacharyPage from "./Pages/ZacharyPage/ZacharyPage";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/brandon" component={BrandonPage} />
          <Route exact path="/melissa" component={MelissaPage} />
          <Route exact path="/zachary" component={ZacharyPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;