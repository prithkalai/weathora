import {
  AnimatedWeatherTimes,
  AnimatedWeatherTypes,
} from "animated-weather-icon";
import WeatherIcon from "../AnimatedWeather";

interface Props {
  rainChance: number;
}

const RainChance = ({ rainChance }: Props) => {
  return (
    <div className="mb-8 flex flex-row items-center gap-2">
      <WeatherIcon
        className="w-10 h-10 ml-10"
        weatherTime={AnimatedWeatherTimes.Day}
        weatherType={AnimatedWeatherTypes.HeavyRain}
        disableAnimations={false}
      />
      <div className="h-fit font-quicksand">
        <span className=" text-black text-sm ">Rain </span>
        <span className=" text-black text-sm ">- {rainChance}%</span>
      </div>
    </div>
  );
};

export default RainChance;
