import React, { useState } from "react";  
import { motion } from "framer-motion";  
import { useCart } from "../CartContext";  

const Shop = () => {  
    const { addToCart, getItemCount } = useCart();  
    const [notification, setNotification] = useState(false);  
    const [filter, setFilter] = useState("All");  
    const cartItemCount = getItemCount();  

    const sneakers = [  
        { id: 1, name: "Air Jordan 1", price: "$120", category: "Men", image: "/airforce.png" },  
        { id: 6, name: "Converse Chuck", price: "$60", category: "Women", image: "/imani-bahati-LxVxPA1LOVM-unsplash.jpg" },  
        { id: 3, name: "Adidas Yeezy", price: "$220", category: "Men", image: "/pair-trainers.jpg" },  
        { id: 4, name: "Puma Classic", price: "$80", category: "Kids", image: "/shoes (1).jpg" },  
        { id: 5, name: "New Balance 550", price: "$100", category: "Women", image: "/close-up-futuristic-sneakers-urban-setting.jpg" },  
        { id: 2, name: "Nike Air Max", price: "$140", category: "Men", image: "/nike welk.png" },   
        { id: 7, name: "Nike Air Max", price: "$140", category: "Kid", image: "/domino-studio-164_6wVEHfI-unsplash.jpg" },  
        { id: 8, name: "Nike Air Max", price: "$140", category: "Kid", image: "/fitvilla.png" },   
    ];  

    const handleAddToCart = (sneaker) => {  
        addToCart(sneaker);  
        setNotification(true);  

        setTimeout(() => {  
            setNotification(false);  
        }, 3000);  
    };  

    const filteredSneakers =  
        filter === "All" ? sneakers : sneakers.filter((sneaker) => sneaker.category === filter);  

    return (  
        <div className="sm:p-8 max-w-5xl mx-auto bg-white text-black">  
            {notification && (  
                <div className="fixed top-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg z-50">  
                    Item added to cart! ({cartItemCount})  
                </div>  
            )}  

            <motion.div  
                className="text-center mb-8"  
                initial={{ opacity: 0, y: -50 }}  
                animate={{ opacity: 1, y: 0 }}  
                transition={{ duration: 0.8 }}  
            >  
                <h1 className="text-3xl font-bold">Shop the Latest Sneakers</h1>  
                <p className="mt-2">Find the perfect pair for every occasion.</p>  
            </motion.div>  

            <div className="flex justify-center mb-6 space-x-4">  
                {["All", "Men", "Women", "Kids"].map((category) => (  
                    <motion.button  
                        key={category}  
                        className={`py-2 px-4 rounded-lg transition ${  
                            filter === category  
                                ? "bg-blue-500 text-white"  
                                : "bg-gray-700 text-white hover:bg-blue-500"  
                        }`}  
                        onClick={() => setFilter(category)}  
                        whileHover={{ scale: 1.05 }}  
                    >  
                        {category}  
                    </motion.button>  
                ))}  
            </div>  

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">  
                {filteredSneakers.map((sneaker) => (  
                    <motion.div  
                        key={sneaker.id}  
                        className="flex flex-col border border-gray-200 rounded-lg p-4 text-center shadow-lg transition hover:shadow-xl"  
                        whileHover={{ scale: 1.05 }}  
                    >  
                        <img  
                            src={sneaker.image}  
                            alt={sneaker.name}  
                            className="w-full h-auto rounded-md mb-4"  
                        />  
                        <div className="flex-grow">  
                            <h2 className="text-lg font-bold">{sneaker.name}</h2>  
                            <p className="mt-2">{sneaker.price}</p>  
                        </div>  
                        <motion.button  
                            className="mt-4 py-2 px-4 bg-black text-white rounded-lg hover:bg-blue-700 transition"  
                            whileHover={{ scale: 1.1 }}  
                            onClick={() => handleAddToCart(sneaker)}  
                        >  
                            Add to Cart  
                        </motion.button>  
                    </motion.div>  
                ))}  
            </div>  
        </div>  
    );  
};  

export default Shop;
