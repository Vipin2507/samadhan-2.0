import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    // In a real app, you would sync this with the backend
    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
        alert(`${product.name} added to cart!`);
    };

    const value = { cart, addToCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
