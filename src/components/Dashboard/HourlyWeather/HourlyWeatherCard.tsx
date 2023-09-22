import {
  AnimatedWeatherTimes,
  AnimatedWeatherTypes,
} from "animated-weather-icon";
import WeatherIcon from "../../AnimatedWeather";
import { celsiusToFahrenheit, customRound } from "../../../HelperFunctions";
import { DegreeProps } from "../../../DataInterface";

interface Props {
  time: string;
  temp: number;
  weatherIcon: AnimatedWeatherTypes;
}

const HourlyWeatherCard = ({
  time,
  temp,
  weatherIcon,
  degreeScale,
}: DegreeProps & Props) => {
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
        {degreeScale == 1 ? customRound(temp) : celsiusToFahrenheit(temp)}°
      </span>
    </div>
  );
};

export default HourlyWeatherCard;
