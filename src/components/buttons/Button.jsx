const Button = ({ nameButton, onClick, icon, className, disabled }) => {
  return (
    <button
      className={`flex items-center rounded-md bg-gray-900 py-2 px-4 border text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none ${className}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img src={icon} className="h-[2.5rem] w-[2.5rem]" />}

      <span className="text-white">{nameButton}</span>
      
    </button>
  );
};

export default Button;
