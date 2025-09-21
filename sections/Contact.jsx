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
    // Send form data to API route
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
    <div className="container mx-auto px-10 mb-8 " id="contact">
      
    <h1 className="text-3xl  mb-8 text-center font-bold">Contact</h1>
      <div className="md:flex md:justify-center font-normal">
        <div className="md:w-1/4 m-5 ">
          <p>
            If you're up to meet in-person, virtual meeting or just a quick
            chat, hit me up on social media or drop me a message here!
          </p>
        </div>
        <div className="md:w-3/4 m-5">
          <form onSubmit={handleSubmit} className="mx-auto px-0 md:px-6 bg-white ">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm  text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="text-carafe mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-carafe"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 "
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="text-carafe mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="p-3 bg-carafe text-sand_dollar hover:bg-brown transition duration-500 rounded dark:border w-full"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
