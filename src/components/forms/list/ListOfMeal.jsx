import React, { useEffect, useState } from "react";
import InputSearch from "../../inputs/InputSearch";
import EditButton from "../../buttons/EditButton";
import Delete from "../../../../public/assets/Delete-icon.svg"
import Create from "../../../../public/assets/Create-icon.svg"
import ConfirmModal from "../../modal/ConfirmModal";
import FormModal from "../../modal/FormModal"; 
import { getMealByNameURL } from "../../../config/urls";

function ListOfMeal({ meal, onEdit, onDelete, type }) {
    //const meals = ["ceviche","lomo saltado","Plato tallarines verdes","arroz con pollo"];
    const [meals, setMeals] = useState([]); 
    const [isModalOpen, setModalOpen] = useState(false); 
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [isFormModalOpen, setFormModalOpen] = useState(false); 
  const [selectedItem, setSelectedItem] = useState(null); // Controla el ítem seleccionado
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
 
  useEffect(() => {
    const fetchMealsByName = async () => {
      if (searchTerm) { // Solo buscar si hay un término de búsqueda
        try {
          const response = await fetch(getMealByNameURL(searchTerm)); // Llama a la API con el nombre
          if (!response.ok) {
            throw new Error("Error en la solicitud");
          }
          const data = await response.json();
          setMeals(data); // Actualiza el estado con los datos de la API
        } catch (error) {
          console.error("Error al obtener las comidas:", error);
        }
      }
    };

    fetchMealsByName(); // Llama a la función cuando cambie el término de búsqueda
  }, [searchTerm]); // Dependencia en searchTerm, para ejecutar cada vez que se cambie
 
  
  
  
  
  
  
  const handleOpenModal = (meal) => {
     setSelectedItem(meal);
    setModalOpen(true);    
  };

  const handleCloseModal = () => {
    setModalOpen(false);  
  };

  const handleSelectMeal = (meal) => {
    setSelectedItem(meal);
    handleCloseModal();    
  };
  const handleDeleteClick = (meal) => {
    setSelectedItem(meal); // Establece el ítem que se quiere eliminar
    setConfirmModalOpen(true); // Abre el modal de confirmación
  };

  const handleConfirmDelete = () => {
    setConfirmModalOpen(false); 
 
  };

  const handleCancelDelete = () => {
    setConfirmModalOpen(false); // Cierra el modal de confirmación sin eliminar
  
  };
  const handleOpenFormModal = () => {
    setFormModalOpen(true);    // Abre el FormModal
  };

  const handleCloseFormModal = () => {
    setFormModalOpen(false);   // Cierra el FormModal
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={() => handleOpenModal(meal)} 
            />
            <button
              className="absolute right-1 top-1 rounded bg-gray-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg"
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
            <label 
              className="flex justify-between items-center p-2 border-b"
            >
              <span>Agregar un plato nuevo{meal}</span>
              <div className="flex space-x-2">
                <button className="select-none rounded-lg  py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                 onClick={handleOpenFormModal}
                 type="button"
                 data-dialog-target="sign-in-dialog">
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
        {meals.length > 0 ? (
          meals.map((meal, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border-b    lex items-center justify-between w-full p-3 py-1 pl-4 pr-1 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <span>{meal}</span>
              <div className="flex space-x-2">
                <button className="elect-none rounded-lg  py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
                onClick={() => handleOpenModal(meal)}>
                  <EditButton item={meal} />
                </button>
                <button className="elect-none rounded-lg  py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
                onClick={() => handleDeleteClick(meal)}>
                  <img
                  src={Delete}/>
                </button>
                
              </div>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No hay comidas disponibles</li>
        )}
      </ul>
      <ConfirmModal
          isOpen={isConfirmModalOpen}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
        <InputSearch
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSelectItem={handleSelectMeal}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
         <FormModal isOpen={isFormModalOpen} onClose={handleCloseFormModal}/>
   
    </div>
    </>
  );
}

export default ListOfMeal;
