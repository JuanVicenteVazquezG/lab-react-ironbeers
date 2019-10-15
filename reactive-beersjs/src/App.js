import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Allbeers from "./components/Allbeers";
// import Newbeer from "./components/Newbeer";
// import Randombeers from "./components/Randombeers";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="App-header">
            <h1>Iron React Beers</h1>
            <img src="/images/AllBeers.png" alt="All beers" />
            <Link to="/beers" component>
              {" "}
              <h2>All Beers</h2>{" "}
            </Link>
            <h4>
              Magna deserunt dolore et in Lorem occaecat occaecat. In veniam
              nostrud cillum ad commodo. Culpa sunt proident cupidatat et est
              nulla ipsum ad culpa sint adipisicing. Aliquip consequat ut est
              aute nostrud.
            </h4>
            {/*
            <img src="/images/RandomBeers.png" alt="Random beers" />
            <Link to="/random-beer">
              <h2>Random Beers</h2>
            </Link>
            <h4>
              Ad mollit mollit est consectetur sunt ut esse culpa amet amet
              anim. Qui esse minim non eu ex aliqua velit do esse excepteur aute
              deserunt consequat elit. Exercitation id culpa id proident.
            </h4>

            <img src="/images/NewBeer.png" alt="New beers" />
            <Link to="/new-beer">
              <h2>New Beer</h2>
            </Link>
            <h4>
              Ullamco cupidatat mollit dolor ut qui nisi irure sit fugiat dolore
              aliquip. Do ex anim sit esse sint. In est eiusmod eu do ullamco
              exercitation.
            </h4>
*/}
            <Switch>
              <Route path="/" component={App} />
             {/* <Route path="/beers" component={Allbeers} />
               <Route path="/random-beer" component={Randombeers} />
              <Route path="/new-beer" component={Newbeer} /> */}
            </Switch> 
          </header>
        </div>
      </div>
    );
  }
}
