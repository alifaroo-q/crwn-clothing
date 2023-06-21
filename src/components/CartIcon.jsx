import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

const CartIcon = () => {
  const { setIsCartOpen } = useContext(CartContext);

  const toggleCartIcon = () => {
    setIsCartOpen((isOpen) => !isOpen);
  };

  return (
    <div
      onClick={toggleCartIcon}
      className="flex h-[2rem] align-bottom justify-center items-center relative cursor-pointer"
    >
      <ShoppingIcon className="h-[1.5rem]" />
      <span
        style={{ userSelect: "none" }}
        className="absolute text-sm font-bold bottom-1"
      >
        0
      </span>
    </div>
  );
};

export default CartIcon;
