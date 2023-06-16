import { useState } from "react";

const FormInput = ({ label, inputProps }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="py-3">
      <input
        {...inputProps}
        placeholder={label}
        className="border-b-2 border-slate-950/50 w-full outline-none"
        onFocus={(e) => {
          setTimeout(() => {
            e.target.placeholder = "";
          }, 200);
          setClicked(true);
        }}
        onBlur={(e) => {
          setTimeout(() => {
            e.target.placeholder = label;
          }, 200);
          setClicked(false);
        }}
      />
      <label
        className={`text-md text-gray-400 relative transition-all ease-in  duration-300 ${
          clicked || inputProps.value.length
            ? "bottom-[3.25rem] opacity-1 text-sm"
            : "bottom-0 opacity-0"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
