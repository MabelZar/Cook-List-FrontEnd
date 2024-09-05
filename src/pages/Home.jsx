import { MealContext } from "../context/MealContext";
import HeaderUser from "../components/header/HeaderUser";
import { useContext, useState } from "react";

import { AuthContext } from "../auth/AuthWrapper";
import MealCardUser from "../components/card/MealCardUser"
import Pagination from "../components/buttons/PaginationButton";

const Home=()=>{
  const { filteredMeal} = useContext(MealContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const { user } = useContext(AuthContext)

  const currentDestinations = filteredMeal.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
  );
    return(
      <div className="w-full h-auto">
      <HeaderUser />
      <div className="w-full flex flex-col justify-center">
          <div className="mx-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentDestinations.map((destination) => (
                  <MealCardUser
                      key={destination.id}
                      {...sessionStorage.setItem("destinationId", destination.id)}
                      destination={destination}
                      currentUser={user}
                      
                  />
              ))}
          </div>
          <Pagination
                    currentPage={currentPage}
                    totalItems={filteredMeal.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                />
      </div>
  </div>
    )
}
export default Home;