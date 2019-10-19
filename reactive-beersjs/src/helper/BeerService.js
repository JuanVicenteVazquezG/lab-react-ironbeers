import axios from "axios";

class BeerService {
  constructor() {
    this.axios = axios.create({
      baseURL: "https://ih-beer-api.herokuapp.com/beers"
    });
  }

  getAllBeers() {
    return this.axios.get().then(({ data: beers }) => {
    console.log(beers);
    return beers})
  }

  getOneBeer(id) {
    console.log(id)
    return this.axios.get(`/${id}`).then(({ data: beer }) => {
      console.log(beer)
      return beer});
  }

  getRandomBeer() {
      return this.beer.get("/random").then(response => {
      console.log(response)
      return response});
  }

  createBeer(body) {
    return this.axios.post('/new', body).then(({ data: beer }) => beer);
  }
}

const beerService = new BeerService();

export default beerService;
