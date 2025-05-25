import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/zinestate2.png"; // ✅ Import logo image

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-light-dark text-light-dark  shadow-md px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-light-dark">Peach RentalHome</span>
        </Link>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Nav Links */}
        <div
          className={`flex-col md:flex md:flex-row md:space-x-4 absolute md:static bg-light-dark md:bg-transparent w-full md:w-auto left-0 md:left-auto top-14 md:top-auto transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {["Home", "Product", "Service", "Contact", "About", "Career"].map((text) => (
            <Link
              key={text}
              to={`/${text === "Home" ? "" : text.toLowerCase()}`}
              className="block px-4 py-2 text-light-dark hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
