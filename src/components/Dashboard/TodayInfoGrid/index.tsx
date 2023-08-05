import { TodayHighlightProps } from "../../../DataInterface";
import AirQuality from "./AirQuality";
import Humidity from "./Humidity";
import SunriseSunset from "./SunriseSunset";
import UVIndex from "./UVIndex";
import Visibility from "./Visibility";
import WindStatus from "./WindStatus";
import CloudCover from "./CloudCover";
import SurfacePressure from "./SurfacePressure";
import { ShimmerList } from "../../../HelperFunctions";

const InfoGrid: React.FC<TodayHighlightProps> = ({
  sunriseTime,
  sunsetTime,
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
    <>
      {weatherDataLoading ? (
        <div className="grid grid-cols-4 gap-y-5 gap-x-14">
          <ShimmerList width={253} height={192} count={8} />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-y-5 gap-x-5 ">
          <UVIndex value={value} />
          <AirQuality aqi={aqi} />
          <WindStatus angle={angle} speed={speed} />
          <SunriseSunset sunriseTime={sunriseTime} sunsetTime={sunsetTime} />
          <Humidity percentage={percentage} />
          <Visibility distance={distance} />
          <CloudCover cloudPercentage={cloudPercentage} />
          <SurfacePressure surfacePressure={surfacePressure} />
        </div>
      )}
    </>
  );
};

export default InfoGrid;
