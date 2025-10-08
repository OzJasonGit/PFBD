"use client";
import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load cart from localStorage on mount
  const loadCart = useCallback(async () => {
    setIsLoading(true);
    try {
      if (typeof window !== 'undefined') {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        }
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && cartItems.length >= 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(i => (i.id || i._id) === (item.id || item._id));
      if (existingItem) {
        return prevCart.map(i => 
          (i.id || i._id) === (item.id || item._id) 
            ? { ...i, quantity: (i.quantity || 1) + 1 }
            : i
        );
      }
      return [...prevCart, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => prevCart.filter((item) => (item.id || item._id) !== itemId));
  };

  const updateQuantity = async (itemId, quantity) => {
    setCartItems((prevCart) => 
      prevCart.map(item => 
        (item.id || item._id) === itemId 
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cart');
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);

  return (
    <CartContext.Provider value={{ 
      cart: cartItems, // keep for backward compatibility
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      clearCart,
      loadCart,
      totalPrice,
      isLoading
    }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };

