"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

const products = {
  "Outdoor Luminaires": {
    title: "FUSION",
    isNew: true,
    image: "/fusion.jpg",
    descBold: "Built to be small. Engineered to perform.",
    desc: `FUSION redefines compact outdoor lighting with maximum performance and durability in smallest form factor. We combined our core Technologies Nano optics, PU encapsulation, and Tj Away™ to deliver unmatched precision and efficiency.`,
    link: "fusion-landingpage",
  },
  DarkSky: {
    title: "DARKSKY",
    isNew: true,
    image: "/darksky.jpg",
    descBold: "Protecting the Night. Perfecting the Light.",
    desc: `With ADONIS ARCHITECTURAL IP67 and VENUS TC Optics, we proudly present the world's first linear set of luminaires with official DarkSky certification.`,
    link: "darksky-landingpage",
  },
  // Add content or fallback for others if needed
};

export default function ProductSection() {
  const [active, setActive] = useState("Outdoor Luminaires");
  const selected = products[active];

  return (
    <section className="bg-[#181a1e] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 border-r border-[#2a2a2a] pr-4 space-y-4">
          <h3 className="text-yellow-400 font-semibold uppercase">
            New Products
          </h3>
          {sidebarItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActive(item)}
              className={`uppercase text-sm tracking-wide cursor-pointer px-2 py-1 rounded 
                ${
                  active === item
                    ? "bg-yellow-400 text-black font-semibold"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
            >
              {item}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <div className="w-full md:w-3/4 pl-4 border-l border-[#2a2a2a]">
          {selected ? (
            <div className="grid md:grid-cols-2 gap-8">
              <Image
                src={selected.image}
                alt={selected.title}
                width={600}
                height={300}
                className="rounded-lg"
              />
              <div>
                <h2 className="text-2xl font-bold tracking-wide uppercase">
                  {selected.title}
                  {selected.isNew && (
                    <span className="ml-2 text-[12px] text-yellow-400 font-semibold bg-[#26282c] px-2 py-[2px] rounded">
                      NEW
                    </span>
                  )}
                </h2>
                <p className="mt-2 text-gray-300 font-semibold">
                  {selected.descBold}
                </p>
                <p className="text-sm text-gray-400 mt-2">{selected.desc}</p>
                <Link
                  href={`/${selected.link}`}
                  className="inline-block mt-4 text-yellow-400 text-sm font-semibold hover:underline"
                >
                  &gt; {selected.title.toUpperCase()} LANDINGPAGE
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-gray-400 italic">
              No product data available for this section.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
