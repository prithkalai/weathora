export default interface weatherDataInterface {
  hourly: {
    time: string[];
    temperature_2m: number[];
    relativehumidity_2m: number[];
    precipitation_probability: number[];
    weathercode: number[];
    visibility: number[];
    windspeed_10m: number[];
    winddirection_10m: number[];
    uv_index: number[];
  };
  daily: {
    time: string[];
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
  };
}

export interface WeatherCardProps {
  dates: string[];
  minTemps: number[];
  maxTemps: number[];
}

export interface SunriseSunsetProps {
  sunriseTime: string;
  sunsetTime: string;
}
