import { SunriseSunsetProps } from "../../../DataInterface";
import AirQuality from "./AirQuality";
import Humidity from "./Humidity";
import SunriseSunset from "./SunriseSunset";
import UVIndex from "./UVIndex";
import Visibility from "./Visibility";
import WindStatus from "./WindStatus";

const InfoGrid = ({ sunriseTime, sunsetTime }: SunriseSunsetProps) => {
  return (
    <div className="grid grid-cols-3 gap-y-5 gap-x-14 ">
      <UVIndex value={4} />
      <WindStatus angle={225} />
      <SunriseSunset sunriseTime={sunriseTime} sunsetTime={sunsetTime} />
      <Humidity percentage={22} />
      <Visibility />
      <AirQuality aqi={320} />
    </div>
  );
};

export default InfoGrid;
