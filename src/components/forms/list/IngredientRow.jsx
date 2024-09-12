import CommonInput from "../../inputs/CommonInput";
import SelectOption from "./SelectOption";
import Delete from "../../../../public/assets/Delete-icon.svg";

const IngredientRow = ({
  searchQuery,
  handleSearchChange,
  selectOptionsCantidad,
  selectOptionsMedida,
  onRemove, // Nueva prop para manejar la eliminación de la fila
  rowId // Prop para identificar la fila
}) => {
  return (
    <div className="flex items-center justify-between space-x-4 mt-3">
      <div className="w-full max-w-sm min-w-[200px]">
        <label className="block mb-1 text-sm text-slate-800">
          Ingrediente
        </label>
        <div className="relative">
          <select className="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)} // Pasamos el valor al padre
          >
             <option value="">Selecciona un ingrediente</option>
            <option value="arroz">arroz</option>
            <option value="aceite">aceite</option>
            <option value="pollo">pollo</option>
            <option value="lima">lima</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.2"
            stroke="currentColor"
            className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </div>
      </div>

      <div className="relative flex-grow">
      </div>
      <div className="relative flex-grow">
        <button className="relative h-11 w-10 mt-5 select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
          onClick={() => onRemove(rowId)} // Llamada a la función para eliminar la fila
        >
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
