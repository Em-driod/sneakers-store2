import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const styles = {
    container: {
      marginTop: "5rem", // Added margin-top
      padding: "2rem",
      fontFamily: "'Arial', sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#333",
    },
    hero: {
      textAlign: "center",
      marginBottom: "2rem",
    },
    heroHeading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    section: {
      marginBottom: "2rem",
    },
    contactDetails: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "2rem",
    },
    detailItem: {
      fontSize: "1rem",
      margin: "0.5rem 0",
      color: "#555",
    },
    form: {
      maxWidth: "500px",
      margin: "0 auto",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      marginBottom: "1rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    button: {
      width: "100%",
      padding: "0.75rem",
      borderRadius: "4px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
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
        <h1 style={styles.heroHeading}>Contact Us</h1>
        <p>We’re here to help! Get in touch with us anytime.</p>
      </motion.div>

      {/* Contact Details */}
      <div style={styles.contactDetails}>
        <p style={styles.detailItem}>📍 Address: 123 Sneaker Street, NYC</p>
        <p style={styles.detailItem}>📧 Email: support@sneakerhub.com</p>
        <p style={styles.detailItem}>📞 Phone: +1 (800) 123-4567</p>
      </div>

      {/* Contact Form */}
      <div style={styles.section}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Send Us a Message</h2>
        <motion.form
          style={styles.form}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
            required
          />
          <textarea
            placeholder="Your Message"
            style={{ ...styles.input, height: "150px" }}
            required
          ></textarea>
          <motion.button
            style={styles.button}
            whileHover={{ backgroundColor: "#0056b3" }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
