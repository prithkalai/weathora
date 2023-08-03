import { TodayHighlightProps } from "../../../DataInterface";
import AirQuality from "./AirQuality";
import Humidity from "./Humidity";
import SunriseSunset from "./SunriseSunset";
import UVIndex from "./UVIndex";
import Visibility from "./Visibility";
import WindStatus from "./WindStatus";

const InfoGrid: React.FC<TodayHighlightProps> = ({
  sunriseTime,
  sunsetTime,
  value,
  speed,
  angle,
  percentage,
  distance,
  aqi,
}) => {
  return (
    <div className="grid grid-cols-3 gap-y-5 gap-x-14 ">
      <UVIndex value={value} />
      <WindStatus angle={angle} speed={speed} />
      <SunriseSunset sunriseTime={sunriseTime} sunsetTime={sunsetTime} />
      <Humidity percentage={percentage} />
      <Visibility distance={distance} />
      <AirQuality aqi={aqi} />
    </div>
  );
};

export default InfoGrid;
