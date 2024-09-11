import { useState } from "react";
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

const FormModal = ({ url, method,isOpen, onClose, searchQuery, handleSearchChange, headerText, handleCloseModal, handleSelectItem, searchTerm, setSearchTerm }) => {
  
 const { refreshMeals } = useContext(MealContext); 
  const userId = localStorage.getItem('userId');
  const [isModalOpen, setModalOpen] = useState(false); 
    const [successMessage, setSuccessMessage] = useState(""); 
  

const onSubmit = async (data) => {
    const { meal, date,  } = data;
    
    const cleanedData = {
        title: meal.trim(),
        date: date.trim(), 
        user: {
            id: userId
        }
    };

    const token = localStorage.getItem('authToken')
    
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    try {
        const response = await apiRequest(url, method, cleanedData, headers);
        console.log("API Response:", response);
        const successMessage = method === 'POST' 
        ? "¡Nuevo plato creado con éxito!"
        : "¡PLato editado con éxito!";
        setSuccessMessage(successMessage);
        await refreshMeals();
        setModalOpen(true);
    } catch (error) {
        console.error("API Error:", error);
        alert(`Error: ${error.response?.data?.message || error.message}`);
    }
};
  
  
  if (!isOpen) return null;
  
    const selectOptionsCantidad = [
      { value: "one", label: "1" },
      { value: "two", label: "2" },
      { value: "three", label: "3" },
    ];
  
    const selectOptionsMedida = [
      { value: "litros", label: "Lt." },
      { value: "kilos", label: "Kg." },
      { value: "unidades", label: "Un." },
    ];
  
    return (
      <>
        <div className="fz-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 gap-4 p-6">
          <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg flex flex-col gap-4 p-6">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Agregar
            </h4>
            <Input label="Ingresa el nombre de tu plato" />
  
           
            <div className="relative w-full min-w-[200px]">
              <IngredientRow
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
                selectOptionsCantidad={selectOptionsCantidad}
                selectOptionsMedida={selectOptionsMedida}
              />
  
              <IngredientRow
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
                selectOptionsCantidad={selectOptionsCantidad}
                selectOptionsMedida={selectOptionsMedida}
              />
              <IngredientRow
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
                selectOptionsCantidad={selectOptionsCantidad}
                selectOptionsMedida={selectOptionsMedida}
              />
  
            </div>
  
            <div className="flex justify-center w-full gap-4">
              <Button nameButton="Guardar" onClick={onClose} />
              <Button nameButton="Cancelar" onClick={onClose} />
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default FormModal;