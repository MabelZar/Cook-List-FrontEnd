import React, { useState } from "react";
import HeaderUser from "../components/header/HeaderUser";
import ListDay from "../components/forms/list/ListDay";
import Button from "../components/buttons/Button";
import ListCheckByProgram from "../components/forms/list/ListCheckByProgram";
import InputSeach from "../components/inputs/InputSearch";

export const ProgramLogged = () => {
    const [isModalOpen, setModalOpen] = useState(false); 
    const handleOpenModal = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };
    
    return(
        <div className="w-full h-auto">
            <HeaderUser className="mb-6"/>
            <main className="w-full h-auto flex flex-col items-center">
              <ListDay />
              <div className="mt-7">
                <Button 
                nameButton={"Obtener Lista"}
                onClick={handleOpenModal}/>
              
                        <ListCheckByProgram
                            isOpen={isModalOpen}
                            onClose={handleCloseModal}
                           //onClose={() => setModalOpen(false)} // Función para cerrar el modal
                        />
                   <InputSeach/>
            </div>
            </main>
        </div>
    )
}