// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md text-gray-900"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/"
            className={`text-2xl font-bold ${
              scrolled ? "text-teal-700" : "text-teal-700"
            }`}
          >
            DEVADU<span className="text-teal-600">.</span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex space-x-8"
        >
          {["/", "/about", "/contact"].map((path, i) => {
            const names = ["Home", "About", "Contact"];
            return (
              <NavLink
                key={i}
                to={path}
                className={({ isActive }) =>
                  `hover:text-teal-600 transition ${
                    isActive
                      ? "text-teal-600 font-semibold"
                      : scrolled
                      ? "text-gray-800"
                      : "text-gray-800"
                  }`
                }
              >
                {names[i]}
              </NavLink>
            );
          })}
        </motion.nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes className={scrolled ? "text-gray-800" : "text-white"} />
          ) : (
            <FaBars className={scrolled ? "text-gray-800" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden bg-white shadow-lg flex flex-col items-center py-6 space-y-4 transition-all duration-300 ${
            scrolled ? "text-gray-900" : "text-gray-800"
          }`}
        >
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-teal-600 font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-teal-600 font-medium"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-teal-600 font-medium"
          >
            Contact
          </NavLink>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
