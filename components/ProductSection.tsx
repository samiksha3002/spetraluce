// components/ProductSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const M: any = motion;

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

export default function ProductSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-neutral-900 to-black text-white py-24 px-6 space-y-32 overflow-hidden">
      {/* Section Heading */}
     

      {/* Categories */}
      {categories.map((cat, index) => (
        <M.div
          key={cat.name}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className={`grid md:grid-cols-2 gap-14 items-center max-w-6xl mx-auto ${
            index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image Block */}
          <div className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl group">
            <M.div
              initial={{ scale: 1.15, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${cat.image})`,
              }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-500" />
            </M.div>

            {/* Animated Corner Lines */}
            <M.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-orange-500 to-amber-400"
            />
            <M.span
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-[3px] bg-gradient-to-b from-orange-500 to-amber-400"
            />
            <M.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute bottom-0 right-0 h-[3px] bg-gradient-to-l from-orange-500 to-amber-400"
            />
            <M.span
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute bottom-0 right-0 w-[3px] bg-gradient-to-t from-orange-500 to-amber-400"
            />
          </div>

          {/* Info Text */}
          <M.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start space-y-5"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  {cat.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              {cat.desc}
            </p>
            <Link
              href={`/products/${cat.slug}`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 transition-all rounded-full font-semibold shadow-md hover:shadow-orange-500/40 tracking-wide group"
            >
              Explore {cat.name}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </M.div>
        </M.div>
      ))}
    </section>
  );
}
