import useDataStore from "../../../data/dataStore";

const Visibility = () => {
  const distance = useDataStore(
    (s) => s.weatherData.hourly.visibility[s.hourlyIndex]
  );
  return (
    <div className="flex flex-col w-full h-48 rounded-2xl bg-white pt-4 pl-6">
      <div className=" font-quicksand text-black text-opacity-40 mb-6 ">
        Visibility
      </div>
      <div className="flex justify-start items-end font-quicksand text-black">
        <div className="mr-12">
          <span className=" text-7xl mr-1">{distance / 1000}</span>
          <span className="text-xl">km</span>
        </div>
      </div>
    </div>
  );
};

export default Visibility;
