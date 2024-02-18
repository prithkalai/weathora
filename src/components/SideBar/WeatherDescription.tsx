import { AnimatedWeatherTimes } from "animated-weather-icon";
import WeatherIcon from "../AnimatedWeather";
import { weatherCodeData } from "../../DataInterface";

interface Props {
  isDay: boolean;
  weathercode: weatherCodeData;
}

const WeatherDescription = ({ isDay, weathercode }: Props) => {
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
