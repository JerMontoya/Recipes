import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import SkeletonCard from "../components/SkeletonCard";

const Card = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeal() {
      try {
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setTimeout(() => {
          setMeal(data.meals ? data.meals[0] : null);
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error("Error fetching meal:", err);
        setTimeout(() => setLoading(false), 500);
      }
    }
    fetchMeal();
  }, [id]);

  return (
    <div>
      {loading ? (
        <SkeletonCard />
      ) : (
        <>
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
              <strong>Category: </strong>
              {meal.strCategory}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Area: </strong>
              {meal.strArea}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Ingredients:</strong>
              <ul className="list-disc list-inside">
                {Array.from({ length: 20 }, (_, i) => i + 1) // [1,2, ..., 20]
                  .map((num) => {
                    const ingredient = meal[`strIngredient${num}`];
                    const measure = meal[`strMeasure${num}`];

                    if (
                      !ingredient ||
                      ingredient === "null" ||
                      ingredient.trim() === ""
                    )
                      return null;

                    return (
                      <li key={num}>
                        {measure && measure !== "null" ? measure + " " : ""}
                        {ingredient}
                      </li>
                    );
                  })}
              </ul>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Instructions: </strong>
              {meal.strInstructions}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
