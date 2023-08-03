import { useEffect, useState } from "react";
import DashBoard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import apiClient from "./services/apiClient";
import weatherDataIterface from "./DataInterface";

function App() {
  const [weatherData, setWeatherData] = useState<weatherDataIterface>();

  // h - Hourly Variables
  const [rainChance, setRainChance] = useState(0); // Current chance of rain
  const [currTemp, setCurrTemp] = useState(20); // Current temperature

  // d - Daily variables
  const [dTime, setDTime] = useState<string[]>([]);
  const [dMaxTemp, setDMaxTemp] = useState<number[]>([]);
  const [dMinTemp, setDMinTemp] = useState<number[]>([]);
  const [sunrise, setSunrise] = useState<string>("");
  const [sunset, setSunset] = useState("");

  // Function that sets the new variable
  const processData = (data: weatherDataIterface) => {
    console.log(
      data.daily.temperature_2m_max[3],
      data.daily.temperature_2m_min[3],
      data.daily.temperature_2m_min.length
    );

    // Set Variables for the daily weather cards
    setDTime(data.daily.time);
    setDMaxTemp(data.daily.temperature_2m_max);
    setDMinTemp(data.daily.temperature_2m_min);

    const index = findTodayIndex(data.daily.time);
    setSunrise(data.daily.sunrise[index]);
    setSunset(data.daily.sunset[index]);
  };

  function findTodayIndex(dates: string[]): number {
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are 0 based, so add 1 and format to 2 digits
    const day = ("0" + date.getDate()).slice(-2); // Format to 2 digits

    const today = `${year}-${month}-${day}`;

    return dates.findIndex((date) => date === today);
  }

  useEffect(() => {
    apiClient
      .get(
        "/forecast?latitude=38.881&longitude=-77.1043&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,visibility,windspeed_10m,winddirection_10m,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto"
      )
      .then((res) => {
        setWeatherData(res.data);
        processData(res.data);
      });
  }, []);

  return (
    <div className="mx-auto max-w-[1650px] h-screen sm:w-full">
      <div className="flex flex-row">
        <SideBar rainChance={rainChance} currentTemperature={currTemp} />
        <DashBoard
          dates={dTime}
          maxTemps={dMaxTemp}
          minTemps={dMinTemp}
          sunriseTime={sunrise}
          sunsetTime={sunset}
        />
      </div>
    </div>
  );
}

export default App;
