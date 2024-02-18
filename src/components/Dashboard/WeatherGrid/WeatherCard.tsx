import {
  AnimatedWeatherTimes,
  AnimatedWeatherTypes,
} from "animated-weather-icon";
import { celsiusToFahrenheit, customRound } from "../../../HelperFunctions";
import WeatherIcon from "../../AnimatedWeather";
import { Units } from "../../../data/dataStore";

interface Props {
  date: string;
  minTemp: number;
  maxTemp: number;
  weatherIcon: AnimatedWeatherTypes;
  units: Units;
}

const WeatherCard = ({ date, minTemp, maxTemp, weatherIcon, units }: Props) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg h-40 w-[143px] font-quicksand pt-3 gap-3">
      <div className="text-md">{getDayFromDate(date)}</div>
      <WeatherIcon
        className="w-16 h-16"
        weatherTime={AnimatedWeatherTimes.Day}
        weatherType={weatherIcon}
        disableAnimations={false}
      />
      <div className="flex flex-row gap-3 ">
        <span className=" text-black text-sm ">
          {units == "C" ? customRound(maxTemp) : celsiusToFahrenheit(maxTemp)}°
        </span>
        <span className=" text-black opacity-30 text-sm ">
          {units == "C" ? customRound(minTemp) : celsiusToFahrenheit(minTemp)}°
        </span>
      </div>
    </div>
  );
};

// Function that returns day from given date in iso8601 format
function getDayFromDate(dateISO8601: string): string {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const date = new Date(dateISO8601);
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}

export default WeatherCard;
