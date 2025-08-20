import React from "react";

function Contact() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Contact <span className="text-pink-500">Us</span>
      </h1>
      <p className="text-center mb-8">
        Have questions, feedback, or just want to say hello? Fill out the form
        below or reach us via email. We’d love to hear from you!
      </p>

      <form className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
