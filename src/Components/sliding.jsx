import React, { useEffect, useState } from "react";  
import { motion } from "framer-motion";  

// Array of box data with descriptions  
const boxes = [  
  { id: 1, img: "/airforce.png", text: "Sneaker Style 1", description: "This sneaker combines style and comfort for everyday wear.", style: { color: "white", fontWeight: "bold" } },  
  { id: 2, img: "/retro xx.png", text: "Air Jordan Mid", description: "A classic design that never goes out of style.", style: { color: "white", fontStyle: "italic" } },  
  { id: 3, img: "/ADFWD.png", text: "ADFWD", description: "Engineered for performance, this shoe is perfect for athletes.", style: { color: "white", textDecoration: "underline" } },  
  { id: 4, img: "/fitvilla.png", text: "Sneaker Style 4", description: "A trendy option for those who want to stand out.", style: { color: "white", fontSize: "20px" } },  
  { id: 5, img: "/retro xx.png", text: "Sneaker Style 5", description: "Combining retro vibes with modern comfort.", style: { color: "white", textTransform: "uppercase" } },  
  { id: 6, img: "/Jordan retro 10.png", text: "Sneaker Style 6", description: "Designed for the court, perfect for street style.", style: { color: "white", letterSpacing: "2px" } },  
  { id: 7, img: "/nike welk.png", text: "Sneaker Style 7", description: "A versatile sneaker that fits any occasion.", style: { color: "white", fontWeight: "600" } },  
  { id: 8, img: "/public/fitvilla.png", text: "Sneaker Style 8", description: "Stylish and comfortable, ideal for all-day wear.", style: { color: "white", fontStyle: "italic" } },  
];  

const SlideBox = ({ img, text, description, textStyle }) => (  
  <motion.div  
    className="bg-black text-white rounded-lg overflow-hidden w-full h-96"  
    initial={{ opacity: 0, y: -30 }}  
    animate={{ opacity: 1, y: 0 }}  
    transition={{ duration: 0.5, ease: "easeInOut" }}  
  >  
    <img  
      src={img}  
      alt={text}  
      className="w-full h-3/4 object-cover rounded-t-lg"  
    />  
    <p style={textStyle} className="p-2">{text}</p>  
    <p className="p-2 text-gray-300">{description}</p> {/* New description paragraph */}  
  </motion.div>  
);  

const Sliding = () => {  
  const [currentSet, setCurrentSet] = useState(0);  

  // Group boxes into sets of 4 for larger screens  
  const sets = [  
    boxes.slice(0, 4), // First set of 4  
    boxes.slice(4, 8), // Second set of 4  
  ];  

  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentSet((prev) => (prev + 1) % sets.length);  
    }, 5000); // 5 seconds  

    return () => clearInterval(interval);  
  }, []);  

  return (  
    <div className="text-center mt-8 bg-white py-5">  
      <h2 className="text-3xl font-bold mb-5 text-gray-800">  
        Featured Products  
      </h2>  
      <motion.div  
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2"  
      >  
        {sets[currentSet].map((box) => (  
          <SlideBox key={box.id} img={box.img} text={box.text} description={box.description} textStyle={box.style} />  
        ))}  
      </motion.div>  
    </div>  
  );  
};  

export default Sliding;