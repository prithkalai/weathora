import { ShimmerList } from "../../HelperFunctions";
import useDataStore from "../../data/dataStore";
import HourlyWeather from "./HourlyWeather";
import NavBar from "./NavBar";
import InfoGrid from "./TodayInfoGrid";
import WeatherGrid from "./WeatherGrid";

const DashBoard = () => {
  const { weatherDataLoading, duration } = useDataStore((s) => ({
    weatherDataLoading: s.weatherDataLoading,
    duration: s.duration,
  }));

  return (
    <div className="flex flex-col w-screen max-h-[1080px] bg-neutral-100 pt-8 pl-12 pr-10 pb-10">
      <NavBar />
      {weatherDataLoading ? (
        <div className="flex gap-3 mx-auto mb-12">
          <ShimmerList width={143} height={160} count={7} />
        </div>
      ) : (
        <>{duration == "Week" ? <WeatherGrid /> : <HourlyWeather />}</>
      )}

      <div className="h-fit font-quicksand mb-9">
        <span className=" text-black text-2xl ">Today's Highlights</span>
      </div>
      <InfoGrid />
    </div>
  );
};

export default DashBoard;
