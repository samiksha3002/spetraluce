"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    name: "Indoor",
    image: "/pop5.jpg",
    slug: "indoor",
    desc: "Elegant indoor lighting solutions to elevate interiors with style and innovation.",
  },
  {
    name: "Outdoor",
    image: "/pop2.jpg",
    slug: "outdoor",
    desc: "Durable outdoor lighting crafted for landscapes, facades, and open spaces.",
  },
  {
    name: "Industrial",
    image: "/industryi.jpg",
    slug: "industrial",
    desc: "Robust industrial lighting designed for factories, warehouses, and large-scale projects.",
  },
];

export default function AlternateCategories() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 space-y-32">
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-wide"
      >
        Explore Our Categories
      </motion.h1>

      {categories.map((cat, index) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto ${
            index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image with enhanced corner lines */}
          <div className="relative w-full h-80 md:h-[400px]">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-orange-500"
              style={{
                backgroundImage: `url(${cat.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />
            </motion.div>

            {/* Corner Lines */}
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 h-[4px] bg-orange-500"
            />
            <motion.span
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-[4px] bg-orange-500"
            />
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute bottom-0 right-0 h-[4px] bg-orange-500"
            />
            <motion.span
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute bottom-0 right-0 w-[4px] bg-orange-500"
            />
          </div>

          {/* Info Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
              <span className="text-orange-500">{cat.name}</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              {cat.desc}
            </p>
            <Link
              href={`/gold/${cat.slug}`} // 👈 redirect ho jayega correct page par
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 transition-all rounded-full font-semibold shadow-md hover:shadow-orange-500/40 tracking-wide"
            >
              Explore {cat.name}
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
