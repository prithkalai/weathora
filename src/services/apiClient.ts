import axios from "axios";

const forecastAPI = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
});

const airQualityAPI = axios.create({
  baseURL: "https://air-quality-api.open-meteo.com/v1",
});

const geoCodeAPI = axios.create({
  baseURL: "https://geocode.maps.co",
});

const API_KEY = "65d160713f885247351708uzs351dbe";

class APIClient {
  getLocation = (latitude: number, longitude: number) => {
    return geoCodeAPI.get("/reverse", {
      params: {
        lat: latitude,
        lon: longitude,
        api_key: API_KEY,
      },
    });
  };

  getCoordinates = (address: string) => {
    return geoCodeAPI.get("/search", {
      params: {
        q: address,
        api_key: API_KEY,
      },
    });
  };

  getWeatherForecast = (latitude: number, longitude: number) => {
    return forecastAPI.get("/forecast", {
      params: {
        latitude: latitude,
        longitude: longitude,
        current_weather: true,
        hourly:
          "temperature_2m,temperature_80m,apparent_temperature,surface_pressure,cloudcover,relativehumidity_2m,precipitation_probability,weathercode,visibility,windspeed_10m,winddirection_10m,uv_index",
        daily:
          "weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset",
        timezone: "auto",
      },
    });
  };

  getAirQuality = (latitude: number, longitude: number) => {
    return airQualityAPI.get("/air-quality", {
      params: {
        latitude: latitude,
        longitude: longitude,
        hourly: "us_aqi",
        timezone: "auto",
      },
    });
  };
}

export default new APIClient();
