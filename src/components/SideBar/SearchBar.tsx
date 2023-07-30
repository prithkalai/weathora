import { IoSearchCircle } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="flex flex-row gap-3 items-center justify-start text-black mt-10 ml-8 mb-5">
      <div className="flex flex-row gap-3 items-center">
        <IoSearchCircle className="text-2xl" />
        <form>
          <input
            type="text"
            placeholder="Search for places..."
            className="font-rajdhani w-52"
          />
        </form>
      </div>
      <div className="flex w-6 h-6 items-center justify-center bg-[#f6f6f8] rounded-full text-lg">
        <button>
          <MdOutlineMyLocation />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
