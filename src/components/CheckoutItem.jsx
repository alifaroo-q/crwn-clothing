import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { CartContext } from "../contexts/cartContext";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity, id } = cartItem;

  const {
    removeItemFromCart,
    increaseItemQuantityInCart,
    decreaseItemQuantityInCart,
  } = useContext(CartContext);

  const removeFromCart = () => {
    removeItemFromCart(id);
  };

  const increaseItemQuantity = () => {
    increaseItemQuantityInCart(id);
  };

  const decreaseItemQuantity = () => {
    decreaseItemQuantityInCart(id);
  };

  return (
    <div className="flex h-full border-b-2 border-neutral-200/50 py-3 items-center justify-between">
      <img
        className="h-[15rem] w-[12rem] object-cover"
        src={imageUrl}
        alt={name}
      />
      <h2 className="text-lg">{name}</h2>
      <div className="flex items-center gap-3">
        <FaAngleLeft
          className="cursor-pointer"
          size="1.25rem"
          onClick={decreaseItemQuantity}
        />
        <span className="text-lg">{quantity}</span>
        <FaAngleRight
          className="cursor-pointer"
          size="1.25rem"
          onClick={increaseItemQuantity}
        />
      </div>
      <h3>{price}</h3>
      <span onClick={removeFromCart}>
        <AiOutlineClose className="cursor-pointer" size="1.5rem" />
      </span>
    </div>
  );
};

export default CheckoutItem;
