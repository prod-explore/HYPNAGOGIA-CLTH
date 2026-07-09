'use client';

import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const key = `${action.item.id}-${action.item.size}-${action.item.color}`;
      const existing = state.items.find(i => i.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.key === key ? { ...i, quantity: i.quantity + (action.item.quantity || 1) } : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, key, quantity: action.item.quantity || 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.key !== action.key) };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(i =>
          i.key === action.key ? { ...i, quantity: Math.max(1, action.quantity) } : i
        ),
      };
    case 'CLEAR':
      return { ...state, items: [] };
    case 'LOAD':
      return { ...state, items: action.items };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('pulsr-cart');
      if (saved) {
        dispatch({ type: 'LOAD', items: JSON.parse(saved) });
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('pulsr-cart', JSON.stringify(state.items));
    } catch (e) {
      // ignore
    }
  }, [state.items]);

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

export function getCartTotal(items, currency = 'PLN') {
  return items.reduce((sum, item) => sum + (item.price[currency] || item.price.PLN) * item.quantity, 0);
}

export function getCartCount(items) {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}
