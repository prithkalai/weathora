import { SunriseSunsetProps } from "../../../DataInterface";

const SunriseSunset = ({ sunriseTime, sunsetTime }: SunriseSunsetProps) => {
  return (
    <div className="flex flex-col gap-4 w-full h-48 rounded-2xl bg-white pt-4 pl-6">
      <div className=" font-quicksand text-black text-opacity-40 ">
        Sunrise & Sunset
      </div>
      <div className="flex flex-row items-center gap-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="50"
          height="50"
          viewBox="0 0 256 256"
          xmlSpace="preserve"
        >
          <g
            style={{
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "none",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
          >
            <circle
              cx="45"
              cy="45"
              r="45"
              style={{
                stroke: "none",
                strokeWidth: 1,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "rgb(254,192,6)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="matrix(1 0 0 1 0 0)"
            />
            <path
              d="M 67 55 c -0.512 0 -1.023 -0.195 -1.414 -0.586 L 45 33.829 L 24.414 54.414 c -0.78 0.781 -2.048 0.781 -2.828 0 c -0.781 -0.781 -0.781 -2.047 0 -2.828 l 22 -22 c 0.78 -0.781 2.047 -0.781 2.828 0 l 22 22 c 0.781 0.781 0.781 2.047 0 2.828 C 68.023 54.805 67.512 55 67 55 z"
              style={{
                stroke: "none",
                strokeWidth: 1,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "rgb(255,255,255)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="matrix(1 0 0 1 0 0)"
              strokeLinecap="round"
            />
          </g>
        </svg>
        <div className="font-quicksand text-black text-xl">
          {formatTime(sunriseTime)}
        </div>
      </div>

      <div className="flex flex-row items-center gap-6">
        <svg
          className="rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="50"
          height="50"
          viewBox="0 0 256 256"
          xmlSpace="preserve"
        >
          <g
            style={{
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "none",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
          >
            <circle
              cx="45"
              cy="45"
              r="45"
              style={{
                stroke: "none",
                strokeWidth: 1,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "rgb(254,192,6)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="matrix(1 0 0 1 0 0)"
            />
            <path
              d="M 67 55 c -0.512 0 -1.023 -0.195 -1.414 -0.586 L 45 33.829 L 24.414 54.414 c -0.78 0.781 -2.048 0.781 -2.828 0 c -0.781 -0.781 -0.781 -2.047 0 -2.828 l 22 -22 c 0.78 -0.781 2.047 -0.781 2.828 0 l 22 22 c 0.781 0.781 0.781 2.047 0 2.828 C 68.023 54.805 67.512 55 67 55 z"
              style={{
                stroke: "none",
                strokeWidth: 1,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "rgb(255,255,255)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="matrix(1 0 0 1 0 0)"
              strokeLinecap="round"
            />
          </g>
        </svg>
        <div className="font-quicksand text-black text-xl">
          {formatTime(sunsetTime)}
        </div>
      </div>
    </div>
  );
};

function formatTime(dateString: string): string {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = ("0" + date.getMinutes()).slice(-2); // Format to 2 digits
  const period = hours >= 12 ? "PM" : "AM";

  // Convert hour from 24 hour format to 12 hour format
  const hours12 = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;

  return `${hours12}:${minutes} ${period}`;
}

export default SunriseSunset;
