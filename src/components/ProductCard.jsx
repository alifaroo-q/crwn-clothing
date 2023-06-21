import Button from "./Button";

import { CartContext } from "../contexts/cartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="group w-full h-[35rem]">
      <img
        src={imageUrl}
        alt={name}
        className="object-cover w-full h-[90%] hover:opacity-75 transition-all"
      />
      <div className="flex justify-between p-3">
        <span className="text-lg font-bold">{name}</span>
        <span className="text-md font-medium">{price}</span>
      </div>
      <div className="relative bottom-[25%] left-[25%] hidden group-hover:block">
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
