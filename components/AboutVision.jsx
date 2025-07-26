"use client";
import React from "react";

export default function AboutVision() {
  return (
    <section className="w-full h-screen flex flex-col lg:flex-row bg-black text-white overflow-hidden">
      {/* Left Side: All Content */}
      <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center overflow-y-auto space-y-10">
        {/* VISION */}
        <div>
          <h2 className="text-yellow-500 text-3xl font-semibold mb-2 tracking-wider">
            VISION
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We are the innovative market leader for linear light. Our
            tailor-made lighting solutions from our own manufacture enrich
            outstanding projects worldwide. Our values lead the way.
          </p>
        </div>

        {/* MISSION */}
        <div>
          <h2 className="text-yellow-500 text-3xl font-semibold mb-2 tracking-wider">
            MISSION
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We speak light. With curiosity, willingness to change and passion,
            our innovative technology enables ground breaking new design ideas
            building bridges between architectural design elegance and actual
            technical implementation. Designed - Engineered - Made in Germany.
            Together with our partners, we push the boundaries of the design
            limitations, act sustainably and live up to our ethical and social
            responsibility.
          </p>
        </div>

        {/* OUR PURPOSE */}
        <div>
          <h2 className="text-yellow-500 text-3xl font-semibold mb-2 tracking-wider">
            OUR PURPOSE
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our love for light inspires our actions. Our employees are at the
            heart of it all: expertise and passion are part of our DNA. The
            combination of sustainability, mutual growth and the highest quality
            is the impetus for our future. Open an honest dialog with our
            partners will lead to continuous improvements and value brought to
            all our stakeholders and projects.
          </p>
        </div>
      </div>

      {/* Right Side: Video */}
      <div className="w-full lg:w-1/2 h-screen flex items-center justify-center">
        <video
          className="w-[90%] h-[90%] object-contain rounded-xl shadow-lg"
          src="/visionvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
}
