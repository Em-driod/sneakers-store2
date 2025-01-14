import React from "react";  
import { motion } from "framer-motion";  
import { Link } from "react-router-dom";  
import { useCart } from "../CartContext"; // Import the cart context  

export default function TopNavBar() {  
  // Get the current cart item count from the CartContext  
  const { getItemCount } = useCart();  
  const cartItemCount = getItemCount(); // Retrieves the current cart item count  

  return (  
    <motion.nav  
      style={{  
        display: "flex",  
        alignItems: "center",  
        justifyContent: "space-between",  
        padding: "15px 30px",  
        backgroundColor: "#ffffff",  
        color: "#000000",  
        position: "fixed",  
        overflow: "hidden",  
        top: 0,  
        left: 0,  
        width: "100vw",  
        zIndex: 1000,  
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  
      }}  
      initial={{ y: -100 }}  
      animate={{ y: 0 }}  
      transition={{ duration: 0.5, ease: "easeOut" }}  
    >  
      {/* Logo Section */}  
      <motion.div  
        whileHover={{ scale: 1.1 }}  
        style={{  
          fontSize: "1.5rem",  
          fontWeight: "bold",  
          cursor: "pointer",  
          color: "#000000",  
        }}  
      >  
        SneakerHub  
      </motion.div>  

      {/* Menu Section */}  
      <motion.ul  
        style={{  
          display: "flex",  
          listStyle: "none",  
          gap: "20px",  
          margin: 0,  
        }}  
      >  
        {[  
          { name: "Home", link: "/" },  
          { name: "About", link: "/about" },  
          { name: "Contact", link: "/contact" },  
          { name: `Cart (${cartItemCount})`, link: "/cart" },  
        ].map((item, index) => (  
          <motion.li  
            key={index}  
            whileHover={{  
              scale: 1.1,  
              transition: { duration: 0.3 },  
            }}  
            style={{  
              fontSize: "1rem",  
              fontWeight: "500",  
              padding: "5px 15px",  
              borderRadius: "5px",  
              backgroundColor: "#d1d5db", // Light gray background  
              cursor: "pointer",  
              transition: "background-color 0.3s ease",  
            }}  
          >  
            <Link  
              to={item.link}  
              style={{  
                textDecoration: "none",  
                color: "#000000",  
              }}  
            >  
              {item.name}  
            </Link>  
          </motion.li>  
        ))}  
      </motion.ul>  

      {/* Call to Action */}  
      <motion.button  
        whileHover={{  
          scale: 1.1,  
          backgroundColor: "#333333",  
          transition: { duration: 0.3 },  
        }}  
        style={{  
          padding: "8px 16px",  
          backgroundColor: "#000000", // Black background  
          border: "none",  
          borderRadius: "4px",  
          color: "#ffffff", // White text  
          fontWeight: "bold",  
          fontSize: "0.9rem",  
          cursor: "pointer",  
          transition: "background-color 0.3s ease",  
        }}  
      >  
        <Link  
          to="/shop"  
          style={{  
            textDecoration: "none",  
            color: "inherit",  
          }}  
        >  
          Shop Now  
        </Link>  
      </motion.button>  
    </motion.nav>  
  );  
}  

