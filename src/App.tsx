import { useEffect, useState } from "react";
import DashBoard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import apiClient from "./services/apiClient";
import weatherDataIterface, { GeoCodeData, weatherMap } from "./DataInterface";
import axios from "axios";
import {
  customRound,
  findIndexOfClosestTimeBeforeNow,
  findTodayIndex,
} from "./HelperFunctions";

function App() {
  // const [weatherData, setWeatherData] = useState<weatherDataIterface>();
  const [time, setTime] = useState<Date>(new Date());
  const [currentHour, setCurrentHour] = useState<number>(new Date().getHours());
  const [address, setAddress] = useState<GeoCodeData>({
    city: "",
    state: "",
    country_code: "",
    country: "",
  });

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
  const [surfacePressure, setSurfacePressure] = useState(0);

  // d - Daily variables
  const [dTime, setDTime] = useState<string[]>([]);
  const [dMaxTemp, setDMaxTemp] = useState<number[]>([]);
  const [dMinTemp, setDMinTemp] = useState<number[]>([]);
  const [sunrise, setSunrise] = useState<string>("");
  const [sunset, setSunset] = useState("");
  const [dweatherCodes, setDWeatherCodes] = useState<number[]>([]);

  function setData() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    } else {
      console.log("Geolocation not supported");
    }

    function success(position: GeolocationPosition) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      axios
        .get(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`)
        .then((res) => {
          setAddress(res.data.address);
        });

      apiClient
        .get(
          `/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,temperature_80m,surface_pressure,cloudcover,relativehumidity_2m,precipitation_probability,weathercode,visibility,windspeed_10m,winddirection_10m,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`
        )
        .then((res) => {
          console.log(weatherLoading);
          processData(res.data, latitude, longitude);
          setWeatherLoading(false);
        });
    }
  }

  // Function that sets the new variables from the data received
  const processData = (
    data: weatherDataIterface,
    latitude: number,
    longitude: number
  ) => {
    // Get Air Quality data
    axios
      .get(
        `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&hourly=us_aqi&timezone=auto`
      )
      .then((res) => {
        const aqiIndex = findIndexOfClosestTimeBeforeNow(res.data.hourly.time);
        setAQI(res.data.hourly.us_aqi[aqiIndex]);
      });

    // Set Variables for the daily weather cards
    setDTime(data.daily.time);
    setDMaxTemp(data.daily.temperature_2m_max);
    setDMinTemp(data.daily.temperature_2m_min);
    console.log(data.daily.weathercode);
    setDWeatherCodes(data.daily.weathercode);

    // Find the Daily Index
    const dailyIndex = findTodayIndex(data.daily.time);
    setSunrise(data.daily.sunrise[dailyIndex]);
    setSunset(data.daily.sunset[dailyIndex]);

    // Find Hourly Index
    const hourlyIndex = findIndexOfClosestTimeBeforeNow(data.hourly.time);
    console.log(hourlyIndex);

    // Set the hourly variables
    setCurrTemp(customRound(data.hourly.temperature_2m[hourlyIndex]));
    setRainChance(data.hourly.precipitation_probability[hourlyIndex]);
    setCurrUV(data.hourly.uv_index[hourlyIndex]);
    setWindSpeed(data.hourly.windspeed_10m[hourlyIndex]);
    setWindDirection(data.hourly.winddirection_10m[hourlyIndex]);
    setHumidity(data.hourly.relativehumidity_2m[hourlyIndex]);
    setVisibility(data.hourly.visibility[hourlyIndex]);
    setWeatherCode(data.hourly.weathercode[hourlyIndex]);
    setCloudPercentage(data.hourly.cloudcover[hourlyIndex]);
    setSurfacePressure(data.hourly.surface_pressure[hourlyIndex]);
  };

  // useEffect for every minute
  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date();
      if (now.getMinutes() !== time.getMinutes()) {
        setTime(now);
      }
    }, 1000); // Checks every second

    return () => {
      clearInterval(timerId);
    };
  }, [time]);

  // useEffect for every hour
  useEffect(() => {
    const hourCheckIntervalId = setInterval(() => {
      const nowHour = new Date().getHours();
      if (nowHour !== currentHour) {
        setCurrentHour(nowHour);
        // When the hour changes, retrieve new data from the server
        setData();
      }
    }, 1000); // checks every second

    return () => {
      clearInterval(hourCheckIntervalId); // clear interval on component unmount
    };
  }, [currentHour]);

  // UseEffect for first API call
  useEffect(() => {
    setData();
  }, []);

  return (
    <div className="mx-auto max-w-[1650px] h-screen sm:w-full">
      <div className="flex flex-row">
        <SideBar
          rainChance={rainChance}
          currentTemperature={currTemp}
          weathercode={weatherMap[weatherCode]}
          time={time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          address={address}
        />
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
        />
      </div>
    </div>
  );
}

export default App;
