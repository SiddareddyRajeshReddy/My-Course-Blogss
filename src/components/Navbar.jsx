import React, { useState } from 'react';
import { useEffect, useRef } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [course, setName] = useState("")
  const handleChange = (e) => {
    setName(e.target.value)
  }
  return (
    <nav className="bg-blue-300 shadow-md fixed w-[100vw] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-blue-800">MyBlogss</a>
            <div className="hidden md:flex flex-1 justify-center px-4">
              <input
                type="text"
                onChange={handleChange}
                value={course}
                placeholder="Search..."
                className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64  bg-white"
              />
            </div>
          </div>


          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/resources   " className="text-gray-700 hover:text-blue-600">Resources</a>
            <a href="/" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              style={{ cursor: 'pointer' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
          <input
            type="text"
            onChange={handleChange}
            value={course}
            placeholder="Search..."
            className="bg-white w-[80%] px-3 py-1 rounded-md border border-gray-300 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <a href="/" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="/resources" className="block text-gray-700 hover:text-blue-600">Resources</a>
          <a href="/" className="block text-gray-700 hover:text-blue-600">Services</a>
          <a href="/contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
