import { Shimmer } from "react-shimmer";
import { TodayHighlightProps } from "../../../DataInterface";
import AirQuality from "./AirQuality";
import Humidity from "./Humidity";
import SunriseSunset from "./SunriseSunset";
import UVIndex from "./UVIndex";
import Visibility from "./Visibility";
import WindStatus from "./WindStatus";
import CloudCover from "./CloudCover";
import SurfacePressure from "./SurfacePressure";

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
          <ShimmerList count={8} />
          <p>{}</p>
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

// Funtion to return the shimmer list
const ShimmerList = ({ count }: { count: number }) => {
  const shimmerItems = Array.from({ length: count }, (_, index) => (
    <div key={index}>
      <Shimmer width={253} height={192} className="rounded-xl" />
    </div>
  ));

  return <>{shimmerItems}</>;
};
