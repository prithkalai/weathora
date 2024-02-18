import { ShimmerList } from "../../../HelperFunctions";
import useDataStore from "../../../data/dataStore";
import AirQuality from "./AirQuality";
import CloudCover from "./CloudCover";
import Humidity from "./Humidity";
import SunriseSunset from "./SunriseSunset";
import SurfacePressure from "./SurfacePressure";
import UVIndex from "./UVIndex";
import Visibility from "./Visibility";
import WindStatus from "./WindStatus";

const InfoGrid = () => {
  const weatherDataLoading = useDataStore((s) => s.weatherDataLoading);
  return (
    <>
      {weatherDataLoading ? (
        <div className="grid grid-cols-4 gap-y-5 gap-x-5">
          <ShimmerList width={253} height={192} count={8} />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-y-5 gap-x-5 ">
          <UVIndex />
          <AirQuality />
          <WindStatus />
          <SunriseSunset />
          <Humidity />
          <Visibility />
          <CloudCover />
          <SurfacePressure />
        </div>
      )}
    </>
  );
};

export default InfoGrid;
