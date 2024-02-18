import { AnimatedWeatherTimes } from "animated-weather-icon";
import { SyncLoader } from "react-spinners";
import { weatherMap } from "../../data/DataInterface";
import useDataStore from "../../data/dataStore";
import WeatherIcon from "../AnimatedWeather";

export const CurrWeatherIcon = () => {
  const { weatherDataLoading, weathercode, isDay } = useDataStore((s) => ({
    weatherDataLoading: s.weatherDataLoading,
    weathercode: weatherMap[s.weatherData.hourly.weathercode[s.hourlyIndex]],
    isDay: s.weatherData.current_weather.is_day,
  }));

  return (
    <div className="mb-4">
      {weatherDataLoading ? (
        <div className="flex justify-center items-center w-80 h-72 mr-10">
          <SyncLoader color="#181818" />
        </div>
      ) : (
        <WeatherIcon
          className="w-80 h-72 mr-10"
          weatherTime={AnimatedWeatherTimes[isDay ? "Day" : "Night"]}
          weatherType={weathercode.icon}
          disableAnimations={false}
        />
      )}
    </div>
  );
};
