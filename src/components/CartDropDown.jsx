import { useContext } from "react";

import Button from "./Button";
import CartItem from "./CartItem";

import { CartContext } from "../contexts/cartContext";
import { Link } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems, cartCount } = useContext(CartContext);

  return (
    <div className="absolute z-10 w-[20rem] h-[25rem] flex flex-col gap-5 items-center justify-between p-5 bg-white border-2 border-neutral-950 right-10 top-20">
      <div id="cartDropDown" className="overflow-y-auto h-full grid gap-5">
        {cartCount ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <h2 className="text-lg font-bold place-self-center">
            No items in cart
          </h2>
        )}
      </div>
      <Link to="/checkout">
        <Button buttonType="default">GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropDown;
