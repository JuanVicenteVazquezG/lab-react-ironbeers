import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Allbeers extends Component {
  state = {
    beers: []
  };

  render() {
    const { aBeer } = this.props;
    return (
      <div>
        <Link to={`/beers/${aBeer._id}`}>
        <h1>{aBeer.name}</h1>
        <img src={aBeer.image_url} alt={aBeer.name} style={{ width: "50px" }} />
        <h3>{aBeer.tagline}</h3>
        <p>{aBeer.contributed_by}</p>
        </Link>
      </div>
    );
  }
}
