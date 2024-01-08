import React, { createContext, useReducer } from 'react';

// Initial state of the cart
const initialState = {
  items: [], // this will hold the cart items
  total: 0, // total cost of items in the cart
};

// Create a context
export const CartContext = createContext(initialState);

// Reducer to manipulate the cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Implement logic to add item
      return { ...state, items: [...state.items, action.payload], total: state.total + action.payload.price };
    case 'REMOVE_ITEM':
      // Implement logic to remove item
      return { ...state, items: state.items.filter(item => item.id !== action.payload.id), total: state.total - action.payload.price };
    // Add cases for other actions like increase/decrease quantity
    default:
      return state;
  }
};

// Create a provider for components to consume and subscribe to changes
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
