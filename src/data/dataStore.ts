import { create } from "zustand";
import weatherDataInterface, { GeoCodeData } from "./DataInterface";

export type Units = "C" | "F";
export type Duration = "Today" | "Week";

interface DataStore {
  weatherDataLoading: boolean;
  weatherData: weatherDataInterface;
  hourlyIndex: number;
  dailyIndex: number;
  units: Units;
  duration: Duration;
  aqi: number;
  address: GeoCodeData;
  setAddress: (data: GeoCodeData) => void;
  setAqi: (val: number) => void;
  setDuration: (val: Duration) => void;
  setUnits: (val: Units) => void;
  setHourlyIndex: (index: number) => void;
  setDailyIndex: (index: number) => void;
  setWeatherDataLoading: (val: boolean) => void;
  setWeatherData: (data: weatherDataInterface) => void;
}

const useDataStore = create<DataStore>((set) => ({
  weatherDataLoading: true,
  weatherData: {
    timezone: "",
    hourly: {
      time: [],
      temperature_2m: [],
      temperature_80m: [],
      relativehumidity_2m: [],
      precipitation_probability: [],
      weathercode: [],
      visibility: [],
      windspeed_10m: [],
      winddirection_10m: [],
      uv_index: [],
      cloudcover: [],
      surface_pressure: [],
      apparent_temperature: [],
    },
    daily: {
      time: [],
      weathercode: [],
      temperature_2m_max: [],
      temperature_2m_min: [],
      sunrise: [],
      sunset: [],
    },
    current_weather: {
      is_day: false,
    },
  },
  address: {
    city: "",
    state: "",
    country_code: "",
    country: "",
  },
  setAddress: (data) => set({ address: data }),
  hourlyIndex: 0,
  dailyIndex: 0,
  units: "C",
  duration: "Week",
  aqi: 0,
  setAqi: (val) => set({ aqi: val }),
  setDuration: (val) => set({ duration: val }),
  setUnits: (val) => set({ units: val }),
  setDailyIndex: (index) => set({ dailyIndex: index }),
  setWeatherData: (data) => set({ weatherData: data }),
  setHourlyIndex: (index) => set({ hourlyIndex: index }),
  setWeatherDataLoading: (val) => set({ weatherDataLoading: val }),
}));

export default useDataStore;
