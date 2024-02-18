import { SyncLoader } from "react-spinners";
import WeatherIcon from "../AnimatedWeather";
import { AnimatedWeatherTimes } from "animated-weather-icon";
import { weatherCodeData } from "../../DataInterface";

interface Props {
  weatherDataLoading: boolean;
  isDay: boolean;
  weathercode: weatherCodeData;
}

export const CurrWeatherIcon = ({
  weatherDataLoading,
  isDay,
  weathercode,
}: Props) => (
  <div className="mb-4">
    {weatherDataLoading ? (
      <div className="flex justify-center items-center w-80 h-72 mr-10">
        <SyncLoader color="#181818" />
      </div>
    ) : (
      <WeatherIcon
        className="w-80 h-72 mr-10"
        weatherTime={AnimatedWeatherTimes[isDay ? "Day" : "Night"]}
        weatherType={weathercode.icon}
        disableAnimations={false}
      />
    )}
  </div>
);
