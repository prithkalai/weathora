import DegreeSelector from "./DegreeSelector";
import DurationSelector from "./DurationSelector";

const NavBar = () => {
  return (
    <div className="w-full flex flex-row justify-between">
      <DurationSelector buttonText1="Today" buttonText2="Week" />
      <DegreeSelector buttonText1="°C" buttonText2="°F" />
    </div>
  );
};

export default NavBar;
