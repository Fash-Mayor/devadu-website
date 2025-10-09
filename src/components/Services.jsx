import React from "react";
import { FaCode, FaServer, FaLaptop, FaHandsHelping } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={40} className="text-teal-600" />,
    title: "Websites & Applications",
    desc: "We design and develop custom web solutions tailored to client needs.",
  },
  {
    icon: <FaServer size={40} className="text-teal-600" />,
    title: "Affordable Hosting for Developers",
    desc: "Host your projects at cheaper rates with reliable uptime.",
  },
  {
    icon: <FaLaptop size={40} className="text-teal-600" />,
    title: "Pre-developed Business Websites",
    desc: "Ready-to-use website templates for SMEs and startups.",
  },
  {
    icon: <FaHandsHelping size={40} className="text-teal-600" />,
    title: "Consulting & Support",
    desc: "Guidance for businesses and developers to scale projects.",
  },
];

const Services = () => (
  <section className="py-16 px-6 bg-gray-50">
    <div className="container mx-auto text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-teal-800 mb-10">Our Services</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{s.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
