import React, { Component } from "react";
import axios from "axios";

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
              <img
                src={aBeer.image_url}
                alt={aBeer.name}
                style={{ width: "50px" }}
              />
              <h1>{aBeer.name}</h1>
            </div>
          );
        })}
        {console.log(this.state.beers)}
      </div>
    );
  }
}