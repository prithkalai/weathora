import WeatherIcon from "../AnimatedWeather";
import SearchBar from "./SearchBar";
import {
  AnimatedWeatherTimes,
  AnimatedWeatherTypes,
} from "animated-weather-icon";

const SideBar = () => {
  return (
    <div className="flex flex-col items-start  border-2 border-solid w-[350px] h-screen pt-10">
      <SearchBar />
      <div className="">
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
      <div className="ml-12 h-fit font-quicksand mb-8">
        <span className=" text-black text-2xl ">Monday,</span>
        <span className="text-neutral-500 text-2xl"> 16:00</span>
      </div>
      <div className="border-b-2 ml-8 mb-4 border-neutral-200 w-3/4"></div>

      <div className=" flex flex-row items-center gap-2">
        <WeatherIcon
          className="w-10 h-10 ml-10"
          weatherTime={AnimatedWeatherTimes.Day}
          weatherType={AnimatedWeatherTypes.Clear}
          disableAnimations={false}
        />
        <div className="h-fit font-quicksand">
          <span className=" text-black text-sm ">Overcast</span>
        </div>
      </div>

      <div className="mb-8 flex flex-row items-center gap-2">
        <WeatherIcon
          className="w-10 h-10 ml-10"
          weatherTime={AnimatedWeatherTimes.Day}
          weatherType={AnimatedWeatherTypes.HeavyRain}
          disableAnimations={false}
        />
        <div className="h-fit font-quicksand">
          <span className=" text-black text-sm ">Rain - 30%</span>
        </div>
      </div>

      <div className="relative w-3/4 h-24 ml-8 rounded-2xl">
        <img
          src="location.jpg"
          className=" w-full h-full object-cover object-center overflow-hidden rounded-2xl"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-center text-2xl font-bold bg-opacity-50 p-4 rounded">
            New York City, USA
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
