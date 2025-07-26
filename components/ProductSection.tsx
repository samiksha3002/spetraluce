"use client";

import { useState } from "react";
import Sidebar from "./Sidebar"; // Optional: if you're keeping sidebar as component
import OutdoorLuminaires from "./ProductContent/OutdoorLuminaires";
import DarkSky from "./ProductContent/DarkSky"; // Assuming you create this component later
import IndoorLuminaires from "./ProductContent/IndoorLuminaires"; // Assuming you create this component later
import FlexibleLightEngine from "./ProductContent/FlexibleLightEngine"; // Assuming you create this component later

// ... import other content components as you build them

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
      // Add cases for each item as you create components
      default:
        return (
          <div className="text-gray-400 italic p-4">
            No content available for this section.
          </div>
        );
    }
  };

  return (
    <section className="bg-[#181a1e] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 border-r border-[#2a2a2a] pr-4 space-y-4">
          <h3 className="text-[#d6844a] font-semibold uppercase">
            Product Categories
          </h3>
          {sidebarItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActive(item)}
              className={`uppercase text-sm tracking-wide cursor-pointer px-2 py-1 rounded 
                ${
                  active === item
                    ? "bg-[#e68c4c] text-black font-semibold"
                    : "text-gray-300 hover:text-[#e79255]"
                }`}
            >
              {item}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <div className="w-full md:w-3/4 pl-4 border-l border-[#2a2a2a]">
          {renderContent()}
        </div>
      </div>
    </section>
  );
}
