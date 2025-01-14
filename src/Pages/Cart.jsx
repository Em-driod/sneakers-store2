import React from 'react';  
import { useCart } from '../CartContext'; // Import the context  
import { motion } from 'framer-motion';  

const Cart = () => {  
    const { cartItems, removeFromCart } = useCart(); // Get cart items and the remove function  
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2); // Calculate total price  

    // Inline styles  
    const styles = {  
        container: {  
            maxWidth: '600px',  
            margin: '20px auto', 
            marginTop: "6rem", 
            padding: '20px',  
            border: '1px solid #ddd',  
            borderRadius: '8px',  
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  
            backgroundColor: '#f9f9f9',  
        },  
        list: {  
            listStyleType: 'none',  
            padding: 0,  
        },  
        item: {  
            display: 'flex',  
            justifyContent: 'space-between',  
            alignItems: 'center',  
            padding: '10px',  
            borderBottom: '1px solid #ddd',  
        },  
        removeButton: {  
            padding: '5px 10px',  
            backgroundColor: '#ff3d00',  
            color: 'white',  
            border: 'none',  
            borderRadius: '4px',  
            cursor: 'pointer',  
            transition: 'background-color 0.3s ease',  
        },  
        total: {  
            marginTop: '20px',  
            fontSize: '1.2rem',  
        },  
    };  

    return (  
        <div style={styles.container}>  
            <h1>Shopping Cart</h1>  
            {cartItems.length === 0 ? (  
                <p>Your cart is empty</p>  
            ) : (  
                <>  
                    <ul style={styles.list}>  
                        {cartItems.map((item) => (  // item.id is used for removal  
                            <motion.li  
                                key={item.id} // Unique key for each item  
                                style={styles.item}  
                                whileHover={{ scale: 1.02 }}  
                                transition={{ duration: 0.2 }}  
                            >  
                                <span>{item.name} - {item.price}</span>  
                                <button  
                                    style={styles.removeButton}  
                                    onClick={() => removeFromCart(item.id)} // Call to removeFromCart with the item's id   
                                >  
                                    Remove  
                                </button>  
                            </motion.li>  
                        ))}  
                    </ul>  
                    <h3 style={styles.total}>Total Price: ${totalPrice}</h3>  
                </>  
            )}  
        </div>  
    );  
};  

export default Cart;