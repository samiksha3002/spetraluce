"use client";

import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "VISION",
    content:
      "We are the innovative market leader for linear light. Our tailor-made lighting solutions from our own manufacture enrich outstanding projects worldwide. Our values lead the way."
  },
  {
    title: "MISSION",
    content:
      "We speak light. With curiosity, willingness to change and passion, our innovative technology enables ground breaking new design ideas, building bridges between architectural design elegance and technical implementation. Designed - Engineered - Made in Germany."
  },
  {
    title: "OUR PURPOSE",
    content:
      "Our love for light inspires our actions. Our employees are at the heart of it all: expertise and passion are part of our DNA. Sustainability, mutual growth, and highest quality drive our future. Honest dialogue with our partners leads to continuous improvement and value for all stakeholders."
  }
];

export default function VisionMissionElegant() {
  return (
    <div className="min-h-screen flex bg-black text-gray-100 font-sans overflow-hidden">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 px-8 lg:px-20 py-16 flex flex-col justify-center space-y-32 z-10 relative">
        {sections.map((sec, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}
            className="relative"
          >
            {/* Heading */}
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffaa00] to-[#ffd966] uppercase tracking-widest mb-6">
              {sec.title}
            </h2>

            {/* Decorative Line */}
            <div className="w-28 h-[3px] rounded-full bg-gradient-to-r from-[#ffaa00] to-transparent mb-6"></div>

            {/* Paragraph */}
            <p className="text-lg lg:text-xl leading-relaxed lg:leading-loose text-gray-200">
              {sec.content}
            </p>

            {/* Optional small accent glow */}
            <div className="absolute -top-4 -left-4 w-4 h-4 bg-[#ffaa00] rounded-full blur-lg opacity-30"></div>
          </motion.section>
        ))}
      </div>

      {/* Right Section Video */}
      <div className="hidden lg:block w-1/2 relative">
        <video
          src="/your-video.mp4" // Replace with your video path
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
