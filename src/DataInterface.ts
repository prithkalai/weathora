import { AnimatedWeatherTypes } from "animated-weather-icon";

export default interface weatherDataInterface {
  hourly: {
    time: string[];
    temperature_2m: number[];
    temperature_80m: number[];
    relativehumidity_2m: number[];
    precipitation_probability: number[];
    weathercode: number[];
    visibility: number[];
    windspeed_10m: number[];
    winddirection_10m: number[];
    uv_index: number[];
    cloudcover: number[];
    surface_pressure: number[];
    apparent_temperature: number[];
  };
  daily: {
    time: string[];
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
  };
  current_weather: {
    is_day: boolean;
  };
}

export interface GeoCodeData {
  city: string;
  state: string;
  country_code: string;
  country: string;
}

export interface WeatherCardProps {
  dates: string[];
  minTemps: number[];
  maxTemps: number[];
  weatherCodes: number[];
}

export interface SunriseSunsetProps {
  sunriseTime: string;
  sunsetTime: string;
}

export interface UVProps {
  value: number;
}

export interface WindStatusProps {
  speed: number;
  angle: number;
}

export interface HumidityProps {
  percentage: number;
}

export interface VisibilityProps {
  distance: number;
}

export interface AQIProps {
  aqi: number;
}

export interface CloudCoverProps {
  cloudPercentage: number;
}

export interface SurfacePressureProps {
  surfacePressure: number;
}

export interface LoadingProps {
  weatherDataLoading: boolean;
}

export type TodayHighlightProps = SunriseSunsetProps &
  UVProps &
  WindStatusProps &
  HumidityProps &
  VisibilityProps &
  AQIProps &
  LoadingProps &
  CloudCoverProps &
  SurfacePressureProps;

export type weatherCodeData = {
  desc: string;
  icon: AnimatedWeatherTypes;
};

export interface SideBarProps {
  rainChance: number;
  currentTemperature: number;
  weathercode: weatherCodeData;
  apparentTemperature: number;
  time: string;
  address: GeoCodeData;
  isDay: boolean;
}

// TODO: Find a way to show freezing rain/drizzle

export const weatherMap: { [key: number]: weatherCodeData } = {
  0: { desc: "Clear sky", icon: AnimatedWeatherTypes.Clear },
  1: { desc: "Mainly clear", icon: AnimatedWeatherTypes.BrokenClouds },
  2: { desc: "Partly cloudy", icon: AnimatedWeatherTypes.Cloudy },
  3: { desc: "Overcast", icon: AnimatedWeatherTypes.Overcast },
  45: { desc: "Fog", icon: AnimatedWeatherTypes.Fog },
  48: { desc: "Rime Fog", icon: AnimatedWeatherTypes.Fog },
  51: { desc: "Light Drizzle", icon: AnimatedWeatherTypes.LightDrizzleShowers },
  53: { desc: "Moderate Drizzle", icon: AnimatedWeatherTypes.DrizzleShowers },
  55: { desc: "Dense Drizzle", icon: AnimatedWeatherTypes.HeavyDrizzleShowers },
  56: {
    desc: "Light Freezing Drizzle",
    icon: AnimatedWeatherTypes.LightDrizzle,
  },
  57: {
    desc: "Dense Freezing Drizzle",
    icon: AnimatedWeatherTypes.HeavyDrizzle,
  },
  61: { desc: "Slight Rain", icon: AnimatedWeatherTypes.LightRain },
  63: { desc: "Moderate Rain", icon: AnimatedWeatherTypes.Rain },
  65: { desc: "Heavy Rain", icon: AnimatedWeatherTypes.HeavyRain },
  66: { desc: "Light Freezing Rain", icon: AnimatedWeatherTypes.LightRain },
  67: { desc: "Heavy Freezing Rain", icon: AnimatedWeatherTypes.HeavyRain },
  71: { desc: "Slight Snow Fall", icon: AnimatedWeatherTypes.LightSnow },
  73: { desc: "Moderate Snow Fall", icon: AnimatedWeatherTypes.Snow },
  75: { desc: "Heavy Snow Fall", icon: AnimatedWeatherTypes.HeavySnow },
  77: { desc: "Snow Grains", icon: AnimatedWeatherTypes.SleetShowers },
  80: {
    desc: "Slight Rain Showers",
    icon: AnimatedWeatherTypes.LightRainShowers,
  },
  81: { desc: "Moderate Rain Showers", icon: AnimatedWeatherTypes.RainShowers },
  82: {
    desc: "Violent Rain Showers",
    icon: AnimatedWeatherTypes.HeavyRainShowers,
  },
  85: {
    desc: "Slight Snow Showers",
    icon: AnimatedWeatherTypes.LightSnowShowers,
  },
  86: {
    desc: "Heavy Snow Showers",
    icon: AnimatedWeatherTypes.HeavySnowShowers,
  },
  95: {
    desc: "Slight/Moderate Thunderstorm",
    icon: AnimatedWeatherTypes.ThunderStormRain,
  },
  96: {
    desc: "Thunderstorm with slight hail",
    icon: AnimatedWeatherTypes.Hail,
  },
  99: { desc: "Thunderstorm with heavy hail", icon: AnimatedWeatherTypes.Hail },
};
