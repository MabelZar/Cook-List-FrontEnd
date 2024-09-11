import React, { useState } from 'react';
import HeaderUser from "../components/header/HeaderUser";
import MealProgramBody from "../components/forms/list/MealProgramBody";
import Button from "../components/buttons/Button";
import ListCheckByProgram from "../components/forms/list/ListCheckByProgram";
import InputSeach from "../components/inputs/InputSearch";

const MealProgramPage = () => {
  
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="w-full h-auto">
        <HeaderUser className="mb-6" />
        <main className="w-full h-auto flex flex-col items-center">
          <MealProgramBody />
        </main>
      </div>
    </>
  );
};

export default MealProgramPage;