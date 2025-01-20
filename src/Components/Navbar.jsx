import React, { useState } from "react";  
import { motion } from "framer-motion";  
import { Link } from "react-router-dom";  
import { useCart } from "../CartContext";  
import { FaBars, FaAngleDown, FaAngleRight } from "react-icons/fa";  

export default function TopNavBar() {  
  const { getItemCount } = useCart();  
  const cartItemCount = getItemCount();  
  const [menuOpen, setMenuOpen] = useState(false);  

  // Function to handle menu item click  
  const handleMenuItemClick = () => {  
    setMenuOpen(false); // Close the menu when an item is clicked  
  };  

  return (  
    <>  
      <motion.nav  
        className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white shadow-md z-50"  
        initial={{ y: -100 }}  
        animate={{ y: 0 }}  
        transition={{ duration: 0.5, ease: "easeOut" }}  
      >  
        {/* Logo Section */}  
        <motion.div  
          whileHover={{ scale: 1.1 }}  
          className="text-xl font-bold cursor-pointer text-black"  
        >  
          SneakerHub  
        </motion.div>  

        {/* Menu Icon for Small Screens */}  
        <div  
          onClick={() => setMenuOpen(!menuOpen)}  
          className="text-xl cursor-pointer block md:hidden"  
        >  
          <FaBars />  
        </div>  

        {/* Menu Items for Normal Screen (Center Aligned) */}  
        <motion.ul className="hidden md:flex md:gap-6 list-none items-center justify-center flex-grow">  
          {[   
            { name: "Home", link: "/" },  
            { name: "About", link: "/about" },  
            { name: "Contact", link: "/contact" },  
            { name: `Cart (${cartItemCount})`, link: "/cart" },  
          ].map((item, index) => (  
            <motion.li  
              key={index}  
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}  
              className="text-base font-medium px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"  
            >  
              <Link to={item.link} className="text-black no-underline" onClick={handleMenuItemClick}>  
                {item.name}  
              </Link>  
            </motion.li>  
          ))}  

          {/* Shop Now Button (with margin to the right) */}  
          <motion.button  
            whileHover={{  
              scale: 1.1,  
              backgroundColor: "#333333",  
              transition: { duration: 0.3 },  
            }}  
            className="px-4 py-2 bg-black text-white font-bold rounded-md text-sm hover:bg-gray-800 ml-6"  
          >  
            <Link to="/shop" className="no-underline text-white" onClick={handleMenuItemClick}>  
              Shop Now  
            </Link>  
          </motion.button>  
        </motion.ul>  

        {/* Menu for Small Screens */}  
        <motion.ul  
          className={`flex flex-col md:flex-row md:gap-6 list-none items-center absolute md:static top-16 md:top-auto right-6 md:right-auto bg-white shadow-md md:shadow-none rounded-md md:rounded-none p-4 md:p-0 space-y-4 md:space-y-0 ${  
            menuOpen ? "block" : "hidden"  
          }`}  
        >  
          {[   
            { name: "Home", link: "/" },  
            { name: "About", link: "/about" },  
            { name: "Contact", link: "/contact" },  
            { name: `Cart (${cartItemCount})`, link: "/cart" },  
          ].map((item, index) => (  
            <motion.li  
              key={index}  
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}  
              className="text-base font-medium px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"  
            >  
              <Link to={item.link} className="text-black no-underline" onClick={handleMenuItemClick}>  
                {item.name}  
              </Link>  
            </motion.li>  
          ))}  

          {/* Shop Now Button (with margin to the right) */}  
          <motion.button  
            whileHover={{  
              scale: 1.1,  
              backgroundColor: "#333333",  
              transition: { duration: 0.3 },  
            }}  
            className="px-8 py-2 bg-black text-white font-bold rounded-md text-sm hover:bg-gray-800 ml-6"  
          >  
            <Link to="/shop" className="no-underline text-white" onClick={handleMenuItemClick}>  
              Shop Now  
            </Link>  
          </motion.button>  

          {/* Arrow Icon for Menu Toggle on Mobile Screen */}  
          {menuOpen && (  
            <motion.div  
              className="absolute top-16 right-6 text-2xl text-gray-700"  
              whileHover={{ scale: 1.2 }}  
            >  
              <FaAngleRight />  
            </motion.div>  
          )}  
        </motion.ul>  
      </motion.nav>  
    </>  
  );  
}  
