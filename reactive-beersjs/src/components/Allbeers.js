import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import NavBar from "./NavBar";


export default class Allbeers extends Component {
  state = {
    beers: []
  };

  async componentDidMount() {
    try {
      const beers = await axios.get("https://ih-beer-api.herokuapp.com/beers/");
      this.setState({ beers: [...beers.data] });
      console.log(beers.data)
    } catch (error) {}
  }

  render() {
    return (
      <div className="container">
        <NavBar/>
        {this.state.beers.map((aBeer, index) => {
          return (
            <div key={`${aBeer._id}`}>
              <Card aBeer={aBeer}/>
            </div>
          );
        })}
      </div>
    );
  }
}
