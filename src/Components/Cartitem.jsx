import React, { useState, useEffect } from "react";  
import "./Cartitem.css";  

const Cartitem = () => {  
  const [currentIndex, setCurrentIndex] = useState(0);  
  const cards = [  
    {  
      id: 1,  
      items: [  
        {  
          src: "public/karsten-winegeart-H_mNZS_9qC8-unsplash.jpg",  
          details: "Stylish men’s sneakers for comfort.",  
          price: "$120.00",  
          availability: "In Stock",  
        },  
        {  
          src: "public/matthew-hamilton-pO2bglTMJpo-unsplash.jpg",  
          details: "Classic leather shoes for elegance.",  
          price: "$200.00",  
          availability: "Limited Stock",  
        },  
        {  
          src: "public/max-anderson-0fv6PAfj4p4-unsplash.jpg",  
          details: "Elegant shoes for formal wear.",  
          price: "$150.00",  
          availability: "In Stock",  
        },  
        {  
          src: "public/nayris-aquino-lxMkTxNPpxs-unsplash.jpg",  
          details: "Versatile extra item for convenience.",  
          price: "$0.00",  
          availability: "Free with Purchase",  
        },  
      ],  
    },  
    {  
      id: 2,  
      items: [  
        {  
          src: "public/riley-edwards-6kmNVeslMW8-unsplash.jpg",  
          details: "Casual loafers for relaxed outings.",  
          price: "$80.00",  
          availability: "In Stock",  
        },  
        {  
          src: "public/wengang-zhai-_fOL6ebfECQ-unsplash.jpg",  
          details: "Sporty shoes for active lifestyle.",  
          price: "$150.00",  
          availability: "In Stock",  
        },  
        {  
          src: "public/xavier-teo-SxAXphIPWeg-unsplash (1).jpg",  
          details: "Trendy sneakers with stylish design.",  
          price: "$100.00",  
          availability: "Limited Stock",  
        },  
        {  
          src: "public/malvestida-Rp-viEAP8Bo-unsplash.jpg",  
          details: "Free item for shoe collection.",  
          price: "$0.00",  
          availability: "Free with Purchase",  
        },  
      ],  
    },  
  ];  

  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);  
    }, 15000);  
    return () => clearInterval(interval);  
  }, [cards.length]);  

  return (  
    <div className="bg-black py-4 px-4 text-center">  
      <h2 className="text-4xl font-bold mb-12 text-white">Our Ethos</h2>  

      <div className="flex justify-center gap-6">  
        {/* First Card */}  
        <div className="w-full max-w-[500px] bg-black text-white rounded-2xl shadow-xl overflow-hidden">  
          <div className="scroll-container scroll-up">  
            {cards[currentIndex].items.slice(0, 2).map((item, index) => (  
              <div key={index} className="item-card">  
                <img src={item.src} alt={item.details} className="w-full h-64 object-cover rounded-xl" />  
                <h3 className="text-2xl font-bold mt-4">{item.details}</h3>  
                <p className="text-xl mt-2">{item.price}</p>  
                <p className="text-lg mt-2">{item.availability}</p>  {/* Added spacing here */}  
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
                <p className="text-xl mt-2">{item.price}</p>  
                <p className="text-lg mt-2">{item.availability}</p>  {/* Added spacing here */}  
              </div>  
            ))}  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Cartitem;