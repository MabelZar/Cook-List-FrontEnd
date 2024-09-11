import { useRef, useState } from "react";
import { getMealByNameURL } from "../../config/urls";
import { apiRequest } from "../../services/apiRequest";

function InputSeach({ isOpen, dayKey, handleSelectedMeal, onClose }) {
  const [meals, setMeals] = useState([]);
 
  const setSearchTerm = async (searchName) => {
    if (searchName && searchName.length >= 2) {
      try {
        const response = await apiRequest(getMealByNameURL(searchName));

        setMeals(response);
      } catch (error) {
        console.error("Error al obtener las comidas:", error);
      }
    }
  };
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
          <div className="flex justify-between items-center mb-4">
            <label className="text-sm text-slate-600">
              Escoge un plato:
            </label>
            {onClose && (
              <button
                className=" rounded bg-gray-800 p-1.5 w-8 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={() => onClose()}
              >
              X</button>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              className="w-full  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter your text.."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="absolute right-1 top-1 rounded bg-gray-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <ul className="mb-4">
            {meals.length > 0 ? (
              meals.map((meal) => (
                <li
                  key={meal.id}
                  className="cursor-pointer p-2 border-b border-slate-200 hover:bg-slate-100"
                  onClick={() => handleSelectedMeal(dayKey, meal)}
                >
                  {meal.name}
                </li>
              ))
            ) : (
              <li />
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default InputSeach;
