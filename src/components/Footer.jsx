import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <footer className="py-8">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8 border-b border-gray-700 pb-4 mb-4">
            <li>
              <a href="/" className="hover:text-blue-400 transition duration-200">Home</a>
            </li>
            <li>
              <a href="/features" className="hover:text-blue-400 transition duration-200">Features</a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-blue-400 transition duration-200">Pricing</a>
            </li>
            <li>
              <a href="/faqs" className="hover:text-blue-400 transition duration-200">FAQs</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400 transition duration-200">About</a>
            </li>
            <li>
              <a href="/products" className="hover:text-blue-400 transition duration-200">Products</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition duration-200">Contact Us</a>
            </li>
          </ul>

          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200">
              <FaLinkedinIn size={20} />
            </a>
          </div>

          <p className="text-center text-gray-400">© 2024 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
