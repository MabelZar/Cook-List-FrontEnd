function SelectOption({ label, options, onChange }) {
    
    return (
    <>
        <label className="block mb-1 text-sm text-slate-800">{label}</label>
        <div className="relative">
          <select
            className="w-[3.5rem]  h-10 bg-white text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md cursor-pointer"
            onChange={onChange}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
         
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
         
        </div>
        </>
    );
  }
export default SelectOption;
