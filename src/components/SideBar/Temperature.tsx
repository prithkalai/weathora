import { celsiusToFahrenheit, customRound } from "../../HelperFunctions";
import useDataStore from "../../data/dataStore";

const Temperature = () => {
  const { weatherDataLoading, currentTemperature, apparentTemperature, units } =
    useDataStore((s) => ({
      weatherDataLoading: s.weatherDataLoading,
      currentTemperature: customRound(
        s.weatherData.hourly.temperature_2m[s.hourlyIndex]
      ),
      apparentTemperature: customRound(
        s.weatherData.hourly.apparent_temperature[s.hourlyIndex]
      ),
      units: s.units,
    }));

  return (
    <>
      <div className="ml-12 text-black  font-quicksand text-8xl ">
        {weatherDataLoading
          ? 0
          : units == "C"
          ? currentTemperature
          : celsiusToFahrenheit(currentTemperature)}
        °
      </div>
      <div className="ml-12 text-neutral-500  text-lg font-quicksand mb-6">
        Feels like{" "}
        {weatherDataLoading
          ? 0
          : units == "C"
          ? apparentTemperature
          : celsiusToFahrenheit(apparentTemperature)}
        °
      </div>
    </>
  );
};

export default Temperature;
