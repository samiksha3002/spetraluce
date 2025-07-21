"use client";

import Image from "next/image";

export default function ChooseSpetraluce() {
  const reasons = [
    {
      title: "We Think Differently",
      desc: "Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum.",
    },
    {
      title: "Did High Quality Projects",
      desc: "Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum.",
    },
    {
      title: "Super Expert Team Members",
      desc: "Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum.",
    },
  ];

  return (
    <section className="bg-[#181a1e] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text content (moved up) */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase leading-tight">
            See Why You Should <br />
            Choose Spetraluce
            <span className="text-yellow-400">.</span>
          </h2>

          <div className="mt-10 space-y-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2e2f31] text-yellow-400 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2L9 13.285 3.715 8l-2.285 2.285 7.57 7.57L22.57 4.285z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-md md:text-lg font-bold uppercase">
                    {reason.title}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image and overlay (moved down) */}
        <div className="relative w-full max-w-[500px] aspect-square mx-auto rounded-full overflow-hidden">
          {/* Main image */}
          <Image
            src="/world.jpg"
            alt="Chandelier"
            fill
            className="object-cover"
          />

          {/* Orange abstract overlay */}

          {/* Play button */}
          <div className="absolute bottom-8 right-8 z-20">
            <button className="relative w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-black shadow-xl hover:scale-105 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="absolute w-full h-full rounded-full bg-yellow-500 opacity-30 blur-md scale-125 z-[-1]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
