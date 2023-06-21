import { useContext } from "react";

import Button from "./Button";
import CartItem from "./CartItem";

import { CartContext } from "../contexts/cartContext";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="absolute z-10 w-[20rem] h-[25rem] flex flex-col gap-5 items-center justify-between p-5 bg-white border-2 border-neutral-950 right-10 top-20">
      <div id="cartDropDown" className="overflow-y-auto flex flex-col gap-5">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <span className="">
        <Button buttonType="default">GO TO CHECKOUT</Button>
      </span>
    </div>
  );
};

export default CartDropDown;
