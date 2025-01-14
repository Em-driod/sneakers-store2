// src/Pages/Shop.jsx  
import React, { useState } from "react";  
import { motion } from "framer-motion";  
import { useCart } from '../CartContext'; // Adjusted import path  

const Shop = () => {  
    const { addToCart, getItemCount } = useCart();  
    const [notification, setNotification] = useState(false);  
    const cartItemCount = getItemCount(); // Get the current cart item count  

    const styles = {  
        container: {  
            padding: "6rem",  
            maxWidth: "1200px",  
            margin: "0 auto",  
        },  
        hero: {  
            textAlign: "center",  
            marginBottom: "2rem",  
        },  
        heroHeading: {  
            fontSize: "2rem",  
            fontWeight: "bold",  
            color: "#333",  
        },  
        filterBar: {  
            display: "flex",  
            justifyContent: "center",  
            marginBottom: "1.5rem",  
        },  
        filterButton: {  
            padding: "0.5rem 1rem",  
            margin: "0 0.5rem",  
            border: "none",  
            borderRadius: "4px",  
            backgroundColor: "#f0f0f0",  
            cursor: "pointer",  
        },  
        grid: {  
            display: "grid",  
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",  
            gap: "1rem",  
        },  
        card: {  
            border: "1px solid #ddd",  
            borderRadius: "8px",  
            padding: "1rem",  
            textAlign: "center",  
            transition: "transform 0.2s",  
        },  
        image: {  
            width: "100%",  
            height: "auto",  
            borderRadius: "4px",  
        },  
        content: {  
            padding: "0.5rem 0",  
        },  
        title: {  
            fontSize: "1.2rem",  
            fontWeight: "bold",  
            color: "#333",  
        },  
        price: {  
            fontSize: "1rem",  
            color: "#555",  
            margin: "0.5rem 0",  
        },  
        button: {  
            padding: "0.5rem 1rem",  
            borderRadius: "4px",  
            backgroundColor: "#007bff",  
            color: "#fff",  
            border: "none",  
            cursor: "pointer",  
            transition: "background-color 0.3s ease",  
        },  
        notification: {  
            position: "fixed",  
            top: "20px",  
            right: "20px",  
            backgroundColor: "#28a745",  
            color: "#fff",  
            padding: "10px 20px",  
            borderRadius: "5px",  
            opacity: 0.9,  
            transition: "opacity 0.5s ease",  
            zIndex: 1000,  
        },  
    };  

    const sneakers = [  
        { id: 1, name: "Air Jordan 1", price: "$120", image: "https://via.placeholder.com/250" },  
        { id: 2, name: "Nike Air Max", price: "$140", image: "https://via.placeholder.com/250" },  
        { id: 3, name: "Adidas Yeezy", price: "$220", image: "https://via.placeholder.com/250" },  
        { id: 4, name: "Puma Classic", price: "$80", image: "https://via.placeholder.com/250" },  
        { id: 5, name: "New Balance 550", price: "$100", image: "https://via.placeholder.com/250" },  
        { id: 6, name: "Converse Chuck", price: "$60", image: "https://via.placeholder.com/250" },  
    ];  

    const handleAddToCart = (sneaker) => {  
        addToCart(sneaker); // Add sneaker to cart  
        setNotification(true); // Show notification  

        // Hide notification after 3 seconds  
        setTimeout(() => {  
            setNotification(false);  
        }, 3000);  
    };  

    return (  
        <div style={styles.container}>  
            {notification && (  
                <div style={styles.notification}>  
                    Item added to cart! ({cartItemCount})  
                </div>  
            )}  

            <motion.div  
                style={styles.hero}  
                initial={{ opacity: 0, y: -50 }}  
                animate={{ opacity: 1, y: 0 }}  
                transition={{ duration: 0.8 }}  
            >  
                <h1 style={styles.heroHeading}>Shop the Latest Sneakers</h1>  
                <p>Find the perfect pair for every occasion.</p>  
            </motion.div>  

            <div style={styles.filterBar}>  
                {["All", "Men's Sneakers", "Women's Sneakers", "Kids"].map((filter) => (  
                    <motion.button  
                        key={filter}  
                        style={styles.filterButton}  
                        whileHover={{ backgroundColor: "#007bff", color: "#fff" }}  
                    >  
                        {filter}  
                    </motion.button>  
                ))}  
            </div>  

            <div style={styles.grid}>  
                {sneakers.map((sneaker) => (  
                    <motion.div  
                        key={sneaker.id}  
                        style={styles.card}  
                        whileHover={{ scale: 1.05 }}  
                    >  
                        <img src={sneaker.image} alt={sneaker.name} style={styles.image} />  
                        <div style={styles.content}>  
                            <h2 style={styles.title}>{sneaker.name}</h2>  
                            <p style={styles.price}>{sneaker.price}</p>  
                            <motion.button  
                                style={styles.button}  
                                whileHover={{ backgroundColor: "#0056b3" }}  
                                onClick={() => handleAddToCart(sneaker)} // Use the new handler  
                            >  
                                Add to Cart  
                            </motion.button>  
                        </div>  
                    </motion.div>  
                ))}  
            </div>  
        </div>  
    );  
};  

export default Shop;