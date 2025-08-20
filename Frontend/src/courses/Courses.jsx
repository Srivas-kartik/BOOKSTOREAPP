import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";

function Courses() {
  // Page load hote hi scroll ko top pe le jao
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Course />
      </main>
      <Footer />
    </>
  );
}

export default Courses;
