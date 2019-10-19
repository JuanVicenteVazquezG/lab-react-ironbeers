import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import {GiBeerBottle} from "react-icons/gi";


export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Iron React Beers</h1>

        <div className="home-card">

          <img src="/images/AllBeers.png" alt="All beers" />
          <Link to="/beers" title="List of all beers.">
            {" "}
            <h2><FaBeer/><FaBeer/><FaBeer/>... </h2>{" "}
          </Link>
          <p>
            Magna deserunt dolore et in Lorem occaecat occaecat. In veniam
            nostrud cillum ad commodo. Culpa sunt proident cupidatat et est
            nulla ipsum ad culpa sint adipisicing. Aliquip consequat ut est aute
            nostrud.
          </p>
        </div>

        <div  className="home-card">
          <img src="/images/RandomBeers.png" alt="Random beers" />
          <Link to="/beers/random" title="A random beer information">
            <h2>Random Beers</h2>
          </Link>
          <p>
            Ad mollit mollit est consectetur sunt ut esse culpa amet amet anim.
            Qui esse minim non eu ex aliqua velit do esse excepteur aute
            deserunt consequat elit. Exercitation id culpa id proident.
          </p>
        </div>

        <div  className="home-card">
          <img src="/images/NewBeer.png" alt="New beers" />
          <Link to="/new-beer" title="Add a new beer">
            <h2><GiBeerBottle/></h2>
          </Link>
          <p>
            Ullamco cupidatat mollit dolor ut qui nisi irure sit fugiat dolore
            aliquip. Do ex anim sit esse sint. In est eiusmod eu do ullamco
            exercitation.
          </p>
        </div>
      </div>
    );
  }
}
