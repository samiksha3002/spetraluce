"use client";

export default function ServiceHero() {
  return (
    <section className="relative bg-[#181a1e] text-white py-24 px-6 overflow-hidden">
      {/* Topography-style background pattern (SVG) */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/bgs.svg')", // replace with actual path to your pattern
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
          OUR SERVICES
          <br />
          LED SOLUTIONS
          <span className="text-yellow-400">.</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg mt-6 leading-relaxed">
          We distinguish ourselves on the market not only for our 100% Made in
          Italy and highly customizable LED lighting solutions, also because our
          proposal is supported by a wide range of services led that help to
          offer you a complete and satisfying experience.
        </p>
      </div>
    </section>
  );
}
