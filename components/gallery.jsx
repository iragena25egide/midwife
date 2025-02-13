import React, { useState } from "react";
import { FaChevronLeft, FaAngleRight } from "react-icons/fa6";


const images = [
  "/image/sleeping.png",
  "/image/carry.png",
  "/image/sleepings.png",
  "/image/pregnant.png",
  "/image/feet.png"
];

export default function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full h-full flex transition-all duration-700">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-serif text-center px-6">
        <p className="font-bold">Take The Next Steps On Your Birth Journey</p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-3 rounded-full hover:bg-white/50 transition"
      >
        <FaChevronLeft className="text-white" size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-3 rounded-full hover:bg-white/50 transition"
      >
        <FaAngleRight className="text-white" size={32} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
