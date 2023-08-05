import { TodayHighlightProps, WeatherCardProps } from "../../DataInterface";
import NavBar from "./NavBar";
import InfoGrid from "./TodayInfoGrid";
import WeatherGrid from "./WeatherGrid";

const DashBoard: React.FC<TodayHighlightProps & WeatherCardProps> = ({
  sunriseTime,
  sunsetTime,
  dates,
  minTemps,
  maxTemps,
  weatherCodes,
  value,
  speed,
  angle,
  percentage,
  distance,
  aqi,
  weatherDataLoading,
  cloudPercentage,
  surfacePressure,
}) => {
  return (
    <div className="flex flex-col w-full h-screen bg-neutral-100 pt-8 pl-12 pr-10">
      <NavBar />
      <WeatherGrid
        dates={dates}
        minTemps={minTemps}
        maxTemps={maxTemps}
        weatherCodes={weatherCodes}
      />
      <div className="h-fit font-quicksand mb-9">
        <span className=" text-black text-2xl ">Today's Highlights</span>
      </div>
      <InfoGrid
        sunriseTime={sunriseTime}
        sunsetTime={sunsetTime}
        value={value}
        speed={speed}
        angle={angle}
        percentage={percentage}
        distance={distance}
        aqi={aqi}
        weatherDataLoading={weatherDataLoading}
        cloudPercentage={cloudPercentage}
        surfacePressure={surfacePressure}
      />
    </div>
  );
};

export default DashBoard;
