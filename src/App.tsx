import { useEffect, useState } from "react";
import {
  findIndexOfClosestTimeBeforeNow,
  findTodayIndex,
} from "./HelperFunctions";
import DashBoard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import useDataStore from "./data/dataStore";
import apiClient from "./services/apiClient";

// TODO: Error Handling for all API calls
// TODO: Clear all severity vulnerabilities

function App() {
  const {
    setWeatherDataLoading,
    setWeatherData,
    setHourlyIndex,
    setDailyIndex,
    setAqi,
    setAddress,
  } = useDataStore();

  const [currentHour, setCurrentHour] = useState<number>(new Date().getHours());

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
      // Get Air Quality data
      apiClient.getAirQuality(latitude, longitude).then((res) => {
        const aqiIndex = findIndexOfClosestTimeBeforeNow(
          res.data.hourly.time,
          res.data.timezone
        );
        setAqi(res.data.hourly.us_aqi[aqiIndex]);
      });

      setHourlyIndex(
        findIndexOfClosestTimeBeforeNow(res.data.hourly.time, res.data.timezone)
      );
      setDailyIndex(findTodayIndex(res.data.daily.time));
      setWeatherData(res.data);
      setWeatherDataLoading(false);
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
    setWeatherDataLoading(true);
    apiClient.getCoordinates(address).then((res) => {
      getCurrWeather(parseFloat(res.data[0].lat), parseFloat(res.data[0].lon));
    });
  }

  // Function that handles when the location button is clicked
  function handleCurrLocationClick() {
    setWeatherDataLoading(true);
    initializeWeatherData();
  }

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

  return (
    <div className="mx-auto max-w-[1550px] w-full max-h-[1080px] h-screen ">
      <div className="flex flex-row">
        {/* SideBar  */}
        <SideBar
          handleOnClick={handleCurrLocationClick}
          handleOnSubmit={handleSearch}
        />
        {/* Dashboard */}
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
