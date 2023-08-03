import { Line } from "rc-progress";
import { HumidityProps } from "../../../DataInterface";

const Humidity = ({ percentage }: HumidityProps) => {
  let strokeColor: string = "";
  let description: string = "";

  if (percentage <= 30) {
    strokeColor = "#00d700";
    description = "Dry";
  } else if (percentage > 30 && percentage <= 50) {
    strokeColor = "#ffed54";
    description = "Comfortable";
  } else if (percentage > 50 && percentage <= 70) {
    strokeColor = "#ffad00";
    description = "Above Average";
  } else if (percentage > 70 && percentage <= 90) {
    strokeColor = "#ff0000";
    description = "High";
  } else {
    strokeColor = "#942192";
    description = "Very High";
  }

  return (
    <div className="flex flex-col w-full h-48 rounded-2xl bg-white pt-4 pl-6">
      <div className=" font-quicksand text-black text-opacity-40 mb-6">
        Humidity
      </div>

      <div className="flex flex-row items-center justify-between font-quicksand ">
        <div>
          <span className="text-7xl ">{percentage}</span>
          <span className="text-3xl">%</span>
        </div>
        <Line
          className="-rotate-90"
          percent={percentage}
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

export default Humidity;
