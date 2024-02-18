import { weatherMap } from "../../../data/DataInterface";
import useDataStore from "../../../data/dataStore";
import WeatherCard from "./WeatherCard";

const WeatherGrid = () => {
  const { dates, maxTemps, minTemps, weatherCodes, units } = useDataStore(
    (s) => ({
      dates: s.weatherData.daily.time,
      maxTemps: s.weatherData.daily.temperature_2m_max,
      minTemps: s.weatherData.daily.temperature_2m_min,
      weatherCodes: s.weatherData.daily.weathercode,
      units: s.units,
    })
  );

  return (
    <div className="flex flex-row gap-3 mx-auto mb-12">
      {dates.map((date, index) => (
        <WeatherCard
          key={index}
          date={date}
          maxTemp={maxTemps[index]}
          minTemp={minTemps[index]}
          weatherIcon={weatherMap[weatherCodes[index]].icon}
          units={units}
        />
      ))}
    </div>
  );
};

export default WeatherGrid;
