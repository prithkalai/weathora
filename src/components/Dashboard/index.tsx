import {
  DegreeProps,
  TodayHighlightProps,
  WeatherCardProps,
} from "../../DataInterface";
import NavBar from "./NavBar";
import InfoGrid from "./TodayInfoGrid";
import WeatherGrid from "./WeatherGrid";
import { ShimmerList } from "../../HelperFunctions";

interface Props {
  handleDegree: (value: number) => void;
}

const DashBoard: React.FC<
  TodayHighlightProps & WeatherCardProps & DegreeProps & Props
> = ({
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
  handleDegree,
  degreeScale,
}) => {
  return (
    <div className="flex flex-col w-full h-screen bg-neutral-100 pt-8 pl-12 pr-10">
      <NavBar handleDegree={handleDegree} degreeScale={degreeScale} />
      {weatherDataLoading ? (
        <div className="flex gap-3 mx-auto mb-12">
          <ShimmerList width={143} height={160} count={7} />
        </div>
      ) : (
        <WeatherGrid
          dates={dates}
          minTemps={minTemps}
          maxTemps={maxTemps}
          weatherCodes={weatherCodes}
          degreeScale={degreeScale}
        />
      )}

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
