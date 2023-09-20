import { DegreeProps } from "../../../DataInterface";

interface Props {
  buttonText1: string;
  buttonText2: string;
  handleDegree: (value: number) => void;
}

const DegreeSelector = ({
  buttonText1,
  buttonText2,
  degreeScale,
  handleDegree,
}: DegreeProps & Props) => {
  const handleButtonClick = (buttonNumber: number) => {
    handleDegree(buttonNumber);
  };

  return (
    <div className="flex space-x-2 font-quicksand text-lg font-bold">
      <button
        className={`py-2 px-3 rounded-full ${
          degreeScale === 1
            ? " text-white bg-black"
            : " bg-gray-300 text-gray-700"
        } transition-all duration-200 `}
        onClick={() => handleButtonClick(1)}
      >
        {buttonText1}
      </button>
      <button
        className={`py-2 px-3 rounded-full ${
          degreeScale === 2
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
