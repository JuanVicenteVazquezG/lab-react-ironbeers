import React, { Component } from "react";
import axios from "axios";

class BeerDetails extends Component {
  state = {
    Beer: {}
  };
  async componentDidMount() {
    const { beerId } = this.props.match.params;
    try {
      const beer = await axios.get(
        `https://ih-beer-api.herokuapp.com/beers/${beerId}`
      );
      this.setState({ beers: [...beer.data] });
      console.log(this.state.Beer);
    } catch (error) {}
  }

  render() {
    return <div> textInComponent </div>;
  }
}

export default BeerDetails;
