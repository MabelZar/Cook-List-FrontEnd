import HeaderUser from "../components/header/HeaderUser";
import Button from "../components/buttons/Button";
import InputSeach from "../components/inputs/InputSearch";
import ListOfMeal from "../components/forms/list/ListOfMeal";
import { useState } from "react";

function Meal (){
    const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");

  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
    setSearchOpen(false); // Cerrar modal al seleccionar un item
  };
    return(
        <>
        <div className="w-full h-auto">
            <HeaderUser className="mb-6"/>
            <main className="w-full h-auto flex flex-col items-center">
         
              <div className="mt-7">
              
              <ListOfMeal/>
                        
                   
            </div>
            
            </main>
        </div>
        </>
    )
}
export default Meal;

//me quede en agregar un buscador para la pagina meal 