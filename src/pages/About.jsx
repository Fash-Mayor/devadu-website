import React from "react";

const About = () => (
  <section className="py-16 px-6 max-w-5xl mx-auto" data-aos="fade-up">
    <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">About Us</h2>
    <p className="text-gray-700 mb-6 text-center">
      <strong>Mission:</strong> Empowering businesses and developers with affordable, innovative technology solutions.
    </p>
    <p className="text-gray-700 mb-6 text-center">
      <strong>Vision:</strong> To be the leading platform for affordable hosting and business-ready solutions in Africa.
    </p>

    <h3 className="text-2xl font-semibold text-teal-700 mt-10 mb-4">Our Values</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>Transparency</li>
      <li>Affordability</li>
      <li>Innovation</li>
      <li>Support</li>
    </ul>

    <h3 className="text-2xl font-semibold text-teal-700 mt-10 mb-4">Our Team</h3>
    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map((id) => (
        <div key={id} className="text-center bg-gray-50 p-4 rounded shadow">
          <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-3"></div>
          <h4 className="font-semibold">Team Member {id}</h4>
          <p className="text-sm text-gray-600">Short bio goes here.</p>
        </div>
      ))}
    </div>
  </section>
);

export default About;
