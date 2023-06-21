import React from "react";
import Button from "./Button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="group w-full h-[35rem]">
      <img
        src={imageUrl}
        alt={name}
        className="object-cover w-full h-[90%] hover:opacity-75 transition-all"
      />
      <div className="flex justify-between p-3">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <div className="relative bottom-[25%] left-[25%] hidden group-hover:block">
        <Button buttonType="inverted">Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
