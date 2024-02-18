import { SyncLoader } from "react-spinners";
import "../../App.css";
import { SideBarProps } from "../../data/DataInterface";
import useDataStore from "../../data/dataStore";
import { CurrWeatherIcon } from "./CurrWeatherIcon";
import DateAndTime from "./DateAndTime";
import LocationBanner from "./LocationBanner";
import RainChance from "./RainChance";
import SearchBar from "./SearchBar";
import Temperature from "./Temperature";
import WeatherDescription from "./WeatherDescription";

const SideBar = ({ handleOnClick, handleOnSubmit }: SideBarProps) => {
  const weatherDataLoading = useDataStore((s) => s.weatherDataLoading);

  return (
    <div
      className="flex flex-col items-start border-2 border-solid w-[350px] h-screen pt-10 pb-12
    bg-white"
    >
      <SearchBar
        handleOnClick={handleOnClick}
        handleOnSubmit={handleOnSubmit}
      />
      <CurrWeatherIcon />
      <Temperature />

      <DateAndTime />

      <div className="border-b-2 ml-8 mb-4 border-neutral-200 w-3/4"></div>

      {weatherDataLoading ? (
        <div className="flex flex-row justify-center items-center w-80 h-32">
          <SyncLoader color="#181818" />
        </div>
      ) : (
        <>
          <WeatherDescription />
          <RainChance />
        </>
      )}

      <LocationBanner />
    </div>
  );
};

export default SideBar;
