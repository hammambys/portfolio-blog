import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Thank you for reaching out! Will respond as soon as possible");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4" id="contact">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
          Get In Touch
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-brown rounded-full"></span>
        </h2>
        <p className="text-carafe/60 dark:text-sand_dollar/60 text-center max-w-2xl">
          Have a project in mind or just want to say hi? Feel free to drop a message!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="lg:w-1/3 space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <p className="text-carafe/70 dark:text-sand_dollar/70 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-tan/10 dark:bg-sand_dollar/5 rounded-lg text-brown">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider opacity-60">Email Me</h4>
                <p className="text-lg font-medium">hammambenyounes@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-tan/10 dark:bg-sand_dollar/5 rounded-lg text-brown">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider opacity-60">Location</h4>
                <p className="text-lg font-medium">Tunis, Tunisia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="bg-white dark:bg-[#251b14] p-8 md:p-10 rounded-3xl shadow-xl border border-tan/10 dark:border-sand_dollar/5 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider opacity-60 ml-1">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-tan/5 dark:bg-sand_dollar/5 border border-tan/20 dark:border-sand_dollar/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brown/50 transition-all text-carafe dark:text-sand_dollar"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider opacity-60 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-tan/5 dark:bg-sand_dollar/5 border border-tan/20 dark:border-sand_dollar/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brown/50 transition-all text-carafe dark:text-sand_dollar"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider opacity-60 ml-1">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="How can I help you?"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-tan/5 dark:bg-sand_dollar/5 border border-tan/20 dark:border-sand_dollar/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brown/50 transition-all text-carafe dark:text-sand_dollar"
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-carafe text-sand_dollar hover:bg-brown transition-all duration-300 rounded-xl font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
