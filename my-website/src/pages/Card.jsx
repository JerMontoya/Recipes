import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Card = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    async function fetchMeal() {
      try {
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        console.log("Fetched meal data:", data);
        setMeal(data.meals ? data.meals[0] : null);
      } catch (err) {
        console.error("Error fetching meal:", err);
      }
    }
    fetchMeal();
  }, [id]);

  if (!meal) {
    return (
      <div>
        <Navbar />
        <p className="text-center mt-10 text-gray-600">Loading meal...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="rounded-lg w-full h-96 object-cover mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {meal.strMeal}
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Category:</strong>
          {meal.strCategory}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Area:</strong>
          {meal.strArea}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Instructions:</strong>
          {meal.strInstructions}
        </p>
        <a
          href={meal.strYouTube}
          target="blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default Card;
