import WhatsAppShareButton from "../../buttons/WhatsAppShareButton";
function ListCheckByProgram({ isOpen, onClose, items = [] }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50   ">
        <div className="relative flex flex-col rounded-xl bg-white shadow-lg p-4">
          <nav className="flex min-w-[240px] flex-col gap-1 p-2 ">
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm text-slate-600">Lista de Compras</label>
              {onClose && (
                <button
                  className=" rounded bg-gray-800 p-1.5 w-8 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  onClick={() => onClose()}
                >
                  X
                </button>
              )}
            </div>

            {items && items.length > 0 ? (
              items.map((item, index) => (
                <div
                  key={index}
                  className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                >
                  <label
                    htmlFor={`check-${item.ingredientName}`}
                    className="flex w-full cursor-pointer items-center px-3 py-2 "
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="peer h-5 w-5 cursor-pointer transition-all  rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                          id={`check-${item.ingredientName}`}
                        />
                        <span className="ml-2 text-slate-600 text-sm">
                          {item.ingredientName}
                        </span>
                      </div>
                      <div className="inline-flex items-center">
                        <span className="ml-2 text-slate-600 text-sm">
                          {item.quantity}
                        </span>
                        <span className="ml-2 text-slate-600 text-sm">
                          {item.measurementUnitSymbol}
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              ))
            ) : (
              <p>No hay ingredientes disponibles.</p> 
            )}
            <div className="flex justify-center  w-full gap-4">
              <WhatsAppShareButton
              items={items}
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
export default ListCheckByProgram;
