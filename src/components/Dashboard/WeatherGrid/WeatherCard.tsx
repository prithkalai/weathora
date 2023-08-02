import {
  AnimatedWeatherTimes,
  AnimatedWeatherTypes,
} from "animated-weather-icon";
import WeatherIcon from "../../AnimatedWeather";

interface Props {
  date: string;
}

const WeatherCard = ({ date }: Props) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg h-40 w-[143px] font-quicksand pt-3 gap-3">
      <div className="text-md">{getDayFromDate(date)}</div>
      <WeatherIcon
        className="w-16 h-16"
        weatherTime={AnimatedWeatherTimes.Day}
        weatherType={AnimatedWeatherTypes.DrizzleShowers}
        disableAnimations={false}
      />
      <div className="flex flex-row gap-3 ">
        <span className=" text-black text-sm ">15°</span>
        <span className=" text-black opacity-30 text-sm ">3°</span>
      </div>
    </div>
  );
};

// Function that returns day from given date in iso8601 format
function getDayFromDate(dateISO8601: string): string {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(dateISO8601);
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}

export default WeatherCard;
