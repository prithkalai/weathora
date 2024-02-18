import { AnimatedWeatherTimes } from "animated-weather-icon";
import { weatherMap } from "../../data/DataInterface";
import useDataStore from "../../data/dataStore";
import WeatherIcon from "../AnimatedWeather";

const WeatherDescription = () => {
  const { weathercode, isDay } = useDataStore((s) => ({
    weatherDataLoading: s.weatherDataLoading,
    weathercode: weatherMap[s.weatherData.hourly.weathercode[s.hourlyIndex]],
    isDay: s.weatherData.current_weather.is_day,
  }));

  return (
    <div className=" flex flex-row items-center gap-2">
      <WeatherIcon
        className="w-10 h-10 ml-10 "
        weatherTime={AnimatedWeatherTimes[isDay ? "Day" : "Night"]}
        weatherType={weathercode.icon}
        disableAnimations={false}
      />
      <div className="h-fit font-quicksand">
        <span className=" text-black  text-sm ">{weathercode.desc}</span>
      </div>
    </div>
  );
};

export default WeatherDescription;
