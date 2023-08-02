import { SemiCircleProgress } from "react-semicircle-progressbar";

interface Props {
  value: number;
  maxValue?: number;
}

const UVIndex = ({ value, maxValue = 13 }: Props) => {
  let strokeColor: string = "";

  if (value <= 2) {
    strokeColor = "#00d700";
  } else if (value > 2 && value <= 5) {
    strokeColor = "#ffed54";
  } else if (value > 5 && value <= 7) {
    strokeColor = "#ffad00";
  } else if (value > 7 && value <= 10) {
    strokeColor = "#ff0000";
  } else strokeColor = "#942192";

  return (
    <div className="flex flex-col w-full h-48 rounded-2xl bg-white pt-4">
      <div className=" font-quicksand text-black text-opacity-40 pl-6">
        UV Index
      </div>
      <div className="relative">
        <div className="flex flex-col items-center ">
          <SemiCircleProgress
            percentage={Math.ceil((value / maxValue) * 100)}
            size={{ width: 300, height: 170 }}
            strokeWidth={10}
            strokeColor={strokeColor}
            hasBackground={true}
            strokeLinecap="round"
            percentageSeperator="  "
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white w-12 h-16 flex items-end justify-center text-5xl font-quicksand">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UVIndex;
