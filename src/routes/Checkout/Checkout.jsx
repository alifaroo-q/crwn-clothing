import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import CheckoutItem from "../../components/CheckoutItem";
const Checkout = () => {
  const { cartItems, totalPrice, cartCount } = useContext(CartContext);

  return (
    <div className="flex flex-col w-[60%] mx-auto gap-3">
      {cartCount ? (
        <>
          <div className="flex flex-col w-full gap-2">
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <div className="self-end p-3">
            <h2 className="text-2xl font-bold">TOTAL: {totalPrice}$</h2>
          </div>
        </>
      ) : (
        <div className="h-[30rem] flex justify-center items-center">
          <h2 className="text-3xl font-bold">No items in cart</h2>
        </div>
      )}
    </div>
  );
};

export default Checkout;
