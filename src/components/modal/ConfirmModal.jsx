

function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  message
 
}) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose} // Cierra el modal si se hace clic fuera de él
      >
        <div
          className="bg-white p-6 rounded shadow-lg relative"
          onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer clic dentro del mismo
        >
          <h2 className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
            ¿Está seguro que desea eliminar este plato?
          </h2>
          <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
            <button
              className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={onConfirm}
            >
              Aceptar
            </button>
            <button
              className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={onClose}
            >
              Cancelar
            </button>
           
          </div>
        </div>
      </div>
    </>
  );
}
export default ConfirmModal;
