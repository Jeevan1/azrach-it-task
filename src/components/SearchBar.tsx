import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";

const SearchBar = ({
  name,
  value,
  placeholder,
  onChange,
}: {
  name: string;
  value?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative flex w-sm max-w-full space-x-2 bg-white rounded-lg px-3 py-2">
      <label htmlFor="search" className="">
        <SearchIcon className="text-gray-400" />
      </label>
      <InputBase
        id="search"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="text-sm w-full font-medium placeholder:text-gray-400"
      />
    </div>
  );
};

export default SearchBar;
