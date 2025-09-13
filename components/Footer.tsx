"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 pt-20 pb-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
        
        {/* Left - Logo & Tagline */}
        <div className="flex flex-col items-start">
          <Image
            src="/spetraluce-1.png"
            alt="Spetraluce Logo"
            width={200}
            height={90}
            className="mb-6"
          />
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Shaping spaces with light — premium architectural lighting for modern living.
          </p>
        </div>

        {/* Center - Quick Links + Services */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-5 uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-orange-500">Custom Lighting</a></li>
              <li><a href="#" className="hover:text-orange-500">Architectural Design</a></li>
              <li><a href="#" className="hover:text-orange-500">Smart Automation</a></li>
              <li><a href="#" className="hover:text-orange-500">Consultation</a></li>
            </ul>
          </div>
        </div>

        {/* Right - Contact Info + Social */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5 uppercase tracking-wide">
            Contact
          </h3>
          <ul className="space-y-4 text-sm mb-6">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-orange-500" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-orange-500" />
              info@spetraluce.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-orange-500" />
              Mumbai, India
            </li>
          </ul>

          {/* Social */}
          <div className="flex gap-4">
            {[
              { icon: <Facebook size={18} />, href: "#" },
              { icon: <Instagram size={18} />, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs md:text-sm text-gray-500 pt-6">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">Spetraluce</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
