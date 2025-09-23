"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Welcome to Lomyad Supermarket",
    description: "Experience a modern shopping environment with quality products and exceptional service for your family.",
    image: "/assets/home1.jpg",
  },
  {
    title: "Fresh Groceries Every Day!",
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
  const [fade, setFade] = useState(true);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setFade(true);
    }, 200);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [current]);
// ... existing code ...
return (
  <div className="relative w-full mb-12 rounded-none shadow-2xl overflow-hidden group">
    {/* Image */}
    <div className={`relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
      <Image
        src={slides[current].image}
        alt={slides[current].title}
        fill
        className="object-cover w-full h-full"
        sizes="100vw"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center items-start p-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">{slides[current].title}</h2>
        <p className="text-lg sm:text-2xl text-gray-100 mb-4 drop-shadow">{slides[current].description}</p>
      </div>
    </div>
    {/* Navigation Arrows */}
    <button
      onClick={prevSlide}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-20 transition-opacity opacity-0 group-hover:opacity-100"
      aria-label="Previous Slide"
    >
      <FaChevronLeft size={24} />
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-20 transition-opacity opacity-0 group-hover:opacity-100"
      aria-label="Next Slide"
    >
      <FaChevronRight size={24} />
    </button>
    {/* Slide Indicators */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
      {slides.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrent(idx)}
          className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-200 focus:outline-none ${
            current === idx ? "bg-white" : "bg-transparent"
          }`}
          aria-label={`Go to slide ${idx + 1}`}
        />
      ))}
    </div>
  </div>
);
// ... existing code ...
}