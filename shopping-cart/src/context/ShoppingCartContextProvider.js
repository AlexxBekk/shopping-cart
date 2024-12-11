import React, { useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cartReducer";
import ShoppingCartContext from "./ShoppingCartContext";

export function ShoppingCartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <ShoppingCartContext.Provider value={{ cart: cart, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
