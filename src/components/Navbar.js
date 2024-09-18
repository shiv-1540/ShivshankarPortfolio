import React from 'react';

function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-zinc-900 text-white py-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center px-6">
      <strong className="text-3xl font-extrabold text-white flex items-center">
        <span className="text-red-500 text-4xl">S</span>
        hiv
        <span className="text-red-500 text-4xl">F</span>
        olio
      </strong>
      <ul className="flex space-x-8">
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
  </nav>
  
  );
}

export default Navbar;

