function InputSeach({
  isOpen,
  onClose,
  onSelectItem,
  searchTerm = "",
  setSearchTerm,
}) {
  const items = [
    "ceviche",
    "lomo saltado",
    "Plato tallarines verdes",
    "arroz con pollo",
  ];
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectItem = (item) => {
    onSelectItem(item);
    onClose();
  };
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
          <label className="block mb-2 text-sm text-slate-600">
            Escoge un plato:
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter your text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="absolute right-1 top-1 rounded bg-gray-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <ul className="mb-4">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer p-2 border-b border-slate-200 hover:bg-slate-100"
                  onClick={() => handleSelectItem(item)}
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="text-slate-500 p-2">
                No se encontraron resultados
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
export default InputSeach;
