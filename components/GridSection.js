"use client";

import React from "react";

const cardData = [
  {
    title: "About LED Linear",
    image: "/images/about.jpg",
  },
  {
    title: "Sustainability",
    image: "/images/sustainability.jpg",
    highlight: true,
  },
  {
    title: "Uniqueness",
    image: "/images/uniqueness.jpg",
  },
  {
    title: "Technology",
    image: "/images/technology.jpg",
  },
  {
    title: "Our passion",
    image: "/images/passion.jpg",
  },
  {
    title: "Awards",
    image: "/images/awards.jpg",
  },
];

const GridSection = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className={`shadow-md cursor-pointer transition-transform duration-300 hover:scale-105`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-52 object-cover"
            />
            <div className="flex justify-between items-center p-4 bg-gray-100">
              <span
                className={`text-base font-medium ${
                  card.highlight ? "text-yellow-600" : "text-gray-700"
                }`}
              >
                {card.title}
              </span>
              <span className="text-yellow-500 text-xl">&gt;</span>
            </div>
          </div>
        ))}
      </div>

      {/* Close Button */}
      <div className="absolute top-4 right-6 text-yellow-500 text-4xl cursor-pointer hover:rotate-90 transition-transform duration-300">
        &#x2715;
      </div>
    </div>
  );
};

export default GridSection;
