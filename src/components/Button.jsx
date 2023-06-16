const buttonTypes = {
  google: "bg-blue-500 text-white border-[1px] hover:bg-blue-600",
  default:
    "bg-black text-white border-0 hover:bg-white hover:text-black hover:border-2 hover:border-neutral-950",
  inverted:
    "bg-white text-black border-[1px] border-neutral-950 hover:bg-black hover:text-white hover:border-0",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${buttonTypes[buttonType]} min-w-[165px] w-auto h-12 uppercase tracking-wider px-9 text-lg cursor-pointer flex justify-center items-center font-bold transition-all duration-300 ease-linear`}
    >
      {children}
    </button>
  );
};

export default Button;
