import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12 px-4 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">SneakerHub</h2>
          <p className="mt-4 text-sm text-gray-400">
            Your go-to destination for premium sneakers and accessories.
          </p>
          <div className="flex gap-4 mt-4">
            <div
              className="bg-gray-700 p-3 rounded-full text-xl text-gray-200 cursor-pointer transition duration-300 hover:bg-gray-600"
            >
              <FaFacebookF />
            </div>
            <div
              className="bg-gray-700 p-3 rounded-full text-xl text-gray-200 cursor-pointer transition duration-300 hover:bg-gray-600"
            >
              <FaTwitter />
            </div>
            <div
              className="bg-gray-700 p-3 rounded-full text-xl text-gray-200 cursor-pointer transition duration-300 hover:bg-gray-600"
            >
              <FaInstagram />
            </div>
            <div
              className="bg-gray-700 p-3 rounded-full text-xl text-gray-200 cursor-pointer transition duration-300 hover:bg-gray-600"
            >
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="/about"
                className="text-sm text-gray-400 hover:text-white transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="text-sm text-gray-400 hover:text-white transition duration-300"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-sm text-gray-400 hover:text-white transition duration-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="text-sm text-gray-400 hover:text-white transition duration-300"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <p className="mt-4 text-sm text-gray-400">Address: No 8 Jooro Street, Asadam</p>
          <p className="mt-2 text-sm text-gray-400">Email: @Emmanuelsneakerhub.com</p>
          <p className="mt-2 text-sm text-gray-400">Phone: +234-7016969298</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white">Newsletter</h3>
          <p className="mt-4 text-sm text-gray-400">
            Subscribe to our newsletter to stay updated on the latest trends and offers.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-700 text-gray-200 rounded-md border-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 p-3 bg-blue-600 text-white rounded-md cursor-pointer transition duration-300 hover:bg-blue-500"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-gray-400 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} SneakerHub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;


