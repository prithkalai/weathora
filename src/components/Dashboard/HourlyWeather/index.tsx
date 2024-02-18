import { weatherMap } from "../../../data/DataInterface";
import useDataStore from "../../../data/dataStore";
import { generateTimes } from "../../../HelperFunctions";
import HourlyWeatherCard from "./HourlyWeatherCard";

const HourlyWeather = () => {
  const times = generateTimes(20);
  const { hourlyIndex, hourlyWeatherCode, hourlyTemps, units } = useDataStore(
    (s) => ({
      hourlyIndex: s.hourlyIndex,
      hourlyWeatherCode: s.weatherData.hourly.weathercode,
      hourlyTemps: s.weatherData.hourly.temperature_2m,
      units: s.units,
    })
  );
  return (
    <div className="h-44 w-[1100px] overflow-x-auto overflow-y-hidden mb-12 mx-auto">
      <div className="flex flex-row gap-3">
        {hourlyTemps.slice(hourlyIndex, hourlyIndex + 20).map((temp, index) => (
          <HourlyWeatherCard
            temp={temp}
            time={times[index]}
            weatherIcon={weatherMap[hourlyWeatherCode[hourlyIndex]].icon}
            units={units}
          />
        ))}
      </div>
    </div>
  );
};

export default HourlyWeather;
