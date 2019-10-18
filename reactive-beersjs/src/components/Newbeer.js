import React, { Component } from "react";
import NavBar from "./NavBar";
import beerComunicator from "../helper/BeerComunicator";

export default class Newbeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name !== "") {
      let beer = JSON.parse(JSON.stringify(this.state));
      console.log(beerComunicator.newBeer(beer));
    }
  };

  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    } = this.state;
    return (
      <div>
        <NavBar />
        <h1>New beer</h1>{" "}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="tagline">Tagline:</label>
            <input
              type="text"
              name="tagline"
              value={tagline}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="first_brewed">First rewed:</label>
            <input
              type="text"
              name="first_brewed"
              value={first_brewed}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="brewers_tips">Brewers Tips:</label>
            <input
              type="text"
              name="brewers_tips"
              value={brewers_tips}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="attenuation_level">Attenuation level:</label>
            <input
              type="text"
              name="attenuation_level"
              value={attenuation_level}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="contributed_by">Contributed by:</label>
            <input
              type="text"
              name="contributed_by"
              value={contributed_by}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input type="submit" value="New beer" />
          </div>
        </form>
      </div>
    );
  }
}
