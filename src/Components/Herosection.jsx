import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const images = [
    {
      src: "/pexels-adrian-dorobantu-989175-2300334.jpg",
      alt: "Sneaker 1",
      textTop: "Step into Style",
      textBottom: "Explore the Latest Trends",
      textExtra: "Where comfort meets fashion. Unveil your bold look now.",
      buttonText: "Shop Now",
      buttonLink: "/shop",
    },
    {
      src: "/pexels-craytive-1478442.jpg",
      alt: "Sneaker 2",
      textTop: "Unmatched Comfort",
      textBottom: "Shop Your Perfect Pair",
      textExtra: "Feel the difference with every step you take. Elevate your stride.",
      buttonText: "Check it out",
      buttonLink: "/shop",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        left: 0,
      }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${image.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            opacity: currentImageIndex === index ? 1 : 0,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "20px",
            }}
          >
            <motion.h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "10px",
                textTransform: "uppercase",
                letterSpacing: "2px",
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
              }}
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeOut",
              }}
            >
              {image.textTop}
            </motion.h1>

            <motion.p
              style={{
                fontSize: "1.4rem",
                fontStyle: "italic",
                marginTop: "10px",
                textShadow: "1px 1px 5px rgba(0, 0, 0, 0.4)",
              }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeOut",
              }}
            >
              {image.textBottom}
            </motion.p>

            <motion.p
              style={{
                fontSize: "1.2rem",
                fontWeight: "lighter",
                marginTop: "20px",
                maxWidth: "600px",
                textAlign: "center",
                letterSpacing: "1px",
                lineHeight: "1.6",
                textShadow: "1px 1px 6px rgba(0, 0, 0, 0.5)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 1.5,
                ease: "easeInOut",
              }}
            >
              {image.textExtra}
            </motion.p>

            <Link to={image.buttonLink}>
              <motion.div
                style={{
                  backgroundColor: "#000000", // Black background
                  padding: "12px 30px",
                  borderRadius: "10px", // Unified border radius
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#ffffff", // White text
                  marginTop: "20px",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)",
                  cursor: "pointer",
                }}
                whileHover={{ backgroundColor: "#333333" }}
                transition={{ duration: 0.3 }}
              >
                {image.buttonText}
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
