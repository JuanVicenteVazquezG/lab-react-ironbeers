import React, { Component } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import BeerService from "../helper/BeerService";

export default class Allbeers extends Component {
  state = {
    beers: []
  };

  async componentDidMount() {
    try {
      const beers = await BeerService.getAllBeers();
      this.setState({ beers: [...beers] });
    } catch (error) {}
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        {this.state.beers.map((aBeer, index) => {
          return (
            <div key={`${aBeer._id}-${index}`}>
              <Card aBeer={aBeer} />
            </div>
          );
        })}
      </div>
    );
  }
}
