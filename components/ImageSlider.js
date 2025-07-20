"use client";

import React, { useState } from "react";

const images = [
  "/slider/slide1.jpg",
  "/slider/slide2.jpg",
  "/slider/slide3.jpg",
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(1);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full bg-black py-10">
      {/* Image */}
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="mx-auto max-w-[90%] h-[400px] object-cover rounded-md shadow-lg"
      />

      {/* Controls */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-6 text-white text-lg">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border-2 border-yellow-500 flex items-center justify-center text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
        >
          &#8592;
        </button>
        <span>{`${current + 1}/${images.length}`}</span>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border-2 border-yellow-500 flex items-center justify-center text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
