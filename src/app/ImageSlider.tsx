"use client";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
// Change the slide title color to white by updating the text color utility class in the h2 element.
// In the component below, replace `text-green-700` with `text-white` in the h2 className.

const slides = [
  {
    title: "Fresh Groceries Every Day!" ,
    description: "Get the best deals on fresh fruits, vegetables, and more.",
    image: "/assets/lom1.jpg",
  },
  {
    title: "Supermarket Savings",
    description: "Save big on your weekly shopping with our special offers.",
    image: "/assets/lom2.jpg",
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-8 mb-12  rounded-lg shadow-lg overflow-hidden">
      <div className="relative min-h-[350px] w-full flex items-stretch">
        {/* Image as background */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={slides[current].image} 
            alt={slides[current].title} 
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        {/* Overlay for text */}
        <div className="relative z-10 flex flex-col justify-center items-start h-full w-full sm:w-1/2 p-8 bg-gradient-to-r from-black/70 via-black/40 to-transparent">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 drop-shadow-lg">{slides[current].title}</h2>
          <p className="text-lg sm:text-xl text-gray-100 mb-4 drop-shadow">{slides[current].description}</p>
        </div>
      </div>
      {/* Controls */}
      <div className="flex justify-center gap-2 pb-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-200 focus:outline-none ${
              current === idx ? 'bg-white' : 'bg-transparent'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 