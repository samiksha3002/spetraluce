"use client";

import React from "react";

const VisionMission = () => {
  return (
    <div className="min-h-screen flex bg-black text-white font-sans">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 px-8 lg:px-20 py-16 space-y-20">
        <section>
          <h2 className="text-4xl font-bold text-[#ffaa00] tracking-widest mb-4">
            VISION
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We are the innovative market leader for linear light. Our
            tailor-made lighting solutions from our own manufacture enrich
            outstanding projects worldwide. Our values lead the way.
          </p>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-[#ffaa00] tracking-widest mb-4">
            MISSION
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We speak light. With curiosity, willingness to change and passion,
            our innovative technology enables ground breaking new design ideas
            building bridges between architectural design elegance and actual
            technical implementation. Designed - Engineered - Made in Germany.
            Together with our partners, we push the boundaries of the design
            limitations, act sustainably and live up to our ethical and social
            responsibility.
          </p>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-[#ffaa00] tracking-widest mb-4">
            OUR PURPOSE
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our love for light inspires our actions. Our employees are at the
            heart of it all: expertise and passion are part of our DNA. The
            combination of sustainability, mutual growth and the highest quality
            is the impetus for our future. Open an honest dialog with our
            partners will lead to continuous improvements and value brought to
            all our stakeholders and projects.
          </p>
        </section>
      </div>

      {/* Right Side Image or Animation */}
      <div className="hidden lg:block w-1/2 relative">
        <img
          src="/dna-animation.png" // Replace with the actual path to your image
          alt="DNA Animation"
          className="w-full h-full object-cover"
        />
        {/* Optional right-side vertical menu */}
        <div className="absolute top-20 right-5 space-y-6 text-sm font-medium tracking-wide">
          <p className="text-[#ffaa00]">Vision & Mission</p>
          <p className="text-gray-400">Who we are</p>
          <p className="text-gray-400">Other topics</p>
          <div className="w-[2px] h-24 bg-[#ffaa00] ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
