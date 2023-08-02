import AirQuality from "./AirQuality";
import Humidity from "./Humidity";
import SunriseSunset from "./SunriseSunset";
import UVIndex from "./UVIndex";
import Visibility from "./Visibility";
import WindStatus from "./WindStatus";

const InfoGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-y-5 gap-x-14 ">
      <UVIndex value={4} />
      <WindStatus angle={225} />
      <SunriseSunset />
      <Humidity percentage={22} />
      <Visibility />
      <AirQuality />
    </div>
  );
};

export default InfoGrid;
