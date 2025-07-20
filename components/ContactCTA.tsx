"use client";

import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-yellow-400 via-yellow-500 to-yellow-400 text-black py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text */}
        <h2 className="text-3xl md:text-5xl font-bold uppercase text-center md:text-left leading-tight">
          We're Ready to Bring Bigger <br className="hidden md:block" />&
          Stronger Projects
        </h2>

        {/* Button */}
        <Link
          href="/contact"
          className="relative inline-block mt-8 md:mt-0 bg-[#181a1e] text-white uppercase text-sm tracking-wide font-semibold px-6 py-4 rounded-md overflow-hidden group"
        >
          <span className="relative z-10">Contact with us</span>
          <span className="absolute top-0 right-0 w-6 h-full bg-gray-700 skew-x-12 origin-right z-0 transition-transform duration-300 group-hover:scale-x-125" />
        </Link>
      </div>
    </section>
  );
}
