import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const styles = {
    container: {
      padding: "2rem",
      fontFamily: "'Arial', sans-serif",
      color: "#333",
      backgroundColor: "#f9f9f9",
      marginTop: "3rem"
    },
    hero: {
      textAlign: "center",
      marginBottom: "3rem",
    },
    heroHeading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    section: {
      marginBottom: "2rem",
    },
    sectionHeading: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#007bff",
      marginBottom: "1rem",
    },
    text: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#555",
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
      marginTop: "2rem",
    },
    featureCard: {
      backgroundColor: "#fff",
      padding: "1.5rem",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    featureIcon: {
      fontSize: "2rem",
      color: "#007bff",
      marginBottom: "0.5rem",
    },
    featureTitle: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    featureText: {
      fontSize: "0.9rem",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <motion.div
        style={styles.hero}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={styles.heroHeading}>About SneakerHub</h1>
        <p>Your ultimate destination for premium sneakers and footwear trends.</p>
      </motion.div>

      {/* Company Info */}
      <div style={styles.section}>
        <h2 style={styles.sectionHeading}>Who We Are</h2>
        <p style={styles.text}>
          At SneakerHub, we believe sneakers are more than just shoes—they’re a lifestyle. 
          We’ve been connecting sneaker enthusiasts with the latest styles, exclusive drops, 
          and timeless classics since 2023.
        </p>
      </div>

      {/* Features */}
      <div style={styles.section}>
        <h2 style={styles.sectionHeading}>What We Offer</h2>
        <div style={styles.featuresGrid}>
          {[
            { title: "Premium Quality", text: "Only the best materials and craftsmanship.", icon: "💎" },
            { title: "Exclusive Drops", text: "Access rare and limited-edition sneakers.", icon: "🔥" },
            { title: "Worldwide Shipping", text: "We deliver to over 50 countries.", icon: "🌍" },
            { title: "24/7 Support", text: "We’re here whenever you need us.", icon: "💬" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              style={styles.featureCard}
              whileHover={{ scale: 1.05 }}
            >
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureText}>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
