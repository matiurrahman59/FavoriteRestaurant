import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../authentication/authenticationContext';

export const CartContext = createContext({
  addToCart: () => {},
  clearCart: () => {},
  cart: Array,
  restaurant: null,
});

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  const addToCart = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
    setRestaurant(null);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        clearCart,
        restaurant,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
