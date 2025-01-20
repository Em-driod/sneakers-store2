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
    <motion.div className="relative w-screen h-screen overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image.src})` }}
          animate={{
            opacity: currentImageIndex === index ? 1 : 0,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <motion.div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-70 px-6 py-8">
            <motion.h1
              className="text-4xl font-bold mb-2 tracking-wide uppercase sm:text-3xl md:text-4xl lg:text-5xl"
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
              className="text-xl italic mt-3 sm:text-lg md:text-xl lg:text-2xl"
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
              className="text-base font-light mt-5 max-w-[90%] text-center leading-relaxed sm:text-sm md:text-base lg:text-lg"
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
                className="mt-6 px-6 py-3 bg-black text-white font-bold text-sm rounded-lg shadow-lg cursor-pointer transform hover:bg-gray-800 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4"
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

  