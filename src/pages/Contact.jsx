import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! (demo only)");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-teal-800 mb-10 text-center">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="w-full border p-3 rounded" />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="w-full border p-3 rounded" />
          <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} className="w-full border p-3 rounded" />
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} rows="5" className="w-full border p-3 rounded"></textarea>
          <button type="submit" className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800">
            Send Message
          </button>
        </form>

        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-teal-700">Our Office</h3>
          <p>Lagos, Nigeria (Placeholder Address)</p>
          <p className="mt-2">Email: info@devadu.com</p>
          <p className="mt-2">Phone: +234 XXX XXX XXXX</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
