import axios from "axios";

export default axios.create({
  baseURL: "https://api.open-meteo.com/v1",
  params: {
    latitude: 38.881,
    longitude: -77.1043,
  },
});
