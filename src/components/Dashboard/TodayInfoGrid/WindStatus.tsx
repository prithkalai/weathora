interface Props {
  angle: number;
}

const WindStatus = ({ angle }: Props) => {
  return (
    <div className="flex flex-col w-full h-48 rounded-2xl bg-white pt-4 pl-6">
      <div className=" font-quicksand text-black text-opacity-40 mb-6 ">
        Wind Status
      </div>
      <div className="flex justify-start items-end font-quicksand text-black">
        <div className="mr-12">
          <span className=" text-7xl mr-1">7.7</span>
          <span className="text-xl">km/h</span>
        </div>

        <Compass angle={angle} />
      </div>
    </div>
  );
};

export default WindStatus;

const Compass = ({ angle }: Props) => {
  const arrowStyle = {
    transform: `rotate(${angle - 90}deg)`,
  };

  return (
    <div className="flex justify-center items-center relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="50"
        height="60"
        fill="green"
        style={arrowStyle}
      >
        <path d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm0,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30Z" />
        <path d="M26.71,15.29l-7-7L18.29,9.71,23.59,15H5v2H23.59l-5.29,5.29,1.41,1.41,7-7A1,1,0,0,0,26.71,15.29Z" />
      </svg>
    </div>
  );
};
