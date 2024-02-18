import { celsiusToFahrenheit } from "../../HelperFunctions";

interface TempProps {
  weatherDataLoading: boolean;
  degreeScale: number;
  currentTemperature: number;
  apparentTemperature: number;
}

const Temperature = ({
  weatherDataLoading,
  degreeScale,
  currentTemperature,
  apparentTemperature,
}: TempProps) => {
  return (
    <>
      <div className="ml-12 text-black  font-quicksand text-8xl ">
        {weatherDataLoading
          ? 0
          : degreeScale == 1
          ? currentTemperature
          : celsiusToFahrenheit(currentTemperature)}
        °
      </div>
      <div className="ml-12 text-neutral-500  text-lg font-quicksand mb-6">
        Feels like{" "}
        {weatherDataLoading
          ? 0
          : degreeScale == 1
          ? apparentTemperature
          : celsiusToFahrenheit(apparentTemperature)}
        °
      </div>
    </>
  );
};

export default Temperature;
