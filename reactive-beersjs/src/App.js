import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Allbeers from "./components/Allbeers";
import Newbeer from "./components/Newbeer";
import Randombeers from "./components/Randombeers";
import BeerDetails from "./components/BeerDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/beers" component={Allbeers} />
              <Route exact path="/beers/newbeer" component={Newbeer} />
              <Route exact path="/beers/:id" component={BeerDetails} />
              <Route exact path="/beers/random" component={Randombeers} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
