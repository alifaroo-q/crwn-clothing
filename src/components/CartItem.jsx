const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="flex w-full gap-x-3 items-center">
      <img className="w-[40%]" src={imageUrl} alt={name} />
      <div className="w-[60%]">
        <span className="block">{name}</span>
        <span className="block">{quantity} X ${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
