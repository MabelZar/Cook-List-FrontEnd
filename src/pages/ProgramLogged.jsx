import React from "react";
import HeaderUser from "../components/header/HeaderUser";
import ListDay from "../components/forms/list/ListDay";

export const ProgramLogged = () => {
    return(
        <div className="w-full h-auto">
            <HeaderUser className="mb-6"/>
            <main className="w-full h-auto flex justify-center items-center">
              <ListDay/>
            </main>
        </div>
    )
}