import React from "react";
import logo from "../../public/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 text-gray-800">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="logo" className="h-16 w-16" />
        <p className="text-xl font-bold text-blue-800">Recipe Finder</p>
      </div>
      <div className="space-x-4">
        {location.pathname !== "/search" && (
          <Link to="/search" className="hover:text-blue-500">
            Search Recipes
          </Link>
        )}
        {location.pathname !== "/" && (
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
        )}
        <button className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 hover:cursor-not-allowed">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
