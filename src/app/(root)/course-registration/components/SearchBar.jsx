import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="flex gap-5 bg-white px-5 py-3 rounded-md  mb-10">
      <Search className="" />
      <input
        className="focus:outline-none"
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBar;
