import Button from "../../buttons/Button";
function ListCheckByProgram({isOpen, onClose}) {
    if (!isOpen) return null;
   
  const items = [
    { name: "Arroz", quantity: 1, unit: "Kg" },
    { name: "Frijoles", quantity: 2, unit: "Kg" },
    { name: "Leche", quantity: 3, unit: "L" },
  ];
  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50   ">
      <div className="relative flex flex-col rounded-xl bg-white shadow-lg p-4">
        <nav className="flex min-w-[240px] flex-col gap-1 p-2 ">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
            >
              <label
                htmlFor={`check-${item.name}`}
                className="flex w-full cursor-pointer items-center px-3 py-2 "
              >
                <div className="flex w-full items-center justify-between">
                  <div className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all  rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                      id={`check-${item.name}`}
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="ml-2 text-slate-600 text-sm">{item.name}</span>
                  </div>
                  <div className="inline-flex items-center">
                    <span className="ml-2 text-slate-600 text-sm">{item.quantity}</span>
                    <span className="ml-2 text-slate-600 text-sm">{item.unit}</span>
                  </div>
                </div>
              </label>
            </div>
          ))}
          <Button
            nameButton="Compartir"
            onClick={onClose} //cambiar para whatsUp
        />
          <Button
            nameButton="Cerrar"
            onClick={onClose} 
        />
        </nav>
        </div>
      </div>
      </>
  );
}
export default ListCheckByProgram;
