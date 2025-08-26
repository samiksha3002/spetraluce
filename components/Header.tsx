"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  HTMLMotionProps,
  MotionProps,
} from "framer-motion";

const MotionDiv = motion.div as React.FC<
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/70 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image
              src="/spetraluce-1.png"
              alt="Spetraluce Logo"
              width={180}
              height={80}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group transition duration-200"
            >
              <span className="hover:text-yellow-400 transition duration-300">
                {link.name}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden z-50"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <MotionDiv
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 px-6 pt-4 pb-8 space-y-5"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-lg font-medium hover:text-yellow-400 transition"
              >
                {link.name}
              </Link>
            ))}
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  );
}
