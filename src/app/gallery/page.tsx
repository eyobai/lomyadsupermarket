"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../Navbar";
const images = [
  { src: "/assets/lom1.jpg", alt: "Supermarket 1" },
  { src: "/assets/lom2.jpg", alt: "Supermarket 2" },
  // Add more images here if needed
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<null | number>(null);

  return (
<div>

<Navbar/>
    <div className="min-h-screen bg-white py-8 px-2 sm:py-12 sm:px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-green-800 mb-6 sm:mb-8">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 max-w-5xl mx-auto">
        {images.map((img, idx) => (
          <button
            key={img.src}
            className="group relative rounded-lg overflow-hidden shadow-lg focus:outline-none"
            onClick={() => setSelected(idx)}
            aria-label={`View ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={350}
              className="object-cover w-full h-32 xs:h-40 sm:h-56 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        ))}
      </div>

      {/* Modal/Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all px-2"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-lg sm:max-w-2xl mx-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              width={1000}
              height={700}
              className="object-contain w-full h-[40vh] xs:h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-lg shadow-2xl bg-white"
              priority
            />
          </div>
        </div>
      )}
      <div className="h-8 sm:h-12" />
    </div>
    </div>
  );
} 