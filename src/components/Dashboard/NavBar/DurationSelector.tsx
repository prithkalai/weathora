import { useState } from "react";

interface Props {
  buttonText1: string;
  buttonText2: string;
}

const DurationSelector = ({ buttonText1, buttonText2 }: Props) => {
  const [selectedButton, setSelectedButton] = useState(2);

  const handleButtonClick = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <div className="flex space-x-4 font-quicksand text-xl">
      <button
        className={`py-2 px-4 rounded font-semibold ${
          selectedButton === 1
            ? " text-white bg-black underline"
            : " bg-gray-300 text-gray-700"
        } transition-all duration-200 `}
        onClick={() => handleButtonClick(1)}
      >
        {buttonText1}
      </button>
      <button
        className={`py-2 px-4 rounded ${
          selectedButton === 2
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
