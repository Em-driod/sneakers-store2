import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Cartitem.css"; // We'll still need this for framer-motion's animation styles.

const Cartitem = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      items: [
        { src: "public/Screenshot 2025-01-12 074638.png", details: "Stylish Men's Sneakers", price: "$120.00" },
        { src: "public/pexels-chuck-3261069.jpg", details: "Classic Leather Shoes", price: "$200.00" },
      ],
    },
    {
      id: 2,
      items: [
        { src: "public/pexels-frank-k-895836-1863357.jpg", details: "Casual Loafers", price: "$80.00" },
        { src: "public/pexels-mnzoutfits-1598505.jpg", details: "Sporty Running Shoes", price: "$150.00" },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Ethos</h2>

      <div className="flex justify-center gap-6 relative">
        {/* First card slides down */}
        <motion.div
          className="bg-black text-white p-10 rounded-2xl shadow-xl w-full max-w-[500px] flex flex-col gap-6"
          key={`card-${currentIndex}`}
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {cards[currentIndex].items.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-5">
              <img src={item.src} alt={item.details} className="w-full h-64 object-cover rounded-xl" />
              <h3 className="text-2xl font-bold">{item.details}</h3>
              <p className="text-xl">{item.price}</p>
            </div>
          ))}
        </motion.div>

        {/* Second card slides in from the side */}
        <motion.div
          className="bg-black text-white p-10 rounded-2xl shadow-xl w-full max-w-[500px] flex flex-col gap-6"
          key={`card-${(currentIndex + 1) % cards.length}`}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {cards[(currentIndex + 1) % cards.length].items.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-5">
              <img src={item.src} alt={item.details} className="w-full h-64 object-cover rounded-xl" />
              <h3 className="text-2xl font-bold">{item.details}</h3>
              <p className="text-xl">{item.price}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Cartitem;

