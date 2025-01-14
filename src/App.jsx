// src/App.jsx  

import React from "react";  
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Navbar from "./Components/Navbar"; // Navbar component  
import Footer from "./Components/Footer"; // Footer component  
import Homepage from "./Pages/Homepage"; // Homepage component  
import Shop from "./Pages/Shop"; // Shop component  
import Cart from "./Pages/Cart"; // Cart component  
import Contact from "./Pages/Contact"; // Contact component  
import About from "./Pages/About"; // About component  
import { CartProvider } from './CartContext'; // Import the CartProvider  

const App = () => {  
  return (  
    <CartProvider> {/* Wrap with CartProvider */}  
      <Router>  
        <div>  
          <Navbar />  
          <main>  
            <Routes>  
              <Route path="/" element={<Homepage />} />  
              <Route path="/shop" element={<Shop />} />  
              <Route path="/cart" element={<Cart />} />  
              <Route path="/contact" element={<Contact />} />  
              <Route path="/about" element={<About />} />  
            </Routes>  
          </main>  
          <Footer />  
        </div>  
      </Router>  
    </CartProvider>  
  );  
};  

export default App;