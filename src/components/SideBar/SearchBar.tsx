import { FormEvent, useRef, useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";

interface Props {
  handleOnClick: () => void;
  handleOnSubmit: (address: string) => void;
}

const SearchBar = ({ handleOnClick, handleOnSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputData, setInputData] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (inputRef.current && inputData != "") {
      // TODO: Perform Input validation here
      inputRef.current.value = "";
      handleOnSubmit(inputData);
      setInputData("");
    }
  };

  return (
    <div className="flex flex-row gap-3 items-center justify-start text-black ml-8 mb-2">
      <div className="flex flex-row gap-3 items-center">
        <IoSearchCircle className="text-2xl" />
        <form onSubmit={(event) => onSubmit(event)}>
          <input
            type="text"
            placeholder="Search for places..."
            className="font-rajdhani w-52"
            ref={inputRef}
            onChange={(event) => setInputData(event.target.value)}
          />
        </form>
      </div>
      <div className="flex w-6 h-6 items-center justify-center bg-[#f6f6f8] rounded-full text-lg">
        <button onClick={handleOnClick}>
          <MdOutlineMyLocation />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
