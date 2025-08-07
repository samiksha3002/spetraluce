"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your dynamic content components
import OutdoorLuminaires from "./ProductContent/OutdoorLuminaires";
import IndoorLuminaires from "./ProductContent/IndoorLuminaires";
import DarkSky from "./ProductContent/DarkSky";
import FlexibleLightEngine from "./ProductContent/FlexibleLightEngine";
import Accessories from "./ProductContent/Accessories";

const sidebarItems = [
  "Outdoor Luminaires",
  "Indoor Luminaires",
  "DarkSky",
  "Smart Lighting & Controls",
  "Flexible Light Engine",
  "Mix & Match (DIY Luminaires)",
  "Design Luminaires",
  "Accessories",
  "Products A-Z",
  "Discontinued Products A-Z",
];

export default function ProductSection() {
  const [active, setActive] = useState("Outdoor Luminaires");

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: "free-snap",
    slides: {
      perView: "auto",
      spacing: 16,
    },
    renderMode: "performance",
  });

  const renderContent = () => {
    switch (active) {
      case "Outdoor Luminaires":
        return <OutdoorLuminaires />;
      case "Indoor Luminaires":
        return <IndoorLuminaires />;
      case "Flexible Light Engine":
        return <FlexibleLightEngine />;
      case "DarkSky":
        return <DarkSky />;
      case "Accessories":
        return <Accessories />;
      default:
        return (
          <div className="text-gray-400 italic p-4">
            No content available for this section.
          </div>
        );
    }
  };

  return (
    <section className="bg-[#181a1e] text-white py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Navigation Arrows + Carousel */}
        <div className="relative">
          {/* Arrows */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-2 rounded-full z-10"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-2 rounded-full z-10"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          {/* Carousel Tabs */}
          <div
            ref={sliderRef}
            className="keen-slider overflow-x-auto px-8 py-4 scrollbar-hide"
          >
            {sidebarItems.map((item, idx) => {
              const isProductsAZ = item === "Products A-Z";
              const isDiscontinuedAZ = item === "Discontinued Products A-Z";

              return (
                <div
                  key={idx}
                  className="keen-slider__slide px-2"
                  style={{ minWidth: "max-content" }}
                >
                  {isProductsAZ ? (
                    <Link href="/products/A-Z" passHref>
                      <button
                        className="px-6 py-3 rounded-full text-sm md:text-base font-semibold tracking-wide border transition-all duration-300 whitespace-nowrap border-gray-600 text-gray-300 hover:border-orange-400 hover:text-orange-300"
                        style={{ minWidth: "200px" }}
                      >
                        {item}
                      </button>
                    </Link>
                  ) : isDiscontinuedAZ ? (
                    <Link href="/Discountinued" passHref>
                      <button
                        className="px-6 py-3 rounded-full text-sm md:text-base font-semibold tracking-wide border transition-all duration-300 whitespace-nowrap border-gray-600 text-gray-300 hover:border-orange-400 hover:text-orange-300"
                        style={{ minWidth: "200px" }}
                      >
                        {item}
                      </button>
                    </Link>
                  ) : (
                    <button
                      onClick={() => setActive(item)}
                      className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold tracking-wide border transition-all duration-300 whitespace-nowrap ${
                        active === item
                          ? "bg-orange-500 border-orange-400 text-black shadow-lg"
                          : "border-gray-600 text-gray-300 hover:border-orange-400 hover:text-orange-300"
                      }`}
                      style={{ minWidth: "200px" }}
                    >
                      {item}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="bg-[#1f2125] rounded-xl shadow-xl p-6 md:p-10 transition-all duration-300">
          {renderContent()}
        </div>
      </div>
    </section>
  );
}
