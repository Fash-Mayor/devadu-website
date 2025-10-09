import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6 mt-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm">
        © {new Date().getFullYear()} DEVADU Integrated Solutions. All rights reserved.
      </p>
      <div className="flex space-x-4 mt-3 md:mt-0">
        <FaFacebook className="hover:text-teal-400 cursor-pointer" />
        <FaTwitter className="hover:text-teal-400 cursor-pointer" />
        <FaLinkedin className="hover:text-teal-400 cursor-pointer" />
        <FaInstagram className="hover:text-teal-400 cursor-pointer" />
      </div>
    </div>
  </footer>
);

export default Footer;
