import { createContext, useState } from "react";

// create the context
export const CartContext = createContext();

// create the provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // check if the product is already in the cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart); // structuredClone hace una copia profunda
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    // if the product is not in the cart
    setCart((prevStat) => [
      ...prevStat,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
