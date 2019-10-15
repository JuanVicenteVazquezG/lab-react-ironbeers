import React, { Component } from "react";
import BeerDetails from "./BeerDetails";

export default class Randombeers extends Component {
  state = {
    Beer: {}
  };
  async componentDidMount() {
    try {
      const beer = await axios.get(
        `https://ih-beer-api.herokuapp.com/beers/random`
      );
      this.setState({ Beer: { ...beer.data } });
    } catch (error) {}
  }
  render() {
    return <div> <BeerDetails/> </div>;
  }
}
