
import EditButton from "../../buttons/EditButton";
import Create from "../../../../public/assets/Create-icon.svg"
import { useNavigate } from "react-router-dom";


function ListDay ({meal}){
    const navigate = useNavigate();
    const goToCreate = () => navigate('/create');
return(



        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border ">
            <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((day) => (
                    <div key={day} role="button"
                        className="flex items-center justify-between w-full p-3 py-1 pl-4 pr-1 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        {day}
                        <div className="flex space-x-2">
                            <button className="relative h-10 w-10 select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30">
                                <EditButton mealId={meal} />
                            </button>
                            <button className="relative h-10 w-10 select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30">
                                <img src={Create} alt="Create" onClick={goToCreate} className="h-[2.5rem] w-[2.5rem] cursor-pointer" />
                            </button>
                        </div>
                    </div>
                ))}
            </nav>
        </div>
    );
}
export default ListDay;