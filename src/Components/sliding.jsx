import React, { useEffect, useState } from "react";  
import { motion } from "framer-motion";  

// Array of box data  
const boxes = [  
  { id: 1, img: "/pexels-adrian-dorobantu-989175-2300334.jpg", text: "Sneaker Style 1", style: "font-bold text-white" },  
  { id: 2, img: "/pexels-chuck-3261069.jpg", text: "Sneaker Style 2", style: "italic text-white" },  
  { id: 3, img: "/pexels-shema-yves-527584815-30144320.jpg", text: "Sneaker Style 3", style: "underline text-white" },  
  { id: 4, img: "/pexels-amanjakhar-1124466.jpg", text: "Sneaker Style 4", style: "text-white text-lg" },  
  { id: 5, img: "/pexels-godisable-jacob-226636-1055280.jpg", text: "Sneaker Style 5", style: "uppercase text-white" },  
  { id: 6, img: "/pexels-chuck-3261068.jpg", text: "Sneaker Style 6", style: "tracking-wider text-white" },  
  { id: 7, img: "/pexels-pixabay-235525.jpg", text: "Sneaker Style 7", style: "font-semibold text-white" },  
  { id: 8, img: "/pexels-mike-1170986.jpg", text: "Sneaker Style 8", style: "italic text-white" },  
];  

const SlideBox = ({ img, text, textStyle }) => (  
  <motion.div  
    className="box mx-2 inline-block rounded-lg overflow-hidden bg-black w-1/2 text-center h-72" // Updated width to w-1/2  
    initial={{ opacity: 0, x: -300 }}  
    animate={{ opacity: 1, x: 0 }}  
    transition={{ duration: 2.5, ease: "easeInOut" }}  
  >  
    <img  
      src={img}  
      alt={text}  
      className="w-full h-3/4 object-cover rounded-t-lg" // Tailwind styles  
    />  
    <p className={textStyle}>{text}</p>  
  </motion.div>  
);  

const Sliding = () => {  
  const [currentSet, setCurrentSet] = useState(0); // To keep track of the current set of boxes  
  const sets = [boxes.slice(0, 2), boxes.slice(2, 4), boxes.slice(4, 6), boxes.slice(6)]; // Split the boxes into sets of 2 images each  

  useEffect(() => {  
    // Switch to the next set every 15 seconds for a slower pace  
    const interval = setInterval(() => {  
      setCurrentSet((prev) => (prev === sets.length - 1 ? 0 : prev + 1)); // Toggle between sets  
    }, 15000); // Change every 15 seconds  

    return () => clearInterval(interval); // Clean up interval on component unmount  
  }, [sets.length]);  

  return (  
    <div className="text-center mt-8 bg-white py-5"> {/* Tailwind styles */}  
      {/* Heading */}  
      <h2 className="text-4xl font-bold mb-5 text-gray-800"> {/* Tailwind styles */}  
        Featured Products  
      </h2>  

      {/* Sliding Boxes */}  
      <motion.div  
        initial={{ x: "-100%" }}  
        animate={{ x: 0 }}  
        transition={{ duration: 5, ease: "easeInOut" }} // Slower overall container animation  
        className="flex justify-center w-full" // Tailwind styles  
      >  
        {sets[currentSet].map((box) => (  
          <SlideBox key={box.id} img={box.img} text={box.text} textStyle={box.style} />  
        ))}  
      </motion.div>  
    </div>  
  );  
};  

export default Sliding;
