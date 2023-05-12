import { createContext, useReducer } from "react";

// create the context
export const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const updateLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "ADD_TO_CART": {
      const { id } = actionPayload;
      // check if the product is already in the cart
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state); // structuredClone creates a deep copy
        newState[productInCartIndex].quantity += 1;

        updateLocalStorage(newState);
        return newState;
      }

      // if the product is not in the cart
      const newState = [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1,
        },
      ];
      updateLocalStorage(newState);
      return newState;
    }
    case "REMOVE_ONE_FROM_CART": {
      const { id } = actionPayload;
      // check if the product is already in the cart
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state); // structuredClone creates a deep copy
        if (newState[productInCartIndex].quantity > 1) {
          newState[productInCartIndex].quantity -= 1;
          updateLocalStorage(newState);
          return newState;
        } else {
          const newState = state.filter((item) => item.id !== id);
          updateLocalStorage(newState);
          return newState;
        }
      }
    }
    case "REMOVE_FROM_CART": {
      const { id } = actionPayload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }
    case "CLEAR_CART": {
      updateLocalStorage([]);
      return [];
    }
  }
  return state;
};

// create the provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const removeOne = (product) =>
    dispatch({ type: "REMOVE_ONE_FROM_CART", payload: product });

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeOne, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
