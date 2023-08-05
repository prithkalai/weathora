import { SideBarProps } from "../../DataInterface";
import { getCurrentDay } from "../../HelperFunctions";
import WeatherIcon from "../AnimatedWeather";
import SearchBar from "./SearchBar";
import {
  AnimatedWeatherTimes,
  AnimatedWeatherTypes,
} from "animated-weather-icon";
import "../../App.css";
import { SyncLoader } from "react-spinners";

const SideBar = ({
  rainChance,
  currentTemperature,
  weathercode,
  time,
  address,
  apparentTemperature,
  isDay,
  weatherDataLoading,
  handleOnClick,
}: SideBarProps) => {
  return (
    <div className="flex flex-col items-start  border-2 border-solid w-[350px] h-screen pt-10">
      <SearchBar handleOnClick={handleOnClick} />
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
      <div className="ml-12 text-black font-quicksand text-8xl ">
        {currentTemperature}°
      </div>
      <div className="ml-12 text-neutral-500 text-lg font-quicksand mb-6">
        Feels like {apparentTemperature}°
      </div>
      <div className="ml-12 h-fit font-quicksand mb-8">
        <span className=" text-black text-2xl ">{getCurrentDay()},</span>
        <span className="text-neutral-500 text-2xl">
          {" "}
          {time.split(":")[0]}
          <span className="blink">:</span>
          {time.split(":")[1]}
        </span>
      </div>
      <div className="border-b-2 ml-8 mb-4 border-neutral-200 w-3/4"></div>

      {weatherDataLoading ? (
        <div className="flex flex-row justify-center items-center w-80 h-32">
          <SyncLoader color="#181818" />
        </div>
      ) : (
        <>
          <div className=" flex flex-row items-center gap-2">
            <WeatherIcon
              className="w-10 h-10 ml-10"
              weatherTime={AnimatedWeatherTimes[isDay ? "Day" : "Night"]}
              weatherType={weathercode.icon}
              disableAnimations={false}
            />
            <div className="h-fit font-quicksand">
              <span className=" text-black text-sm ">{weathercode.desc}</span>
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
              <span className=" text-black text-sm ">Rain </span>
              <span className=" text-black text-sm ">- {rainChance}%</span>
            </div>
          </div>
        </>
      )}

      <div className="relative w-3/4 h-24 ml-8 rounded-2xl">
        <img
          src="location.jpg"
          className=" w-full h-full object-cover object-center overflow-hidden rounded-2xl"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-center text-3xl font-bold bg-opacity-50 p-4 rounded font-rajdhani">
            {address.city}, {address.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
