import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Array of box data
const boxes = [
  { id: 1, img: "/pexels-adrian-dorobantu-989175-2300334.jpg", text: "Sneaker Style 1", style: { color: "white", fontWeight: "bold" } },
  { id: 2, img: "/pexels-chuck-3261069.jpg", text: "Sneaker Style 2", style: { color: "white", fontStyle: "italic" } },
  { id: 3, img: "/pexels-shema-yves-527584815-30144320.jpg", text: "Sneaker Style 3", style: { color: "white", textDecoration: "underline" } },
  { id: 4, img: "/pexels-amanjakhar-1124466.jpg", text: "Sneaker Style 4", style: { color: "white", fontSize: "20px" } },
  { id: 5, img: "/pexels-godisable-jacob-226636-1055280.jpg", text: "Sneaker Style 5", style: { color: "white", textTransform: "uppercase" } },
  { id: 6, img: "/pexels-chuck-3261068.jpg", text: "Sneaker Style 6", style: { color: "white", letterSpacing: "2px" } },
  { id: 7, img: "/pexels-pixabay-235525.jpg", text: "Sneaker Style 7", style: { color: "white", fontWeight: "600" } },
  { id: 8, img: "/pexels-mike-1170986.jpg", text: "Sneaker Style 8", style: { color: "white", fontStyle: "italic" } },
];

const SlideBox = ({ img, text, textStyle }) => (
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
    }, 15000); // Change every 15 seconds

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
          <SlideBox key={box.id} img={box.img} text={box.text} textStyle={box.style} />
        ))}
      </motion.div>
    </div>
  );
};

export default Sliding;
