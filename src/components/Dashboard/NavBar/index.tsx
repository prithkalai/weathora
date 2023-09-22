import DegreeSelector from "./DegreeSelector";
import DurationSelector from "./DurationSelector";
import { DegreeProps, DurationProps } from "../../../DataInterface";

interface Props {
  handleDegree: (value: number) => void;
  handleDuration: (value: number) => void;
}

const NavBar = ({
  degreeScale,
  handleDegree,
  durationScale,
  handleDuration,
}: DegreeProps & Props & DurationProps) => {
  return (
    <div className="w-full flex flex-row justify-between mb-16">
      <DurationSelector
        buttonText1="Today"
        buttonText2="Week"
        handleDuration={handleDuration}
        durationScale={durationScale}
      />
      <div className="flex flex-row items-center gap-4">
        <DegreeSelector
          buttonText1="°C"
          buttonText2="°F"
          handleDegree={handleDegree}
          degreeScale={degreeScale}
        />
      </div>
    </div>
  );
};

export default NavBar;
