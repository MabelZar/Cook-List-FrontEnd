
import CommonInput from "../../inputs/CommonInput";
import SelectOption from "./SelectOption";

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
            //imgSrc={Glass}
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
          <SelectOption
            label="Medida"
            options={selectOptionsMedida}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </div>
    );
  };
 export default IngredientRow; 