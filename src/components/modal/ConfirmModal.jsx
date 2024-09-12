

function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  message,
   showOnlyAccept = false,
    
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
            {showOnlyAccept ? "¡Operación exitosa!" : message}
          </h2>

          {showOnlyAccept ? (
            <div className="flex items-center justify-center mt-4">
              <button
                className="px-6 py-3 font-sans text-xs font-bold text-white bg-green-500 rounded-lg uppercase transition-all hover:bg-green-600 active:bg-green-700"
                onClick={onClose}
              >
                Aceptar
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-end p-4 space-x-2">
              {!showOnlyAccept && (
                <button
                  className="px-6 py-3 text-xs font-bold uppercase text-gray-500 transition-all bg-gray-100 rounded-lg hover:bg-gray-200 active:bg-gray-300"
                  onClick={onClose}
                >
                  Cancelar
                </button>
              )}
              <button
                className="px-6 py-3 text-xs font-bold text-white uppercase bg-red-500 rounded-lg hover:bg-red-600 active:bg-red-700 transition-all"
                onClick={onConfirm}
              >
                Aceptar
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default ConfirmModal;