import { Line } from "rc-progress";
import { AQIProps } from "../../../DataInterface";

const AirQuality = ({ aqi }: AQIProps) => {
  let strokeColor: string = "";
  let description: string = "";

  if (aqi <= 50) {
    strokeColor = "#00d700";
    description = "Good";
  } else if (aqi > 50 && aqi <= 100) {
    strokeColor = "#ffed54";
    description = "Moderate";
  } else if (aqi > 100 && aqi <= 150) {
    strokeColor = "#ffad00";
    description = "Unhealthy for sensitive groups";
  } else if (aqi > 150 && aqi <= 200) {
    strokeColor = "#ff0000";
    description = "Unhealthy";
  } else if (aqi > 200 && aqi <= 300) {
    strokeColor = "#942192";
    description = "Very Unhealthy";
  } else {
    strokeColor = "#4a0044";
    description = "Hazardous";
  }

  return (
    <div className="flex flex-col w-full h-48 rounded-2xl bg-white pt-4 pl-6">
      <div className=" font-quicksand text-black text-opacity-40 mb-6">
        Air Quality
      </div>

      <div className="flex flex-row items-center justify-between font-quicksand ">
        <div>
          <span className="text-7xl ">{aqi}</span>
        </div>
        <Line
          className="-rotate-90"
          percent={(aqi / 500) * 100}
          strokeWidth={15}
          trailWidth={15}
          strokeColor={strokeColor}
          strokeLinecap="round"
          style={{ width: 100 }}
        />
      </div>
      <div className=" font-quicksand text-black ">{description}</div>
    </div>
  );
};

export default AirQuality;
