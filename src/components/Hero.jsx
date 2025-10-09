import React from "react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section
    data-aos="fade-in"
    style={{
      backgroundImage: `url("https://plus.unsplash.com/premium_photo-1685086785223-485f800ce410?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "80vh",
    }}
    className="pt-20 relative flex items-center justify-center text-center"
  >
    <div className="relative z-10 text-white px-6">
      <h1 className="text-4xl md:text-5xl font-bold">
        Affordable Tech Solutions for Businesses and Developers
      </h1>
      <p className="mt-4">Empowering your digital presence with reliability and innovation.</p>
      <Link
        to="/contact"
        className="mt-6 inline-block bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg font-semibold"
      >
        Get Started
      </Link>
    </div>
  </section>
);

export default Hero;
