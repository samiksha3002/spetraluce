"use client";

import Image from "next/image";

interface AboutHeroProps {
  title?: string;
  breadcrumb?: string;
  image?: string;
}

export default function AboutHero({
  title = "About Us",
  breadcrumb = "About Us",
  image = "/about-hero.jpg", // default fallback image
}: AboutHeroProps) {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] text-white flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={`${title} Background`}
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold uppercase">{title}</h1>
        <p className="mt-2 text-sm tracking-wide">
          <span className="text-white">Home</span> -{" "}
          <span className="text-yellow-400 font-semibold">{breadcrumb}</span>
        </p>
      </div>

      {/* Yellow Curve */}
      <div className="absolute right-0 top-0 w-0 h-0 border-t-[400px] border-t-transparent border-l-[200px] border-l-yellow-400 z-20 hidden md:block" />
    </section>
  );
}
