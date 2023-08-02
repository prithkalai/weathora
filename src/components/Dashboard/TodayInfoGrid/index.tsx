import UVIndex from "./UVIndex";
import WindStatus from "./WindStatus";

const InfoGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-y-5 gap-x-14 ">
      <UVIndex value={4} />
      <WindStatus angle={225} />
    </div>
  );
};

export default InfoGrid;
