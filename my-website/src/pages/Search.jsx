import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import maglass from "../assets/maglass.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Skeleton from "../components/Skeleton";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search).get("q") || "";

  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(query);
  const [loading, setLoading] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    setSearchTerm(query);
  }, [query]);

  useEffect(() => {
    async function fetchRecipes() {
      if (!query) {
        setRecipes([]);
        return;
      }
      setLoading(true);

      try {
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        setTimeout(() => {
          setRecipes(data.meals ? data.meals.slice(0, 6) : []);
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error("Error fetching recipes:", err);

        setTimeout(() => {
          setRecipes([]);
          setLoading(false);
        }, 500);
      }
    }

    fetchRecipes();
  }, [query]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`?q=${searchTerm}`);
    }
  };

  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <Navbar />
          <div className="flex flex-col items-center">
            <h1 className="text-center leading-snug text-center text-6xl font-medium text-gray-800 my-3">
              Browse Recipes
            </h1>
            <div className="flex">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                className="text-3xl px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSearch}
                className="mx-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 text-white"
              >
                <img src={maglass} alt="" className="h-10 w-10 invert" />
              </button>
            </div>
          </div>
          <div className="flex justify-between mx-6 mt-6">
            <h2 className="text-2xl font-semibold mb-4 mx-10">
              Search Results:
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 mx-10">
            {recipes.length > 0 ? (
              recipes.map((meal) => (
                <div
                  onClick={() => navigate(`/meal/${meal.idMeal}`)}
                  key={meal.idMeal}
                  className="bg-white rounded-lg shadow p-4 flex flex-col items-center transition-transform duration-200 hover:scale-105 cursor-pointer"
                >
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="rounded-md mb-2 w-full h-48 object-cover"
                  />
                  <h3 className="text-lg font-bold text-gray-400">
                    {meal.strMeal}
                  </h3>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No Results Found</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
