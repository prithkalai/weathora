import { SurfacePressureProps } from "../../../DataInterface";
import { customRound } from "../../../HelperFunctions";

const SurfacePressure = ({ surfacePressure }: SurfacePressureProps) => {
  return (
    <div className="flex flex-col w-full h-48 rounded-2xl bg-white pt-4 pl-6">
      <div className=" font-quicksand text-black text-opacity-40 mb-6 ">
        Surface Pressure
      </div>
      <div className="flex justify-start items-end font-quicksand text-black">
        <div className="mr-12">
          <span className=" text-7xl mr-1">{customRound(surfacePressure)}</span>
          <span className="text-xl">hPa</span>
        </div>
      </div>
    </div>
  );
};

export default SurfacePressure;
