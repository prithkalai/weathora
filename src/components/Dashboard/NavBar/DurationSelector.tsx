import { DurationProps } from "../../../DataInterface";

interface Props {
  buttonText1: string;
  buttonText2: string;
  handleDuration: (value: number) => void;
}

const DurationSelector = ({
  buttonText1,
  buttonText2,
  handleDuration,
  durationScale,
}: Props & DurationProps) => {
  const handleButtonClick = (buttonNumber: number) => {
    handleDuration(buttonNumber);
  };

  return (
    <div className="flex space-x-4 font-quicksand text-xl">
      <button
        className={`py-2 px-4 rounded font-semibold ${
          durationScale === 1
            ? " text-white bg-black underline"
            : " bg-gray-300 text-gray-700"
        } transition-all duration-200 `}
        onClick={() => handleButtonClick(1)}
      >
        {buttonText1}
      </button>
      <button
        className={`py-2 px-4 rounded ${
          durationScale === 2
            ? "bg-black text-white underline"
            : "bg-gray-300 text-gray-700"
        } transition-all duration-200 `}
        onClick={() => handleButtonClick(2)}
      >
        {buttonText2}
      </button>
    </div>
  );
};

export default DurationSelector;
