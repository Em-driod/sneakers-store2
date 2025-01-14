import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#1a202c",
      color: "#e2e8f0",
      padding: "3rem 1rem",
    },
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    section: {
      marginBottom: "1rem",
    },
    heading: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#fff",
    },
    text: {
      marginTop: "1rem",
      color: "#cbd5e0",
      fontSize: "0.9rem",
    },
    socialIcons: {
      display: "flex",
      gap: "1rem",
      marginTop: "1rem",
    },
    socialIcon: {
      backgroundColor: "#2d3748",
      padding: "0.5rem",
      borderRadius: "50%",
      color: "#e2e8f0",
      fontSize: "1.2rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    linkList: {
      marginTop: "1rem",
      listStyle: "none",
      padding: 0,
    },
    linkItem: {
      marginBottom: "0.5rem",
    },
    link: {
      color: "#cbd5e0",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    linkHover: {
      color: "#fff",
    },
    form: {
      marginTop: "1rem",
    },
    input: {
      width: "100%",
      padding: "0.5rem",
      borderRadius: "4px",
      backgroundColor: "#2d3748",
      color: "#e2e8f0",
      border: "none",
      marginBottom: "1rem",
    },
    button: {
      width: "100%",
      padding: "0.5rem",
      borderRadius: "4px",
      backgroundColor: "#3182ce",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    bottomText: {
      textAlign: "center",
      marginTop: "2rem",
      borderTop: "1px solid #4a5568",
      paddingTop: "1rem",
      fontSize: "0.85rem",
      color: "#a0aec0",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Company Info */}
        <div style={styles.section}>
          <h2 style={styles.heading}>SneakerHub</h2>
          <p style={styles.text}>
            Your go-to destination for premium sneakers and accessories.
          </p>
          <div style={styles.socialIcons}>
            <div
              style={styles.socialIcon}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4a5568")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2d3748")}
            >
              <FaFacebookF />
            </div>
            <div
              style={styles.socialIcon}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4a5568")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2d3748")}
            >
              <FaTwitter />
            </div>
            <div
              style={styles.socialIcon}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4a5568")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2d3748")}
            >
              <FaInstagram />
            </div>
            <div
              style={styles.socialIcon}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4a5568")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2d3748")}
            >
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}>
              <a
                href="/about"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = "#fff")}
                onMouseOut={(e) => (e.target.style.color = "#cbd5e0")}
              >
                About Us
              </a>
            </li>
            <li style={styles.linkItem}>
              <a
                href="/products"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = "#fff")}
                onMouseOut={(e) => (e.target.style.color = "#cbd5e0")}
              >
                Products
              </a>
            </li>
            <li style={styles.linkItem}>
              <a
                href="/contact"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = "#fff")}
                onMouseOut={(e) => (e.target.style.color = "#cbd5e0")}
              >
                Contact Us
              </a>
            </li>
            <li style={styles.linkItem}>
              <a
                href="/faq"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = "#fff")}
                onMouseOut={(e) => (e.target.style.color = "#cbd5e0")}
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Contact Us</h3>
          <p style={styles.text}>Address: No 8 jooro Street,asadam</p>
          <p style={styles.text}>Email: @Emmanuelsneakerhub.com</p>
          <p style={styles.text}>Phone: +234-7016969298</p>
        </div>

        {/* Newsletter */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Newsletter</h3>
          <p style={styles.text}>
            Subscribe to our newsletter to stay updated on the latest trends and offers.
          </p>
          <form style={styles.form}>
            <input type="email" placeholder="Enter your email" style={styles.input} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.button}
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>

      <p style={styles.bottomText}>
        © {new Date().getFullYear()} SneakerHub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

