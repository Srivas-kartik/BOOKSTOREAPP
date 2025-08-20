import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Cards from "../components/Cards";  // ✅ Import Books Cards

function Home() {
  return (
    <>
      <Navbar />
      <Banner />

      {/* Books Section */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Books</h2>
        <Cards />
      </section>

      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
