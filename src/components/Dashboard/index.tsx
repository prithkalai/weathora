import NavBar from "./NavBar";
import InfoGrid from "./TodayInfoGrid";
import WeatherGrid from "./WeatherGrid";

const DashBoard = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-neutral-100 pt-8 pl-12 pr-10">
      <NavBar />
      <WeatherGrid />
      <div className="h-fit font-quicksand mb-9">
        <span className=" text-black text-2xl ">Today's Highlights</span>
      </div>
      <InfoGrid />
    </div>
  );
};

export default DashBoard;
