import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";
import { BookOpen, Menu } from "lucide-react"; // 👈 icons

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li><a href="/" className="hover:text-indigo-600">Home</a></li>
      <li><a href="/course" className="hover:text-indigo-600">Course</a></li>
      <li><a href="/contact" className="hover:text-indigo-600">Contact</a></li>
      <li><a href="/about" className="hover:text-indigo-600">About</a></li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 
      ${sticky
        ? "shadow-md bg-base-200 dark:bg-slate-700 dark:text-white transition-all duration-300"
        : "dark:bg-slate-800 dark:text-white"
      }`}
    >
      <div className="navbar flex justify-between items-center py-3">
        {/* Left side */}
        <div className="flex items-center gap-2 cursor-pointer">
          <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
            PageTurner
          </span>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{navItems}</ul>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Search box */}
          <div className="hidden md:block">
            <label className="px-3 py-2 border rounded-md flex items-center gap-2">
              <input
                type="text"
                className="grow outline-none rounded-md px-1 dark:bg-slate-900 dark:text-white"
                placeholder="Search books..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          {/* Theme toggle */}
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" />
            {/* Sun */}
            <svg
              className="swap-off fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <path d="M6.76 4.84l-1.8-1.79-1.42 1.41 1.79 1.8a7.96 7.96 0 0 0 0 11.3l-1.79 1.8 1.42 1.41 1.8-1.79a7.96 7.96 0 0 0 11.3 0l1.8 1.79 1.41-1.41-1.79-1.8a7.96 7.96 0 0 0 0-11.3l1.79-1.8-1.41-1.41-1.8 1.79a7.96 7.96 0 0 0-11.3 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
            </svg>
            {/* Moon */}
            <svg
              className="swap-on fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <path d="M21.64 13a9 9 0 1 1-9-9 7 7 0 0 0 9 9z" />
            </svg>
          </label>

          {/* Login / Logout */}
          {authUser ? (
            <Logout />
          ) : (
            <div>
              <a
                className="bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700 duration-300 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
              <Login />
            </div>
          )}

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Menu
              className="w-7 h-7 cursor-pointer"
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenu && (
        <div className="lg:hidden bg-base-200 dark:bg-slate-700 px-4 py-2 shadow-md">
          <ul className="space-y-2">{navItems}</ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
