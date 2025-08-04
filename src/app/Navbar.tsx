"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const scrollToContact = () => {
  const contactElement = document.getElementById('contact');
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-[#4CA809] shadow-md py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className={`flex items-center text-2xl font-bold transition-colors cursor-pointer ${scrolled ? 'text-[#4CA809] hover:text-green-700' : 'text-white hover:text-green-200'}`}>
              <span className="mr-2">🛒</span>
              Lomyad Supermarket
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className={`font-medium transition-colors cursor-pointer ${scrolled ? 'text-gray-700 hover:text-[#4CA809]' : 'text-white hover:text-green-200'}`}>Home</span>
            </Link>
            <Link href="/gallery">
              <span className={`font-medium transition-colors cursor-pointer ${scrolled ? 'text-gray-700 hover:text-[#4CA809]' : 'text-white hover:text-green-200'}`}>Gallery</span>
            </Link>
            <Link href="/aboutus">
              <span className={`font-medium transition-colors cursor-pointer ${scrolled ? 'text-gray-700 hover:text-[#4CA809]' : 'text-white hover:text-green-200'}`}>About</span>
            </Link>
            <button
              onClick={scrollToContact}
              className={`font-medium transition-colors cursor-pointer ${scrolled ? 'text-gray-700 hover:text-[#4CA809]' : 'text-white hover:text-green-200'}`}
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!menuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={scrolled ? "#4CA809" : "white"}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={scrolled ? "#4CA809" : "white"}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} ${scrolled ? 'bg-white' : 'bg-[#4CA809]'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <span className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-700 hover:bg-green-50 hover:text-[#4CA809]' : 'text-white hover:bg-green-700'}`}>Home</span>
          </Link>
          <Link href="/gallery">
            <span className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-700 hover:bg-green-50 hover:text-[#4CA809]' : 'text-white hover:bg-green-700'}`}>Gallery</span>
          </Link>
          <Link href="/aboutus">
            <span className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-700 hover:bg-green-50 hover:text-[#4CA809]' : 'text-white hover:bg-green-700'}`}>About</span>
          </Link>
          <button
            onClick={scrollToContact}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-700 hover:bg-green-50 hover:text-[#4CA809]' : 'text-white hover:bg-green-700'}`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}