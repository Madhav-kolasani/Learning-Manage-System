import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");

  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate("/course-list/" + input);
  };

  return (
    <div className="w-full flex justify-center animate-fade-in">
      <form
        onSubmit={onSearchHandler}
        className="w-full max-w-2xl flex items-center bg-white border border-gray-300 rounded-full shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
      >
        {/* Search Icon */}
        <div className="flex items-center justify-center px-4">
          <img
            src={assets.search_icon}
            alt="search_icon"
            className="w-6 h-6 opacity-70 hover:opacity-100 hover:scale-125 transition-all duration-300"
          />
        </div>

        {/* Input */}
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Search for courses"
          className="flex-grow h-14 px-2 text-gray-700 text-lg outline-none hover:text-blue-600 focus:text-blue-600 transition-colors duration-300"
        />

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-8 h-14 rounded-r-full"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
