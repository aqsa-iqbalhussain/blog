"use client";
import Link from 'next/link';
import React, { useState } from 'react';
// Correct way to import the default exported component



const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='bg-white z-50 sticky top-0'>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center bg-slate-300">
          
          {/* Logo Section - Align to the left */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 flex-grow-0">
            <span className="ml-3 text-2xl">Aqsa&apos;s Blog</span>
          </a>

          {/* Mobile Menu Button (Hamburger Icon or Close Icon) - Align to the left */}
          <button
            className="md:hidden focus:outline-none text-gray-700 absolute right-4"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen} // Accessibility improvement
          >
            {/* Hamburger Icon or Close (X) Icon */}
            {isMobileMenuOpen ? (
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-black transform rotate-45 translate-y-1"></div>
                <div className="w-6 h-0.5 bg-black transform -rotate-45 -translate-y-1"></div>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
              </div>
            )}
          </button>

          {/* Desktop Menu - Align to the right */}
          <nav className="hidden md:flex flex-wrap items-center text-base justify-end ml-auto">
            <Link href="/" className="mr-5 hover:text-blue-800 text-lg text-black">Home</Link>
            <Link href="#blogs" className="mr-5 hover:text-blue-800 text-lg text-black">Blog</Link>
            <Link href="#contacts" className="mr-5 hover:text-blue-800 text-lg text-black">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Dropdown (Visible only when hamburger menu is toggled) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-slate-300 py-4 mt-2"> {/* Add margin-top (mt-2) to give space below the hamburger */}
          <Link href="/" className="mb-3 hover:text-blue-800 text-lg text-black">Home</Link>
          <Link href="#blogs" className="mb-3 hover:text-blue-800 text-lg text-black">Blog</Link>
          <Link href="#contacts" className="mb-3 hover:text-blue-800 text-lg text-black">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
