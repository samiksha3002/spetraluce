"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#101114] text-gray-300 pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo & Tagline */}
        <div>
          <Image
            src="/spetraluce-1.png" // Replace with your logo path
            alt="Spetraluce Logo"
            width={180}
            height={80}
            className="mb-4"
          />
          <p className="text-sm">
            Shaping spaces with light — premium architectural lighting for
            modern living.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-yellow-400">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-400" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" />
              info@spetraluce.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-400" />
              Mumbai, India
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm text-gray-500 pt-6">
        &copy; {new Date().getFullYear()} Spetraluce. All Rights Reserved.
      </div>
    </footer>
  );
}
