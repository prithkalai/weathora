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

  function getCurrWeather(latitude: number, longitude: number) {
    // Retrieves Location Data to view
    setTimeout(() => {
      axios
        .get(
          `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=65d160713f885247351708uzs351dbe`
        )
        .then((res) => {
          setAddress(res.data.address);
          apiClient
            .get(
              `/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,temperature_80m,apparent_temperature,surface_pressure,cloudcover,relativehumidity_2m,precipitation_probability,weathercode,visibility,windspeed_10m,winddirection_10m,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`
            )
            .then((res) => {
              console.log(res.data);

              setRetrievedWeatherData(res.data, latitude, longitude);
              setWeatherLoading(false);
            });
        });
    }, 1500);
  }

  // Function that is called on first loading
  function setData() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((res) =>
        getCurrWeather(res.coords.latitude, res.coords.longitude)
      );
    } else {
      console.log("Geolocation not supported");
    }
  }

  // Function that handles when a location is searched.
  function handleSearch(address: string) {
    setWeatherLoading(true);
    axios
      .get(
        `https://geocode.maps.co/search?q=${address}&api_key=65d160713f885247351708uzs351dbe`
      )
      .then((res) => {
        console.log(res.data);

        getCurrWeather(
          parseFloat(res.data[0].lat),
          parseFloat(res.data[0].lon)
        );
      });
  }

  // Function that handles when the location button is clicked
  function handleCurrLocationClick() {
    setWeatherLoading(true);
    setData();
  }

  // Function that sets the new variables from the data received
  const setRetrievedWeatherData = (
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

  const handleDegree = (value: number) => {
    setDegreeScale(value);
    console.log(value);
  };

  const handleDuration = (value: number) => {
    setDurationScale(value);
  };

  console.log(weatherCode);

  return (
    <div className="mx-auto max-w-[1550px] w-full max-h-[1080px] h-screen ">
      <div className="flex flex-row">
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
