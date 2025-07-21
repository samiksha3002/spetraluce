"use client";

import { useState } from "react";
import Image from "next/image";

const TABS = [
  {
    title: "LIGHT DESIGNER",
    image: "/Call1.jpg", // Replace with your actual image path
    content: `Are you working to design a new building and have you identified an interesting product on our catalogue or using the online configurator?

Spetraluce has got a team of light artists with a strong propensity for new technologies.

Unlike other manufacturers, we are able to create unique and custom-made LED lighting solutions Made in Italy to ensure flexible design and production for you as a lighting professional or contractor.

In other words, this means that you can develop, together with our team of architects and light designers, your customized Led project and see it realized in a short time.`,
  },
  {
    title: "LIGHT ENGINEER",
    image: "/Call2.jpg",
    content: `We work closely with engineers to provide highly efficient lighting layouts with precise photometric results.

Our team ensures every luminaire we suggest supports sustainable energy practices and installation feasibility.`,
  },
  {
    title: "ARCHITECTS",
    image: "/call3.jpg",
    content: `For architects, our LED solutions provide creative freedom with technical robustness. Our portfolio of minimal and expressive lighting empowers bold design visions to come alive.`,
  },
];

export default function WorkWithSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#181a1e] text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-center">
          WE WORK WITH <span className="text-yellow-400">.</span>
        </h2>

        {/* Tab Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          {TABS.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 text-sm md:text-base font-bold uppercase transition-all duration-200 ${
                activeTab === idx
                  ? "bg-yellow-400 text-black"
                  : "bg-[#25272b] text-white hover:bg-yellow-500 hover:text-black"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div className="aspect-video relative w-full h-[300px] md:h-[400px]">
            <Image
              src={TABS[activeTab].image}
              alt={TABS[activeTab].title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>

          {/* Description */}
          <div className="text-gray-400 whitespace-pre-line text-sm md:text-base leading-relaxed">
            {TABS[activeTab].content}
          </div>
        </div>
      </div>
    </section>
  );
}
