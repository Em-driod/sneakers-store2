import React from 'react';
import { motion } from 'framer-motion';

const sneakers = [
  { name: 'Air Jordan 1 Retro', description: 'The timeless classic loved by sneaker enthusiasts.', price: '$180' },
  { name: 'Nike Air Force 1', description: 'An iconic silhouette with unmatched versatility.', price: '$120' },
  { name: 'Adidas Yeezy Boost 350', description: 'A stylish blend of comfort and streetwear.', price: '$220' },
  { name: 'Converse Chuck Taylor All Star', description: 'A vintage look with enduring popularity.', price: '$70' },
  { name: 'Puma RS-X', description: 'Bold design and extreme comfort for everyday wear.', price: '$110' },
  { name: 'Reebok Club C 85', description: 'Minimalist style with a retro edge.', price: '$90' },
];

const Popular = () => {
  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '50px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '20px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        Most Popular Sneakers
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {sneakers.map((sneaker, index) => (
          <motion.div
            key={index}
            style={{
              backgroundColor: '#111',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'left',
              maxWidth: '600px',
              margin: '0 auto',
              border: '1px solid #333',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 10px 20px rgba(255, 255, 255, 0.1)',
            }}
          >
            <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{sneaker.name}</h2>
            <p style={{ fontSize: '1rem', marginBottom: '5px', color: '#aaa' }}>{sneaker.description}</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>{sneaker.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
