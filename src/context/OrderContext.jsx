import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (item) => {
    setOrderItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromOrder = (itemId) => {
    setOrderItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setOrderItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearOrder = () => {
    setOrderItems([]);
  };

  return (
    <OrderContext.Provider value={{ orderItems, addToOrder, removeFromOrder, clearOrder, decreaseQuantity, increaseQuantity }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  return useContext(OrderContext);
}
