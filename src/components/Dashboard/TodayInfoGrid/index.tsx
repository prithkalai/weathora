import InfoCard from "./InfoCard";

const InfoGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-y-10 gap-x-16 ">
      <InfoCard title="UV Index" />
      <InfoCard title="Wind Status" />
      <InfoCard title="Sunrise & Sunset" />
      <InfoCard title="Humidity" />
      <InfoCard title="Visibility" />
      <InfoCard title="Air Quality" />
    </div>
  );
};

export default InfoGrid;
