/* import React, { useState } from "react";
import InputSearch from "../../inputs/InputSearch";
import EditButton from "../../buttons/EditButton";
import DeleteButton from "../../buttons/DeleteButton";

function ListOfMeal({  onEdit, onDelete, type }) {
    const items = [
        "ceviche",
        "lomo saltado",
        "Plato tallarines verdes",
        "arroz con pollo",
      ];
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredItems, setFilteredItems] = useState(items);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSearch = (searchTerm) => {
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
      <InputSearch onSearch={handleSearch} />

      <ul className="p-4">
        {filteredItems.map((item) => (
          <li
            key={item}
            className="flex justify-between items-center p-2 border-b"
          >
            <span>{item}</span>
            <div className="flex space-x-2">
              <button
                className="p-2"
                onClick={() => handleOpenModal(item)}
              >
                <EditButton item={item} />
              </button>
              <button
                className="p-2"
                onClick={() => onDelete(item)}
              >
                <DeleteButton />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">Edit {type}</h3>
            {/* Aquí podrías implementar un formulario para editar 
            <button
              className="mt-4 bg-gray-500 text-white py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListOfMeal; */




import React, { useState } from "react";
import InputSearch from "../../inputs/InputSearch";
import EditButton from "../../buttons/EditButton";
import DeleteButton from "../../buttons/DeleteButton";
import Create from "../../../../public/assets/Create-icon.svg"

function ListOfMeal({ meal, onEdit, onDelete, type }) {
    const meals = [
        "ceviche",
        "lomo saltado",
        "Plato tallarines verdes",
        "arroz con pollo",
      ];
  const [isModalOpen, setModalOpen] = useState(false);  // Controla si el modal está abierto
  const [selectedItem, setSelectedItem] = useState(null); // Controla el ítem seleccionado
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda

  const handleOpenModal = (meal) => {
    setSelectedItem(meal); // Establece el ítem seleccionado
    setModalOpen(true);    // Abre el modal
  };

  const handleCloseModal = () => {
    setModalOpen(false);   // Cierra el modal
  };

  const handleSelectMeal = (meal) => {
    setSelectedItem(meal); // Establece el ítem seleccionado desde InputSearch
    handleCloseModal();    // Cierra el modal después de la selección
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
              placeholder="Enter your text"
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
              <span>Agregar uno nuevo{meal}</span>
              <div className="flex space-x-2">
                <button className="p-2" onClick={() => handleOpenModal(meal)}>
                  <img
                  src={Create}
                  alt="Create"
                  className="h-[2.5rem] w-[2.5rem] cursor-pointer"
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
              className="flex justify-between items-center p-2 border-b"
            >
              <span>{meal}</span>
              <div className="flex space-x-2">
                <button className="p-2" onClick={() => handleOpenModal(meal)}>
                  <EditButton item={meal} />
                </button>
                <button className="p-2" onClick={() => handleOpenModal(meal)}>
                  <DeleteButton />
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No hay comidas disponibles</li>
        )}
      </ul>

      {/* Muestra el modal si isModalOpen es true */}
     
        <InputSearch
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSelectItem={handleSelectMeal}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
   
    </div>
    </>
  );
}

export default ListOfMeal;
//crear un buscar para meal y añadoir el boton agregar y ponerle el handleopenmodal / ver si inputserch mepuede servir para tenerlo visible cuando lo quiera 