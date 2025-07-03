"use client";
import Image from "next/image";
import { useState } from "react";
// Change the slide title color to white by updating the text color utility class in the h2 element.
// In the component below, replace `text-green-700` with `text-white` in the h2 className.

const slides = [
  {
    title: "Fresh Groceries Every Day!" ,
    description: "Get the best deals on fresh fruits, vegetables, and more.",
    image: "/file.svg",
  },
  {
    title: "Supermarket Savings",
    description: "Save big on your weekly shopping with our special offers.",
    image: "/window.svg",
  },
  {
    title: "Quality You Can Trust",
    description: "We bring you the highest quality products at the best prices.",
    image: "/globe.svg",
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full mt-8 mb-12 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between p-6 min-h-[350px] w-full">
        {/* Left: Text */}
        <div className="flex-1 text-left pr-0 sm:pr-8 mb-6 sm:mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{slides[current].title}</h2>
          <p className="text-gray-700 dark:text-gray-900 text-base sm:text-lg">{slides[current].description}</p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <Image src={slides[current].image} alt={slides[current].title} width={180} height={180} className="object-contain" />
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