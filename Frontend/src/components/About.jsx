import React from "react";

function About() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-20 py-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-400">
        About Us
      </h1>

      <div className="bg-white dark:bg-slate-800 shadow-md rounded-2xl p-8 md:p-12">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          Welcome to <span className="font-semibold text-indigo-600 dark:text-indigo-400">PageTurner</span> 📚 — 
          your one-stop platform for exploring, learning, and tracking your favorite books & courses.
          We aim to provide learners with high-quality resources, an engaging learning environment,
          and a smooth experience.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-indigo-500 dark:text-indigo-300">
          Our Mission
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Our mission is to make learning accessible, enjoyable, and interactive for everyone. 
          Whether you are a beginner or an expert, we provide tools and free resources 
          to help you grow your knowledge and skills.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-indigo-500 dark:text-indigo-300">
          Why Choose Us?
        </h2>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
          <li>✨ Free and Premium courses to boost your skills</li>
          <li>📖 A wide collection of resources and books</li>
          <li>🌙 Light/Dark mode for better readability</li>
          <li>👨‍💻 Built with modern tech for smooth user experience</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
