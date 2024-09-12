import React, { useEffect, useState } from "react";
import EditButton from "../../buttons/EditButton";
import Delete from "../../../../public/assets/Delete-icon.svg";
import Create from "../../../../public/assets/Create-icon.svg";
import ConfirmModal from "../../modal/ConfirmModal";
import FormModal from "../../modal/FormModal";
import { GET_ALL, getMealByNameURL } from "../../../config/urls";
import { apiRequest } from "../../../services/apiRequest";
import Edit from "../../../../public/assets/Edit-icon.svg";

function ListOfMeal({
  meal,
  onEdit,
  onDelete,
  handleSelectedMeal,
  id
}) { 
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredMeals, setFilteredMeals] = useState([]); 
  const [selectedMeal, setSelectedMeal] = useState(null); // Controla el ítem seleccionado
  const [modalState, setModalState] = useState({
    isFormModalOpen: false,
    isConfirmModalOpen: false,
    modalMode: "", // 'agregar' o 'editar'
  });
  const getAll = async () => {
    try {
      const response = await apiRequest(GET_ALL, "GET");
      setMeals(response);
      setFilteredMeals(response);
      console.info(response);
    } catch (error) {
      console.error("Error al obtener las comidas:", error);
    }
  };
  useEffect(() => {
    getAll();
  }, []);
//busqueda
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredMeals(meals);
    } else {
      const filtered = meals.filter((meal) =>
        meal.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMeals(filtered);
    }
  }, [searchTerm, meals]);

  // Abrir el modal para agregar o editar
const handleOpenFormModal = (mode, meal = null) => {
  setModalState({
    ...modalState,
    isFormModalOpen: true,
    modalMode: mode,
  });
  setSelectedMeal(meal);
};
 // Cerrar modal de formulario
 const handleCloseFormModal = () => {
  setModalState((prevState) => ({
    ...prevState,
    isFormModalOpen: false,
  }));
  setSelectedMeal(null);
};
// Manejar apertura del modal de confirmación
const handleDeleteClick = (meal) => {
  setSelectedMeal(meal); // Establecer comida a eliminar
  setModalState({ ...modalState, isConfirmModalOpen: true });
};
 // Confirmar eliminación
 const handleConfirmDelete = () => {
  // Aquí puedes llamar a tu API para eliminar el plato
  setModalState({ ...modalState, isConfirmModalOpen: false });
  // Actualizar lista después de la eliminación
};
// Cancelar eliminación
const handleCancelDelete = () => {
  setModalState({ ...modalState, isConfirmModalOpen: false });
};
  return (
    <>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <ul className="p-4">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
            <label className="block mb-2 text-sm text-slate-600">
              Buscar un plato:
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Busca un plato"
                // value={searchTerm}
                onChange={handleSearch}
                //onClick={() => handleOpenModal(meal)}
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
          </div>

          <label className="flex justify-between items-center p-2 border-b">
            <span>Agregar un plato nuevo{meal}</span>
            <div className="flex space-x-2">
              <button
                className="select-none rounded-lg  py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={() => handleOpenFormModal("agregar")}
                type="button"
                data-dialog-target="sign-in-dialog"
              >
                <img
                  src={Create}
                  alt="Create"
                  className="h-[2.5rem] w-[2.5rem] cursor-pointer"
                  data-dialog-target="sign-in-dialog"
                />
              </button>
            </div>
          </label>
        </ul>
        <ul className="p-4">
          <span>Lista de platos existentes:</span>
          {filteredMeals.length > 0 ? (
            filteredMeals.map((meal) => (
              <li
                key={meal.id}
                className="flex justify-between items-center p-2 border-b    flex items-center justify-between w-full p-3 py-1 pl-4 pr-1 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <span>{meal.name}</span>
                <div className="flex space-x-2">
                  <button className="relative h-10 w-10 select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30">
                    <img
                      src={Edit}
                      className="h-[2.5rem] w-[2.5rem] cursor-pointer"
                      title="Agrega o Edita"
                      onClick={() => handleOpenFormModal("editar", meal)}
                    />
                  </button>
                  <button className="relative h-10 w-10 select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30">
                    <img
                      src={Delete}
                      className="h-[2.5rem] w-[2.5rem] cursor-pointer"
                      title="Eliminar plato"
                      onClick={() => handleDeleteClick(meal)}
                    />
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No hay comidas disponibles</li>
          )}
        </ul>
        <ConfirmModal
          isOpen={modalState.isConfirmModalOpen}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete}
          message="¿Desea eliminar el plato?"
        />

        <FormModal 
        isOpen={modalState.isFormModalOpen} 
        onClose={handleCloseFormModal}
        modalMode={modalState.modalMode} 
        selectedMeal={selectedMeal} />
      </div>
    </>
  );
}

export default ListOfMeal;
