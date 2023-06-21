import Button from "./Button";

const CartDropDown = () => {
  return (
    <div className="absolute z-10 w-[15rem] h-[21rem] grid p-5 bg-white border-2 border-neutral-950 right-10 top-20">
      <div className="overflow-y-auto py-3 m-2">
        <li>fdfsd</li>
        <li>fdfsd</li>
        <li>fdfsd</li>
        <li>fdfsd</li>
        <li>fdfsd</li>
        <li>fdfsd</li>
        <li>fdfsd</li>
        <li>fdfsd</li>
        <li>fdfsd</li>
        <li>fdfsd</li>
        <li>fdfsd</li>
        <li>fdfsd</li>
        <li>fdfsd</li>
        <li>fdfsd</li>
        <li>fdfsd</li>
        <li>fdfsd</li>
      </div>
      <span className="place-self-end">
        <Button buttonType="default">GO TO CHECKOUT</Button>
      </span>
    </div>
  );
};

export default CartDropDown;
