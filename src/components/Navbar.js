import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-zinc-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Branding - ShivFolio Logo */}
        <strong className="text-3xl font-extrabold text-white">
          <span className="text-red-500 text-4xl">S</span>hiv
          <span className="text-red-500 text-4xl">F</span>olio
        </strong>

        {/* Mobile Menu Button (aligned right on small screens) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center px-3 py-2 border rounded text-red-500 border-red-500 hover:text-white hover:border-white"
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
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 ">
          <li>
            <a href="#home" className="text-lg font-medium hover:text-red-400 transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#aboutme" className="text-lg font-medium hover:text-red-400 transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-lg font-medium hover:text-red-400 transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="text-lg font-medium hover:text-red-400 transition-colors duration-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#exp" className="text-lg font-medium hover:text-red-400 transition-colors duration-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg font-medium hover:text-red-400 transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-5 right-0 w-1/2 bg-zinc-900 text-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <a href="#home" className="text-lg font-medium hover:text-red-400 transition-colors duration-300" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#aboutme" className="text-lg font-medium hover:text-red-400 transition-colors duration-300" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-lg font-medium hover:text-red-400 transition-colors duration-300" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="text-lg font-medium hover:text-red-400 transition-colors duration-300" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#exp" className="text-lg font-medium hover:text-red-400 transition-colors duration-300" onClick={toggleMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg font-medium hover:text-red-400 transition-colors duration-300" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
