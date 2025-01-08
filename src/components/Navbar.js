import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Branding - ShivFolio Logo */}
        <strong className="text-3xl font-extrabold text-white hover:text-red-500 transition-colors duration-300">
          <span className="text-red-500">S</span>hiv
          <span className="text-red-500">F</span>olio
        </strong>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center px-3 py-2 border rounded text-red-500 border-red-500 hover:text-white hover:border-white transition-colors duration-300"
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
        <ul className="hidden lg:flex space-x-8">
          <li>
            <a
              href="#home"
              className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-16 right-0 w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col space-y-4 p-6">
            <li>
              <a
                href="#home"
                className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;