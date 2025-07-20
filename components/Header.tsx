"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-black/60 text-white">
      <div className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/spetraluce-1.png"
              alt="Spetraluce Logo"
              width={210}
              height={100}
            />
          </div>
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 text-lg font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-yellow-400 transition duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden z-50"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 text-white p-6 space-y-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-xl font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
