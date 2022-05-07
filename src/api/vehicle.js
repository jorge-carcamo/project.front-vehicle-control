import axios from "axios";

export default axios.create({
  baseURL: `https://cryptic-lake-89500.herokuapp.com/vehicles/`,
});
