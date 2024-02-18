import useDataStore from "../../../data/dataStore";

const DurationSelector = () => {
  const { duration, setDuration } = useDataStore((s) => ({
    duration: s.duration,
    setDuration: s.setDuration,
  }));

  return (
    <div className="flex space-x-4 font-quicksand text-xl">
      <button
        className={`py-2 px-4 rounded font-semibold ${
          duration === "Today"
            ? " text-white bg-black underline"
            : " bg-gray-300 text-gray-700"
        } transition-all duration-200 `}
        onClick={() => setDuration("Today")}
      >
        Today
      </button>
      <button
        className={`py-2 px-4 rounded ${
          duration === "Week"
            ? "bg-black text-white underline"
            : "bg-gray-300 text-gray-700"
        } transition-all duration-200 `}
        onClick={() => setDuration("Week")}
      >
        Week
      </button>
    </div>
  );
};

export default DurationSelector;
