import { useState, useEffect } from "react";
import WeekPicker from "./weekPicker/WeekPicker";
import Edit from "../../../../public/assets/Edit-icon.svg";
import Delete from "../../../../public/assets/Delete-icon.svg";
import InputSeach from "../../inputs/InputSearch";
import Button from "../../buttons/Button";
import { apiRequest } from "../../../services/apiRequest";
import {
  CALCULATE_INGREDIENTS_BY_MEALS,
  CREATE_UPDATE_MEAL_BY_DAY,
  DELETE_MEAL_BY_DAY,
} from "../../../config/urls";
import ConfirmModal from "../../modal/ConfirmModal"
import ListCheckByProgram from "./ListCheckByProgram";
import { Navigate, useNavigate } from "react-router-dom";

function MealProgramBody(method) {
  const [mealProgrammingWeek, setMealProgrammingWeek] = useState({});
  const [ingredients, setIngredients] = useState([]); // Estado para los ingredientes
  const [isIngredientsModalOpen, setIngredientsModalOpen] = useState(false); // Estado para el modal

  const [isSearchMealModalOpen, setSearchMealModalOpen] = useState(false);
  const [selectedDayKey, setSelectedDayKey] = useState("");
  const [isValidSaveWeekProg, setValidSaveWeekProg] = useState(false);
  const [isValidSeeIngredients, setValidSeeIngredients] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); 
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const dayKeysList = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const dayNameByKey = {
    MON: "Lunes",
    TUE: "Martes",
    WED: "Miércoles",
    THU: "Jueves",
    FRI: "Viernes",
    SAT: "Sábado",
    SUN: "Domingo",
  };

  const handleSelectedMeal = (dayKey, meal) => {
    let dayProgramming = mealProgrammingWeek[dayKey];

    if (!dayProgramming) {
      dayProgramming = {};
    }

    dayProgramming.meal = meal;

    addOrUpdateDay(dayKey, dayProgramming);

    setSearchMealModalOpen(false);
  };

  const handleSelectedDays = (days) => {
    dayKeysList.map((dayKey, index) => {
      let dayProgramming = mealProgrammingWeek[dayKey];

      if (!dayProgramming) {
        dayProgramming = {};
      }

      dayProgramming.programming = days ? days[index] : null;
      addOrUpdateDay(dayKey, dayProgramming);
    });
  };

  const addOrUpdateDay = (dayKey, dayProgramming) => {
    setMealProgrammingWeek((prevState) => ({
      ...prevState,
      [dayKey]: dayProgramming,
    }));
  };

  const openSearchMealModal = (dayKey) => {
    setSelectedDayKey(dayKey);
    setSearchMealModalOpen(true);
  };
//guardar programacion semanal
  const handleSaveProgrammingWeek = async () => {
    const transformedData = Object.keys(mealProgrammingWeek)
      .map((dayKey) => {
        const { meal, programming } = mealProgrammingWeek[dayKey];

        // Verifica si hay una comida seleccionada
        if (programming) {
          return {
            programming: programming,
            meal: meal ? { id: meal.id } : null,
          };
        }

        return null;
      })
      .filter(Boolean);

    try {
      const response = await apiRequest(
        CREATE_UPDATE_MEAL_BY_DAY,
        "POST",
        transformedData
      );
      const successMessage = method === 'POST' 
      ? "¡Programa guardado con éxito!"
      : "¡Plato editado con éxito!";
      setSuccessMessage(successMessage);
      console.log("Datos guardados exitosamente:", response.data);
      setModalOpen(true);
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };

  //obtener ingredientes
  const handleShowIngredients = async () => {
    const mealIds = Object.keys(mealProgrammingWeek)
      .map((dayKey) => {
        const { meal } = mealProgrammingWeek[dayKey];

        return meal ? meal.id : null;
      })
      .filter((item) => item);
    console.info(mealIds);
    try {
      const response = await apiRequest(
        CALCULATE_INGREDIENTS_BY_MEALS,
        "POST",
        mealIds
      );
      console.log("Mostrando ingredientes exitosamente:", response);
      setIngredients(response); 
      setIngredientsModalOpen(true); 
    } catch (error) {
      console.error("Error al mostrar los datos:", error);
    }
  };

  //delete
  const handleDelete = (dayKey) => {
    let dayProgramming = mealProgrammingWeek[dayKey];

    if (!dayProgramming) {
      dayProgramming = {};
    }

    dayProgramming.meal = null;

    addOrUpdateDay(dayKey, dayProgramming);
  };

  const validateMealProgrammingWeek = () => {
    let isValidSave = false;
    let isValidSee = false;

    if (mealProgrammingWeek) {
      Object.keys(mealProgrammingWeek).map((dayKey) => {
        const { meal, programming } = mealProgrammingWeek[dayKey];
        if (meal && programming) {
          isValidSave = true;
          return;
        }
      });
      Object.keys(mealProgrammingWeek).map((dayKey) => {
        const { meal } = mealProgrammingWeek[dayKey];
        if (meal) {
          isValidSee = true;
          return;
        }
      });
    }

    setValidSaveWeekProg(isValidSave);
    setValidSeeIngredients(isValidSee);
  };

  useEffect(() => {
    validateMealProgrammingWeek();
  }, [mealProgrammingWeek]);

  const handleConfirm = () => {
    setModalOpen(false);  
    navigate("/program");
};

  return (
    <>
      <WeekPicker onWeekSelected={handleSelectedDays} />
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border mt-4">
        <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700 ">
          {dayKeysList.map((dayKey) => (
            <div
              key={dayKey}
              role="button"
              className="flex items-center justify-between w-full p-3 py-1 pl-4 pr-1 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <div>
                <p>{dayNameByKey[dayKey]}</p>
              </div>
              <div>
                <b>
                  <p>
                    {mealProgrammingWeek[dayKey] &&
                    mealProgrammingWeek[dayKey].meal
                      ? mealProgrammingWeek[dayKey].meal.name
                      : ""}
                  </p>
                </b>
              </div>
              <div className="flex space-x-2">
                <button className="relative h-10 w-10 select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30">
                  <img
                    src={Edit}
                    className="h-[2.5rem] w-[2.5rem] cursor-pointer"
                    title="Agrega o Edita"
                    onClick={() => openSearchMealModal(dayKey)}
                  />
                </button>
                <button className="relative h-10 w-10 select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30">
                  <img
                    src={Delete}
                    className="h-[2.5rem] w-[2.5rem] cursor-pointer"
                    title="Eliminar plato"
                    onClick={() => handleDelete(dayKey)}
                  />
                </button>
              </div>
            </div>
          ))}
        </nav>
        {isSearchMealModalOpen && (
          <InputSeach
            isOpen={isSearchMealModalOpen}
            dayKey={selectedDayKey}
            handleSelectedMeal={handleSelectedMeal}
            onClose={() => setSearchMealModalOpen(false)}
          />
        )}
      </div>

      <div className="flex items-center gap-x-1 mt-4 ">
        <Button
          nameButton={"Guardar Programación"}
          onClick={handleSaveProgrammingWeek}
          disabled={!isValidSaveWeekProg}
        />
        <Button
          nameButton={"Ver Ingredientes"}
          onClick={handleShowIngredients}
          disabled={!isValidSeeIngredients}
        />
        <ListCheckByProgram
          isOpen={isIngredientsModalOpen}
          onClose={() => setIngredientsModalOpen(false)}
          items={ingredients} 
        />
        <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        message={successMessage}
        showOnlyAccept={true} 
     
        />
      </div>
    </>
  );
}

export default MealProgramBody;
