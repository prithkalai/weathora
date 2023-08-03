import axios from "axios";

export default axios.create({
  baseURL: "https://api.open-meteo.com/v1",
});
