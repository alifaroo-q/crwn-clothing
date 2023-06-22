import { createContext, useState, useEffect } from "react";

const addCardItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => {
    return cartItem.id !== productToRemove;
  });
};

const increaseItemQuantity = (cartItems, productToIncrease) => {
  return cartItems.map((cartItem) => {
    return cartItem.id === productToIncrease
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem;
  });
};

const decreaseItemQuantity = (cartItems, productToDecrease) => {
  return cartItems.map((cartItem) => {
    if (cartItem.id === productToDecrease) {
      return cartItem.quantity === 1
        ? cartItem
        : { ...cartItem, quantity: cartItem.quantity - 1 };
    }
    return cartItem;
  });
};

export const CartContext = createContext({
  addItemToCart: () => {},
  setIsCartOpen: () => {},
  removeItemFromCart: () => {},
  increaseItemQuantityInCart: () => {},
  decreaseItemQuantityInCart: () => {},
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems((prevCart) => addCardItem(prevCart, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems((prevCart) => removeCartItem(prevCart, productToRemove));
  };

  const increaseItemQuantityInCart = (productToIncrease) => {
    setCartItems((prevCart) =>
      increaseItemQuantity(prevCart, productToIncrease)
    );
  };

  const decreaseItemQuantityInCart = (productToDecrease) => {
    setCartItems((prevCart) =>
      decreaseItemQuantity(prevCart, productToDecrease)
    );
  };

  const value = {
    addItemToCart,
    removeItemFromCart,
    setIsCartOpen,
    increaseItemQuantityInCart,
    decreaseItemQuantityInCart,
    isCartOpen,
    cartItems,
    cartCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
