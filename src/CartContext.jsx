// src/CartContext.js  
import React, { createContext, useContext, useState } from 'react';  

const CartContext = createContext();  

export const CartProvider = ({ children }) => {  
    const [cartItems, setCartItems] = useState([]);  

    const addToCart = (item) => {  
        setCartItems((prevItems) => [...prevItems, item]);  
    };  

    const getItemCount = () => {  
        return cartItems.length;  
    };  

    return (  
        <CartContext.Provider value={{ addToCart, cartItems, getItemCount }}>  
            {children}  
        </CartContext.Provider>  
    );  
};  

export const useCart = () => {  
    return useContext(CartContext);  
};