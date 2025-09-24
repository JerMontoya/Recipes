import axios from "axios"
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import cooking from "../assets/cooking.svg";
import maglass from "../assets/maglass.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim() !== "") {
            navigate(`/search?q=${query}`);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }
    
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="leading-snug text-center text-6xl font-medium text-gray-800 my-6">
          Toss the binder and get online with <br/><span className="text-blue-800 font-semibold">Recipe Finder</span>
        </h1>
        <h2 className="text-center text-4xl text-gray-800 mb-12">
          The fastest and easiest way to find the recipe you want now
        </h2>
        <div className="flex">
          <input
            type="text"
            placeholder="Search recipes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="text-3xl px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={handleSearch} className="mx-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 text-white">
            <img src={maglass} alt="" className="h-10 w-10 invert" />
          </button>
        </div>

        <img src={cooking} alt="" className="mt-10 h-1/2 w-1/2" />
      </div>
    </div>
  );
};

export default Home;
