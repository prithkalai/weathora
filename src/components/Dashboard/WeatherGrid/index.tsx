import WeatherCard from "./WeatherCard";

const WeatherGrid = () => {
  // Testing Data
  const testDatesISO8601: string[] = [
    "2023-08-01T00:00:00Z", // Tuesday
    "2023-08-02T00:00:00Z", // Wednesday
    "2023-08-03T00:00:00Z", // Thursday
    "2023-08-04T00:00:00Z", // Friday
    "2023-08-05T00:00:00Z", // Saturday
    "2023-08-06T00:00:00Z", // Sunday
    "2023-08-07T00:00:00Z", // Monday
  ];

  return (
    <div className="flex flex-row gap-3 mx-auto mb-16">
      {testDatesISO8601.map((date) => (
        <WeatherCard key={date} date={date} />
      ))}
    </div>
  );
};

export default WeatherGrid;
