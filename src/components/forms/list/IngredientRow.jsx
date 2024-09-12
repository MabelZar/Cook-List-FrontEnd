
import CommonInput from "../../inputs/CommonInput";
import SelectOption from "./SelectOption";
import Delete from "../../../../public/assets/Delete-icon.svg"

const IngredientRow = ({ searchQuery, handleSearchChange, selectOptionsCantidad, selectOptionsMedida }) => {
    return (
      <div className="flex items-center justify-between space-x-4">
        <div className="relative flex-grow">
          <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Ingrediente
          </p>
          <CommonInput
            id="search"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
    
          />
        </div>
        <div className="relative flex-grow">
          <SelectOption
            label="Cantidad"
            options={selectOptionsCantidad}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="relative flex-grow">
        <button className="relative h-11 w-10 mt-5 select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30">
                    <img
                      src={Delete}
                      className="h-[2.5rem] w-[2.5rem] cursor-pointer"
                      title="Eliminar plato"
                  
                    />
                  </button>
        </div>
      </div>
    );
  };
 export default IngredientRow; 

   //  onClick={() => handleDeleteClick(meal)}
                    //  onClick={() => handleDeleteClick(meal)}