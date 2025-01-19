import React, { useState, useEffect } from "react";  
import "./Cartitem.css"; // Add the CSS for animations  

const Cartitem = () => {  
  const [currentIndex, setCurrentIndex] = useState(0);  

  const cards = [  
    {  
      id: 1,  
      items: [  
        { src: "public/Screenshot 2025-01-12 074638.png", details: "Stylish Men's Sneakers", price: "$120.00" },  
        { src: "public/pexels-chuck-3261069.jpg", details: "Classic Leather Shoes", price: "$200.00" },  
        { src: "public/pexels-shema-yves-527584815-30144320.jpg", details: "Elegant Formal Shoes", price: "$150.00" },  
        { src: "public/pexels-frank-k-895836-1863357.jpg", details: "Extra Item for Smooth Transition", price: "$0.00" },  
      ],  
    },  
    {  
      id: 2,  
      items: [  
        { src: "public/pexels-frank-k-895836-1863357.jpg", details: "Casual Loafers", price: "$80.00" },  
        { src: "public/pexels-mnzoutfits-1598505.jpg", details: "Sporty Running Shoes", price: "$150.00" },  
        { src: "public/pexels-godisable-jacob-226636.jpg", details: "Trendy Sneakers", price: "$100.00" },  
        { src: "public/pexels-chuck-3261069.jpg", details: "Extra Item for Smooth Transition", price: "$0.00" },  
      ],  
    },  
  ];  

  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);  
    }, 15000); // Slower animation speed (15 seconds)  
    return () => clearInterval(interval);  
  }, [cards.length]);  

  return (  
    <div className="bg-black py-4 px-4 text-center">  
      <h2 className="text-4xl font-bold mb-12">Our Ethos</h2>  

      <div className="flex justify-center gap-6">  
        {/* First Card */}  
        <div className="w-full max-w-[500px] bg-black text-white  rounded-2xl shadow-xl overflow-hidden">  
          <div className="scroll-container scroll-up">  
            {cards[currentIndex].items.slice(0, 2).map((item, index) => (  
              <div key={index} className="item-card">  
                <img src={item.src} alt={item.details} className="w-full h-64 object-cover rounded-xl" />  
                <h3 className="text-2xl font-bold mt-4">{item.details}</h3>  
                <p className="text-xl">{item.price}</p>  
              </div>  
            ))}  
          </div>  
        </div>  

        {/* Second Card */}  
        <div className="w-full max-w-[500px] bg-black text-white p-6 rounded-2xl shadow-xl overflow-hidden">  
          <div className="scroll-container scroll-down">  
            {cards[(currentIndex + 1) % cards.length].items.slice(1, 3).map((item, index) => (  
              <div key={index} className="item-card">  
                <img src={item.src} alt={item.details} className="w-full h-64 object-cover rounded-xl" />  
                <h3 className="text-2xl font-bold mt-4">{item.details}</h3>  
                <p className="text-xl">{item.price}</p>  
              </div>  
            ))}  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Cartitem;