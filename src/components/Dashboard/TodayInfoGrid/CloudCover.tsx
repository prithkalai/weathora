import useDataStore from "../../../data/dataStore";

const CloudCover = () => {
  const cloudPercentage = useDataStore(
    (s) => s.weatherData.hourly.cloudcover[s.hourlyIndex]
  );

  return (
    <div className="flex flex-col w-full h-48 rounded-2xl bg-white pt-4 ">
      <div className=" font-quicksand text-black text-opacity-40 pl-6">
        Cloud Cover
      </div>

      <div className="flex flex-col justify-center items-center font-quicksand text-black">
        <div className="relative w-64 h-32">
          <svg className="absolute w-full h-full" viewBox="0 0 64 32">
            {/* Clipping path based on fillPercentage */}
            <clipPath id="clip">
              <rect
                x="0"
                y="0"
                width={`${(scale(cloudPercentage) / 100) * 64}`}
                height="30"
              />
            </clipPath>

            {/* Filled version of the cloud, using the clipping path */}
            <image
              href="/cloud_empty.svg"
              width="64"
              height="30"
              clipPath="url(#clip)"
            />

            {/* Empty version of the cloud */}
            <image href="/cloud_filled.svg" width="64" height="32" />
          </svg>
          <div className="absolute flex inset-0 justify-center items-center top-[120px] left-3">
            <span className=" text-3xl mr-[1px]">{cloudPercentage}</span>
            <span className="text-md">%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudCover;

function scale(
  value: number,
  oldMin: number = 0,
  oldMax: number = 100,
  newMin: number = 30,
  newMax: number = 70
): number {
  return ((value - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
}
