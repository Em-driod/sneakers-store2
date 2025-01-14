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
    className="box"
    style={{
      margin: "10px",
      display: "inline-block",
      borderRadius: "8px",
      overflow: "hidden",
      backgroundColor: "black", // Black background for each box
      width: "23%", // Four boxes per row
      textAlign: "center",
      height: "300px", // Box height
      color: "white", // Default text color
    }}
    initial={{ opacity: 0, x: -300 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 2.5, ease: "easeInOut" }}
  >
    <img
      src={img}
      alt={text}
      style={{
        width: "100%",
        height: "70%", // Image height
        objectFit: "cover",
        borderRadius: "5px 5px 0 0", // Rounded corners at the top only
      }}
    />
    <p style={textStyle}>{text}</p>
  </motion.div>
);

const Sliding = () => {
  const [currentSet, setCurrentSet] = useState(0); // To keep track of the current set of boxes
  const sets = [boxes.slice(0, 4), boxes.slice(4)]; // Split the boxes into two sets of 4 images each

  useEffect(() => {
    // Switch to the next set every 15 seconds for a slower pace
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev === 0 ? 1 : 0)); // Toggle between 0 and 1 (set 1 and set 2)
    }, 15000); // Change every 15 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
        backgroundColor: "#ffffff", // Background set to white
        padding: "20px 0",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Featured Products
      </h2>

      {/* Sliding Boxes */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 5, ease: "easeInOut" }} // Slower overall container animation
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        {sets[currentSet].map((box) => (
          <SlideBox key={box.id} img={box.img} text={box.text} textStyle={box.style} />
        ))}
      </motion.div>
    </div>
  );
};

export default Sliding;

