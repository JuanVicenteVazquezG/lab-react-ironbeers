import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Allbeers from "./components/Allbeers";
import Newbeer from "./components/Newbeer";
import Randombeers from "./components/Randombeers";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/beers" component={Allbeers} />
              <Route path="/random-beer" component={Randombeers} />
              <Route path="/new-beer" component={Newbeer} />
              
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
