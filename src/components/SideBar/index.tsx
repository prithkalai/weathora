import { SyncLoader } from "react-spinners";
import "../../App.css";
import { DegreeProps, SideBarProps } from "../../DataInterface";
import { CurrWeatherIcon } from "./CurrWeatherIcon";
import DateAndTime from "./DateAndTime";
import LocationBanner from "./LocationBanner";
import RainChance from "./RainChance";
import SearchBar from "./SearchBar";
import Temperature from "./Temperature";
import WeatherDescription from "./WeatherDescription";

const SideBar = ({
  rainChance,
  currentTemperature,
  weathercode,
  timezone,
  address,
  apparentTemperature,
  isDay,
  weatherDataLoading,
  handleOnClick,
  handleOnSubmit,
  degreeScale,
}: SideBarProps & DegreeProps) => {
  return (
    <div
      className="flex flex-col items-start border-2 border-solid w-[350px] h-screen pt-10 pb-12
    bg-white"
    >
      <SearchBar
        handleOnClick={handleOnClick}
        handleOnSubmit={handleOnSubmit}
      />
      <CurrWeatherIcon
        weatherDataLoading={weatherDataLoading}
        isDay={isDay}
        weathercode={weathercode}
      />
      <Temperature
        weatherDataLoading={weatherDataLoading}
        currentTemperature={currentTemperature}
        apparentTemperature={apparentTemperature}
        degreeScale={degreeScale}
      />

      <DateAndTime
        timezone={timezone}
        weatherDataLoading={weatherDataLoading}
      />

      <div className="border-b-2 ml-8 mb-4 border-neutral-200 w-3/4"></div>

      {weatherDataLoading ? (
        <div className="flex flex-row justify-center items-center w-80 h-32">
          <SyncLoader color="#181818" />
        </div>
      ) : (
        <>
          <WeatherDescription isDay={isDay} weathercode={weathercode} />
          <RainChance rainChance={rainChance} />
        </>
      )}

      <LocationBanner address={address} />
    </div>
  );
};

export default SideBar;
