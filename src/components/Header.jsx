import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="from-white-500 to-indigo-600 text-blue shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="https://www.google.com"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://static.cdnlogo.com/logos/g/53/google.png"
            alt="Google Logo"
            className="w-40 h-40 object-contain"
          />
        </a>
        <ul
          className={`md:flex items-center md:space-x-8 md:static absolute bg-blue-500 w-full left-0 md:w-auto md:bg-transparent ${
            menuOpen ? "top-16" : "top-[-200px]"
          } transition-all duration-300 z-10`}
        >
          <li>
            <Link
              to="/"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
