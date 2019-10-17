import React, { Component } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import beerComunicator  from "../helper/BeerComunicator";

export default class Allbeers extends Component {
  state = {
    beers: []
  };

  async componentDidMount() {
    try {
      const beers = await beerComunicator.getAllBeers();
      this.setState({ beers: [...beers.data] });
    } catch (error) {}
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        {this.state.beers.map((aBeer, index) => {
          return (
            <div key={`${aBeer._id}`}>
              <Card aBeer={aBeer} />
            </div>
          );
        })}
      </div>
    );
  }
}
