import {
  DegreeProps,
  HourlyWeatherProps,
  weatherMap,
} from "../../../DataInterface";
import { generateTimes } from "../../../HelperFunctions";
import HourlyWeatherCard from "./HourlyWeatherCard";

const HourlyWeather = ({
  hourlyIndex,
  hourlyTemps,
  hourlyWeatherCode,
  degreeScale,
}: HourlyWeatherProps & DegreeProps) => {
  const times = generateTimes(20);
  return (
    <div className="h-44 w-[1100px] overflow-x-auto overflow-y-hidden mb-12 mx-auto">
      <div className="flex flex-row gap-3">
        {hourlyTemps.slice(hourlyIndex, hourlyIndex + 20).map((temp, index) => (
          <HourlyWeatherCard
            temp={temp}
            time={times[index]}
            weatherIcon={weatherMap[hourlyWeatherCode[hourlyIndex]].icon}
            degreeScale={degreeScale}
          />
        ))}
      </div>
    </div>
  );
};

export default HourlyWeather;
