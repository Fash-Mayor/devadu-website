import React from "react";

const Testimonials = () => (
  <section className="py-16 bg-white text-center" data-aos="fade-up">
    <h2 className="text-3xl font-bold text-teal-800 mb-10">What Our Clients Say</h2>
    <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="bg-gray-50 p-6 rounded-lg shadow w-full md:w-1/3">
          <p className="italic text-gray-700">
            “Great experience working with DEVADU Integrated Solutions. Their support is top-notch!”
          </p>
          <h4 className="mt-4 font-semibold text-teal-700">Client {i + 1}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
