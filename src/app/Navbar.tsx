"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-[#4CA809] shadow-md py-4 px-4 sm:px-8 flex flex-wrap items-center justify-between">
      <div className="text-2xl font-bold text-white">Lomyad Supermarket</div>
      {/* Hamburger Icon */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Menu Links */}
      <ul
        className={`flex-col sm:flex-row flex gap-4 sm:gap-6 text-base font-medium flex-wrap sm:flex sm:items-center sm:static absolute top-full left-0 w-full sm:w-auto bg-[#4CA809] sm:bg-transparent shadow-md sm:shadow-none transition-all duration-200 z-40 ${menuOpen ? 'flex' : 'hidden sm:flex'}`}
      >
        <li>
          <Link href="/">
            <span className="text-white hover:text-green-600 transition-colors cursor-pointer block py-2 sm:py-0 px-4 sm:px-0">Home</span>
          </Link>
          <hr className="block sm:hidden border-t border-white/20 mx-4" />
        </li>
        <li>
          <Link href="#products">
            <span className="text-white hover:text-green-600 transition-colors cursor-pointer block py-2 sm:py-0 px-4 sm:px-0">Products</span>
          </Link>
          <hr className="block sm:hidden border-t border-white/20 mx-4" />
        </li>
        <li>
          <Link href="#about">
            <span className="text-white hover:text-green-600 transition-colors cursor-pointer block py-2 sm:py-0 px-4 sm:px-0">About</span>
          </Link>
          <hr className="block sm:hidden border-t border-white/20 mx-4" />
        </li>
        <li>
          <Link href="#contact">
            <span className="text-white hover:text-green-600 transition-colors cursor-pointer block py-2 sm:py-0 px-4 sm:px-0">Contact</span>
          </Link>
          
        </li>
      </ul>
    </nav>
  );
} 