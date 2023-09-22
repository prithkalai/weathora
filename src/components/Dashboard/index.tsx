import {
  DegreeProps,
  DurationProps,
  HourlyWeatherProps,
  TodayHighlightProps,
  WeatherCardProps,
} from "../../DataInterface";
import NavBar from "./NavBar";
import InfoGrid from "./TodayInfoGrid";
import WeatherGrid from "./WeatherGrid";
import { ShimmerList } from "../../HelperFunctions";
import HourlyWeather from "./HourlyWeather";

interface Props {
  handleDegree: (value: number) => void;
  handleDuration: (value: number) => void;
}

const DashBoard: React.FC<
  TodayHighlightProps &
    WeatherCardProps &
    DegreeProps &
    Props &
    HourlyWeatherProps &
    DurationProps
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
  hourlyIndex,
  hourlyTemps,
  hourlyWeatherCode,
  durationScale,
  handleDuration,
}) => {
  return (
    <div className="flex flex-col w-screen max-h-[1080px] bg-neutral-100 pt-8 pl-12 pr-10 pb-10">
      <NavBar
        handleDegree={handleDegree}
        degreeScale={degreeScale}
        handleDuration={handleDuration}
        durationScale={durationScale}
      />
      {weatherDataLoading ? (
        <div className="flex gap-3 mx-auto mb-12">
          <ShimmerList width={143} height={160} count={7} />
        </div>
      ) : (
        <>
          {durationScale == 2 ? (
            <WeatherGrid
              dates={dates}
              minTemps={minTemps}
              maxTemps={maxTemps}
              weatherCodes={weatherCodes}
              degreeScale={degreeScale}
            />
          ) : (
            <HourlyWeather
              hourlyIndex={hourlyIndex}
              hourlyTemps={hourlyTemps}
              hourlyWeatherCode={hourlyWeatherCode}
              degreeScale={degreeScale}
            />
          )}
        </>
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
