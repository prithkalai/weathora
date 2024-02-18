import useDataStore from "../../data/dataStore";

const LocationBanner = () => {
  const address = useDataStore((s) => s.address);
  return (
    <div className="relative w-3/4 h-24 ml-8 rounded-2xl">
      <img
        src="location.jpg"
        className=" w-full h-full object-cover object-center overflow-hidden rounded-2xl"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-center text-3xl font-bold bg-opacity-50 p-4 rounded font-rajdhani">
          {address.city}, {address.country}
        </p>
      </div>
    </div>
  );
};

export default LocationBanner;
