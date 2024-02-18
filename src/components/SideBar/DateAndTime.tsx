import moment from "moment-timezone";
import { useEffect, useState } from "react";
import useDataStore from "../../data/dataStore";

// Function that returns the current day
function getCurrentDay(timezone: string): string {
  return moment.tz(timezone).format("dddd");
}

const DateAndTime = () => {
  const { weatherDataLoading, timezone } = useDataStore((s) => ({
    weatherDataLoading: s.weatherDataLoading,
    timezone: s.weatherData.timezone,
  }));
  // Initialize time with the current time in the specified timezone
  const [time, setTime] = useState(moment.tz(timezone).format("hh:mm A"));

  useEffect(() => {
    const timerId = setInterval(() => {
      // Update time with the current time in the specified timezone
      setTime(moment.tz(timezone).format("hh:mm A"));
    }, 1000); // Update every second

    return () => {
      clearInterval(timerId);
    };
  }, [timezone]); // Dependency array includes timezone, so the effect will re-run if the timezone prop changes

  return (
    <div className="ml-12 h-fit font-quicksand mb-8">
      <span className=" text-black  text-2xl ">
        {weatherDataLoading ? "--------" : getCurrentDay(timezone)},
      </span>
      <span className="text-neutral-500  text-2xl">
        {" "}
        {weatherDataLoading ? (
          "-- : --"
        ) : (
          <>
            {time.split(":")[0]}
            <span className="blink">:</span>
            {time.split(":")[1]}
          </>
        )}
      </span>
    </div>
  );
};

export default DateAndTime;
