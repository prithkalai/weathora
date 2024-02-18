import useDataStore from "../../../data/dataStore";

const DegreeSelector = () => {
  const { units, setUnits } = useDataStore((s) => ({
    units: s.units,
    setUnits: s.setUnits,
  }));

  return (
    <div className="flex space-x-2 font-quicksand text-lg font-bold">
      <button
        className={`py-2 px-3 rounded-full ${
          units === "C" ? " text-white bg-black" : " bg-gray-300 text-gray-700"
        } transition-all duration-200 `}
        onClick={() => setUnits("C")}
      >
        C°
      </button>
      <button
        className={`py-2 px-3 rounded-full ${
          units === "F" ? "bg-black text-white" : "bg-gray-300 text-gray-700"
        } transition-all duration-200 `}
        onClick={() => setUnits("F")}
      >
        F°
      </button>
    </div>
  );
};

export default DegreeSelector;
