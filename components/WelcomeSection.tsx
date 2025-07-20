"use client";

import Image from "next/image";

interface WelcomeSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  features: string[];
  reverse?: boolean; // Optional: Flip image & text sides
}

export default function WelcomeSection({
  title,
  description,
  imageSrc,
  features,
  reverse = false,
}: WelcomeSectionProps) {
  return (
    <section className="bg-[#181a1e] text-white py-20 px-6">
      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left: Image with triangle */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
          <Image
            src={imageSrc}
            alt="Section Image"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[140px] border-l-yellow-400 border-t-[140px] border-t-transparent" />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">
            {title}
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">{description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 font-semibold tracking-wide uppercase"
              >
                <span className="text-yellow-400 text-lg">•</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
