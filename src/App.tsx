import { useEffect, useState } from "react";
import weatherDataIterface, { GeoCodeData, weatherMap } from "./DataInterface";
import {
  customRound,
  findIndexOfClosestTimeBeforeNow,
  findTodayIndex,
} from "./HelperFunctions";
import DashBoard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import apiClient from "./services/apiClient";

// TODO: Error Handling for all API calls
// TODO: Store all the state variables in a zustand store.

function App() {
  const [timezone, setTimezone] = useState("");
  const [currentHour, setCurrentHour] = useState<number>(new Date().getHours());
  const [address, setAddress] = useState<GeoCodeData>({
    city: "",
    state: "",
    country_code: "",
    country: "",
  });
  const [isDay, setIsDay] = useState(true);
  const [degreeScale, setDegreeScale] = useState(1);
  const [durationScale, setDurationScale] = useState(2);

  // Variables for Loading
  const [weatherLoading, setWeatherLoading] = useState(true);

  // h - Hourly Variables
  const [rainChance, setRainChance] = useState(0); // Current chance of rain
  const [currTemp, setCurrTemp] = useState(0); // Current temperature
  const [currUV, setCurrUV] = useState(0); // Current UV Index
  const [windSpeed, setWindSpeed] = useState(0); // Current Wind Speed
  const [windDirection, setWindDirection] = useState(0); // Current Wind Direction
  const [humidity, setHumidity] = useState(0); // Current Humidity
  const [visibility, setVisibility] = useState(0); // Current Visibility
  const [aqi, setAQI] = useState(0); // Current AQI
  const [weatherCode, setWeatherCode] = useState(0); // Current Hourly Weather Code
  const [cloudPercentage, setCloudPercentage] = useState(0); // Current Cloud Cover
  const [surfacePressure, setSurfacePressure] = useState(0); // Current Surface Pressure
  const [apparentTemperature, setApparentTemperature] = useState(0); // Current Apparent Temperature
  const [hourlyWeatherCode, setHourlyWeatherCode] = useState<number[]>([]); // Array of hourly weather codes
  const [hourlyTemp, setHourlyTemp] = useState<number[]>([]); //  Array of hourly temps in celcius
  const [hourlyIndex, setHourlyIndex] = useState(0); // Current index from the data

  // d - Daily variables
  const [dTime, setDTime] = useState<string[]>([]);
  const [dMaxTemp, setDMaxTemp] = useState<number[]>([]);
  const [dMinTemp, setDMinTemp] = useState<number[]>([]);
  const [sunrise, setSunrise] = useState<string>("");
  const [sunset, setSunset] = useState("");
  const [dweatherCodes, setDWeatherCodes] = useState<number[]>([]);

  // Function the retrieves current weather data
  function getCurrWeather(latitude: number, longitude: number) {
    // Retrieves Location Data to view
    setTimeout(() => {
      // Timeout to prevent successive server requests
      apiClient.getLocation(latitude, longitude).then((res) => {
        setAddress(res.data.address);
      });
    }, 1000);

    // Retrieve current weather forecast info
    apiClient.getWeatherForecast(latitude, longitude).then((res) => {
      console.log(res.data);
      setRetrievedWeatherData(res.data, latitude, longitude);
      setWeatherLoading(false);
    });
  }

  // Function that initializes Weather Data
  function initializeWeatherData() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((res) =>
        getCurrWeather(res.coords.latitude, res.coords.longitude)
      );
    } else {
      console.log("Geolocation not supported");
    }
  }

  // Function that handles for when a location is searched.
  function handleSearch(address: string) {
    setWeatherLoading(true);
    apiClient.getCoordinates(address).then((res) => {
      console.log(res.data);

      getCurrWeather(parseFloat(res.data[0].lat), parseFloat(res.data[0].lon));
    });
  }

  // Function that handles when the location button is clicked
  function handleCurrLocationClick() {
    setWeatherLoading(true);
    initializeWeatherData();
  }

  // Function that sets the new variables from the data received
  const setRetrievedWeatherData = (
    data: weatherDataIterface,
    latitude: number,
    longitude: number
  ) => {
    // Get Air Quality data
    apiClient.getAirQuality(latitude, longitude).then((res) => {
      const aqiIndex = findIndexOfClosestTimeBeforeNow(
        res.data.hourly.time,
        data.timezone
      );
      setAQI(res.data.hourly.us_aqi[aqiIndex]);
    });

    setTimezone(data.timezone);

    // Set Variables for the daily weather cards
    setDTime(data.daily.time);
    setDMaxTemp(data.daily.temperature_2m_max);
    setDMinTemp(data.daily.temperature_2m_min);
    setDWeatherCodes(data.daily.weathercode);

    // Find the Daily Index
    const dailyIndex = findTodayIndex(data.daily.time);
    setSunrise(data.daily.sunrise[dailyIndex]);
    setSunset(data.daily.sunset[dailyIndex]);

    setIsDay(data.current_weather.is_day);

    // Find Hourly Index
    const currIndex = findIndexOfClosestTimeBeforeNow(
      data.hourly.time,
      data.timezone
    );
    console.log(currIndex);

    setHourlyIndex(currIndex);

    // Set the hourly variables
    setCurrTemp(customRound(data.hourly.temperature_2m[currIndex]));
    setRainChance(data.hourly.precipitation_probability[currIndex]);
    setCurrUV(data.hourly.uv_index[currIndex]);
    setWindSpeed(data.hourly.windspeed_10m[currIndex]);
    setWindDirection(data.hourly.winddirection_10m[currIndex]);
    setHumidity(data.hourly.relativehumidity_2m[currIndex]);
    setVisibility(data.hourly.visibility[currIndex]);
    setWeatherCode(data.hourly.weathercode[currIndex]);
    setCloudPercentage(data.hourly.cloudcover[currIndex]);
    setSurfacePressure(data.hourly.surface_pressure[currIndex]);
    setApparentTemperature(
      customRound(data.hourly.apparent_temperature[currIndex])
    );
    setHourlyTemp(data.hourly.temperature_2m);
    setHourlyWeatherCode(data.hourly.weathercode);
  };

  // useEffect to retrieve relevant data every hour
  useEffect(() => {
    const hourCheckIntervalId = setInterval(() => {
      const nowHour = new Date().getHours();
      if (nowHour !== currentHour) {
        setCurrentHour(nowHour);
        // When the hour changes, retrieve new data from the server
        initializeWeatherData();
      }
    }, 1000); // checks every second

    return () => {
      clearInterval(hourCheckIntervalId); // clear interval on component unmount
    };
  }, [currentHour]);

  // UseEffect for first API call
  useEffect(() => {
    initializeWeatherData();
  }, []);

  // Toggle between Celsius and Faranheit
  const handleDegree = (value: number) => {
    setDegreeScale(value);
  };

  // Toggle between Today , Week
  const handleDuration = (value: number) => {
    setDurationScale(value);
  };

  return (
    <div className="mx-auto max-w-[1550px] w-full max-h-[1080px] h-screen ">
      <div className="flex flex-row">
        {/* SideBar  */}
        <SideBar
          rainChance={rainChance}
          currentTemperature={currTemp}
          apparentTemperature={apparentTemperature}
          weathercode={weatherMap[weatherCode]}
          timezone={timezone}
          address={address}
          isDay={isDay}
          weatherDataLoading={weatherLoading}
          handleOnClick={handleCurrLocationClick}
          handleOnSubmit={handleSearch}
          degreeScale={degreeScale}
        />

        {/* Dashboard */}
        <DashBoard
          dates={dTime}
          maxTemps={dMaxTemp}
          minTemps={dMinTemp}
          weatherCodes={dweatherCodes}
          sunriseTime={sunrise}
          sunsetTime={sunset}
          value={currUV}
          speed={windSpeed}
          angle={windDirection}
          percentage={humidity}
          distance={visibility}
          aqi={aqi}
          weatherDataLoading={weatherLoading}
          cloudPercentage={cloudPercentage}
          surfacePressure={surfacePressure}
          degreeScale={degreeScale}
          handleDegree={handleDegree}
          hourlyIndex={hourlyIndex}
          hourlyTemps={hourlyTemp}
          hourlyWeatherCode={hourlyWeatherCode}
          durationScale={durationScale}
          handleDuration={handleDuration}
        />
      </div>
    </div>
  );
}

export default App;
