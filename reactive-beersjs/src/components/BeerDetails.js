import React, { Component } from "react";
import NavBar from "./NavBar";
import beerComunicator from "../helper/BeerComunicator";

export default class BeerDetails extends Component {
  state = {
    Beer: {}
  };

  async componentDidMount() {
    const { beerId } = this.props.match.params;
    try {
      const beer = await beerComunicator.getBeer(beerId);
      this.setState({ Beer: { ...beer.data } });
    } catch (error) {}
  }

  render() {
    const { Beer } = this.state;
    return (
      <div>
        <NavBar />
        <h2>{Beer.name}</h2>
        <img src={Beer.image} alt={Beer.name} />
        <p>{Beer.tagline}</p>
        <p>{Beer.first_brewed}</p>
        <p>{Beer.attenuation_level}</p>
        <p>{Beer.description}</p>
        <p>{Beer.description}</p>
        <p>{Beer.contributed_by}</p>
      </div>
    );
  }
}
