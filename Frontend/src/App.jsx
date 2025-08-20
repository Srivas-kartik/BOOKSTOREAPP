import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";   // ✅ About import
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser] = useAuth();  // authUser only (setAuthUser not needed here)

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white min-h-screen">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Courses (Protected Route) */}
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />

          {/* Signup */}
          <Route path="/signup" element={<Signup />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Toaster position="top-center" />
      </div>
    </>
  );
}

export default App;
