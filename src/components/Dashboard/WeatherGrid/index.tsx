import { WeatherCardProps } from "../../../DataInterface";
import WeatherCard from "./WeatherCard";

const WeatherGrid = ({ dates, minTemps, maxTemps }: WeatherCardProps) => {
  return (
    <div className="flex flex-row gap-3 mx-auto mb-16">
      {dates.map((date, index) => (
        <WeatherCard
          key={index}
          date={date}
          maxTemp={maxTemps[index]}
          minTemp={minTemps[index]}
        />
      ))}
    </div>
  );
};

export default WeatherGrid;
