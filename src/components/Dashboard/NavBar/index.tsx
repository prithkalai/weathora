import DegreeSelector from "./DegreeSelector";
import DurationSelector from "./DurationSelector";

const NavBar = () => {
  return (
    <div className="w-full flex flex-row justify-between mb-16">
      <DurationSelector buttonText1="Today" buttonText2="Week" />
      <div className="flex flex-row items-center gap-4">
        <DegreeSelector buttonText1="°C" buttonText2="°F" />
      </div>
    </div>
  );
};

export default NavBar;
