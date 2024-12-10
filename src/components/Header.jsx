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
    <header className="bg-gradient-to-r from-white-500 to-indigo-600 text-blue shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img
            src="https://static.cdnlogo.com/logos/g/53/google.png"
            alt="Logo"
            className="w-20 h-20 object-contain"
          />
        </Link>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <ul
          className={`md:flex items-center md:space-x-8 md:static absolute bg-blue-500 w-full left-0 md:w-auto md:bg-transparent ${
            menuOpen ? "top-16" : "top-[-200px]"
          } transition-all duration-300 z-10`}
        >          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
