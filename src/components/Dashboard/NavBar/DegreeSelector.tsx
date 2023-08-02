import { useState } from "react";

interface Props {
  buttonText1: string;
  buttonText2: string;
}

const DegreeSelector = ({ buttonText1, buttonText2 }: Props) => {
  const [selectedButton, setSelectedButton] = useState(2);

  const handleButtonClick = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <div className="flex space-x-2 font-quicksand text-lg font-bold">
      <button
        className={`py-2 px-3 rounded-full ${
          selectedButton === 1
            ? " text-white bg-black"
            : " bg-gray-300 text-gray-700"
        } transition-all duration-200 `}
        onClick={() => handleButtonClick(1)}
      >
        {buttonText1}
      </button>
      <button
        className={`py-2 px-3 rounded-full ${
          selectedButton === 2
            ? "bg-black text-white"
            : "bg-gray-300 text-gray-700"
        } transition-all duration-200 `}
        onClick={() => handleButtonClick(2)}
      >
        {buttonText2}
      </button>
    </div>
  );
};

export default DegreeSelector;
