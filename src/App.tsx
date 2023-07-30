import DashBoard from "./components/Dashboard";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="mx-auto max-w-[1650px] h-screen sm:w-full">
      <div className="flex flex-row">
        <SideBar />
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
