import DegreeSelector from "./DegreeSelector";
import DurationSelector from "./DurationSelector";

const NavBar = () => {
  return (
    <div className="w-full flex flex-row justify-between mb-16">
      <DurationSelector />
      <div className="flex flex-row items-center gap-4">
        <DegreeSelector />
      </div>
    </div>
  );
};

export default NavBar;
