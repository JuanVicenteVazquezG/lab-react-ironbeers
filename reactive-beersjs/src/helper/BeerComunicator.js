import axios from "axios";

class BeerComunicator {
  constructor() {
    this.beerCom = axios.create({
      baseUrl: "https://ih-beer-api.herokuapp.com/beers/"
    });
  }

  getAllBeers() {
    return this.beerCom.get().then(response => {return response;
    });
  }

  getBeer(beerId) {
    return this.beer.get(`/${beerId}`).then(response => {return response});
  }

  getRandomBeer() {
    return this.beer.get("/random").then(response => {return response});
  }

  newBeer(beer) {
   return this.beerCom.post("/new", beer)
    .then(response => {return response.data});
  }
}

const beerComunicator = new BeerComunicator();

export default beerComunicator;
