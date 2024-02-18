import {
  AnimatedWeatherTimes,
  AnimatedWeatherTypes,
} from "animated-weather-icon";
import { celsiusToFahrenheit, customRound } from "../../../HelperFunctions";
import { Units } from "../../../data/dataStore";
import WeatherIcon from "../../AnimatedWeather";

interface Props {
  time: string;
  temp: number;
  weatherIcon: AnimatedWeatherTypes;
  units: Units;
}

const HourlyWeatherCard = ({ time, temp, weatherIcon, units }: Props) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg h-40 w-[143px] font-quicksand pt-3 gap-3 pl-3 pr-3">
      <div className="text-sm">{time}</div>
      <WeatherIcon
        className="w-12 h-14 mb-3"
        weatherTime={AnimatedWeatherTimes.Day}
        weatherType={weatherIcon}
        disableAnimations={false}
      />
      <span className=" text-black text-sm ">
        {units == "C" ? customRound(temp) : celsiusToFahrenheit(temp)}°
      </span>
    </div>
  );
};

export default HourlyWeatherCard;
