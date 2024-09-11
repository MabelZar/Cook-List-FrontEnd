
import ButtonSample from "./ButtonSample";

const AcceptButton = ({ onClick, type = "submit" }) => {
    return (
        <ButtonSample
            content="Aceptar"
            bgColor="flex items-center rounded-md bg-gray-900 py-2 px-4 border text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none"
            ariaLabel="botón para aceptar la acción"
            onClick={onClick}  
            type={type}  
        />
    );
};

export default AcceptButton;
