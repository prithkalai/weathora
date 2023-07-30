import WeatherIcon from "../AnimatedWeather";
import SearchBar from "./SearchBar";
import {
  AnimatedWeatherTimes,
  AnimatedWeatherTypes,
} from "animated-weather-icon";

const SideBar = () => {
  return (
    <div className="flex flex-col items-start  border-2 border-solid w-[350px] h-screen ">
      <SearchBar />
      <div className="mb-4">
        <WeatherIcon
          className="w-80 h-72 mr-10"
          weatherTime={AnimatedWeatherTimes.Day}
          weatherType={AnimatedWeatherTypes.DrizzleShowers}
          disableAnimations={false}
        />
      </div>
      <div className="ml-12 h-fit text-black font-quicksand text-[100px] ">
        12°
      </div>
      <div className="ml-12 h-fit font-quicksand mb-10">
        <span className=" text-black text-2xl ">Monday,</span>
        <span className="text-neutral-500 text-2xl"> 16:00</span>
      </div>
      <div className="border-b-2 ml-8 border-neutral-200 w-3/4"></div>

      <div className="mb-4">
        <WeatherIcon
          className="w-20 h-20 ml-10"
          weatherTime={AnimatedWeatherTimes.Day}
          weatherType={AnimatedWeatherTypes.Cloudy}
          disableAnimations={false}
        />
      </div>
    </div>
  );
};

export default SideBar;
