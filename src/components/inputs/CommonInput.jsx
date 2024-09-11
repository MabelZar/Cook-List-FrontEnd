import { forwardRef } from "react";

const CommonInput=forwardRef(({

    onClick,
    label,
    labelClassName,
    id,
    placeholder,
    type = 'text', 
    divInputClassName,
    inputClassName,
    imgSrc,
    imgAlt,
    imgClassName,
    error,
    rows,
    onInput, 
    ...rest
}, ref) => {
    return (
        <div className={`w-[18.75rem] flex flex-col ${divInputClassName}`}>
            <label
                htmlFor={id}
                className={`block  text-sm text-slate-600 ${labelClassName}`}
            >
                {label}
            </label>
            <div className={`rounded-[1.25rem] w-full bg-[color:var(--col-yellow-light)] jaldi-regular flex items-center`}>
                {type === 'textarea' ? (
                    <textarea
                        id={id}
                        className={`custom-input rounded-[1.25rem] w-full h-[23.25rem] text-[color:var(--col-blue)] bg-[color:var(--col-yellow-light)] text-sm p-[1.063rem] shadow-inset-custom border-0 focus:border-2 focus:border-[color:var(--col-green)] outline-none ${inputClassName}`}
                        placeholder={placeholder}
                        rows={rows}
                        ref={ref}
                        {...rest}
                    />
                ) : (
                    <input
                        id={id}
                        className={`  input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />${inputClassName}`}
                        placeholder={placeholder}
                        type={type}
                        ref={ref}
                        onInput={onInput} 
                        {...rest}
                    />
                )}
                {imgSrc && (
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        className={imgClassName}
                        onClick={onClick}
                        style={{ pointerEvents: 'none' }}
                    />
                )}
            </div>

            {error && (
                <p className="text-[color:var(--col-red)] jaldi-regular text-sm mb-[-1.25rem]">{error}</p>
            )}
        </div>
    );
});
export default CommonInput;