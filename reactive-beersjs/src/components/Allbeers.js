import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
export default class Allbeers extends Component {
  state = {
    beers: []
  };

  async componentDidMount() {
    try {
      const beers = await axios.get("https://ih-beer-api.herokuapp.com/beers/");
      this.setState({ beers: [...beers.data] });
    } catch (error) {}
  }

  render() {
    return (
      <div>
        {" "}
        {this.state.beers.map((aBeer, index) => {
          return (
            <div key={`${aBeer._id}`}>
              <Card aBeer={aBeer}/>
            </div>
          );
        })}
        {console.log(this.state.beers)}
      </div>
    );
  }
}
