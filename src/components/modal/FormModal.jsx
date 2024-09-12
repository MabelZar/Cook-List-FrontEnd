import { useEffect, useState } from "react";
import Input from "../../components/inputs/Input";
import Button from "../buttons/Button";
import InputSeach from "../inputs/InputSearch";
import CommonInput from "../inputs/CommonInput";
import Glass from "../../../public/assets/Glass-icon.svg";
import SelectOption from "../forms/list/SelectOption";
import IngredientRow from "../../components/forms/list/IngredientRow";
import { MealContext } from "../../context/MealContext";
import { apiRequest } from "../../services/apiRequest";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MEASU_INGR_GET_ALL, MEAL_CREATE_UPDATE } from "../../config/urls";
import Delete from "../../../public/assets/Delete-icon.svg";

const FormModal = ({ isOpen, onClose, modalMode }) => {
  const headerText = modalMode === "editar" ? "Editar Plato" : "Agregar Plato";
  const [ingredientRows, setIngredientRows] = useState([{}]);
  const [measurementIngredients, setMeasurementIngredients] = useState([]);
  const [mealName, setMealName] = useState("");

  const addIngredientRow = () => {
    setIngredientRows([...ingredientRows, {}]);
  };

  const removeIngredientRow = (index) => {
    const ingredientRowsCopy = [...ingredientRows];
    ingredientRowsCopy.splice(index, 1);
    setIngredientRows(ingredientRowsCopy);
  };

  const setMeaIngToRow = (meaIngId, index) => {
    const ingredientRowsCopy = [...ingredientRows];
    ingredientRowsCopy[index].measuredIngredientId = Number(meaIngId);
    setIngredientRows(ingredientRowsCopy);

    console.info(ingredientRows);
  };

  const setQuantityToRow = (quantity, index) => {
    const ingredientRowsCopy = [...ingredientRows];
    ingredientRowsCopy[index].quantity = Number(quantity);
    setIngredientRows(ingredientRowsCopy);

    console.info(ingredientRows);
  };

  const getAll = async () => {
    try {
      const response = await apiRequest(MEASU_INGR_GET_ALL);
      console.info(response);
      setMeasurementIngredients(response);
    } catch (error) {
      console.error("Error al obtener los ingredientes:", error);
    }
  };

  const saveMeal = async () => {
    try {
      const requestData = {
        name: mealName,
        mealMeasuredIngredientDtos: ingredientRows,
      };
      resetData();
      onClose();
      await apiRequest(MEAL_CREATE_UPDATE, "POST", requestData);
    } catch (error) {
      console.error("Error al grabar:", error);
    }
  };

  const onInternalClose = () => {
    resetData();
    onClose();
  }

  const resetData = () => {
    setIngredientRows([{}]);
    setMealName("");
  };

  useEffect(() => {
    getAll();
  }, []);

  if (!isOpen) return null;

  return (
    isOpen && (
      <div className="fz-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 gap-4 p-6">
        <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg flex flex-col gap-4 p-6">
          <div className="flex justify-between items-center">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {headerText}
            </h4>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={onInternalClose}
            >
              X
            </button>
          </div>
          <div className="w-full max-w-sm min-w-[200px]">
            <input
              className="w-full bg-transparent placeholder:text-green-400 text-green-700 text-sm border border-green-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-300 shadow-sm focus:shadow"
              placeholder="Ingrese nombre"
              onChange={(e) => setMealName(e.target.value)}
            />
          </div>

          {ingredientRows.length > 0 ? (
            ingredientRows.map((row, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <div className="w-full max-w-xs">
                  <select
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => setMeaIngToRow(e.target.value, index)}
                  >
                    <option>Selecciona un ingrediente</option>
                    {measurementIngredients.map((meaIng, meaIngIndex) => (
                      <option value={meaIng.id} key={meaIngIndex}>
                        {meaIng.ingredient.name} -{" "}
                        {meaIng.measurementUnit.symbol}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-28">
                  <input
                    type="number"
                    placeholder="Cant."
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => setQuantityToRow(e.target.value, index)}
                  />
                </div>

                <button
                  onClick={() => removeIngredientRow(index)}
                  className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                >
                  <img
                    src={Delete}
                    alt="Eliminar ingrediente"
                    className="h-5 w-5"
                  />
                </button>
              </div>
            ))
          ) : (
            <p>No hay ingredientes añadidos.</p>
          )}
          <button
            className="mt-1 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => addIngredientRow()}
          >
            + Añadir Ingrediente
          </button>

          <button
            className="mt-1 px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => saveMeal()}
          >
            Guardar
          </button>
        </div>
      </div>
    )
  );
};
export default FormModal;
