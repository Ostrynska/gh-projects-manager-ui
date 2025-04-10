import { MdChevronRight } from "react-icons/md";
import { toast } from "react-toastify";

import AutoCompleteInput from "./AutoCompleteInput";
import ButtonSearch from "../Buttons/ButtonSearch";

import "./SearchBar.css";

interface SearchBarProps {
  input: string;
  setInput: (value: string) => void;
  onAdd: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ input, setInput, onAdd }) => {
  const handleClick = () => {
    if (!input.includes("/") || input.split("/").length !== 2) {
      toast("Enter in format: owner/repo");
      return;
    }
    onAdd();
  };

  return (
    <div className="header-bar">
      <div className="breadcrumb">
        <span className="breadcrumb-inactive">Dashboard</span>
        <MdChevronRight />
        <span className="breadcrumb-active">Home</span>
      </div>

      <div className="search-container">
        <div className="search-wrapper">
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
            />
          </svg>
          <AutoCompleteInput
            className="search-input"
            placeholder="Facebook/React"
            value={input}
            onChange={setInput}
          />
        </div>
        <ButtonSearch handleClick={handleClick} />
      </div>
    </div>
  );
};

export default SearchBar;
