"use client";

import React, { useState } from "react";
import SidebarCable from "../../../components/Sidebarcable";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboutHero from "../../../components/AboutHero";

export default function OutdoorPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Reusable AboutHero */}
      <AboutHero
        title="Outdoor"
        breadcrumb="Outdoor Cables"
        image="/images/outdoor.jpg" // make sure you have this in public/images
      />

      <div className="flex flex-1 flex-col md:flex-row p-6 gap-6">
        <SidebarCable
          parentCategory="Outdoor"
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <main className="flex-1 p-6 bg-white text-black rounded-xl">
          <h1 className="text-2xl font-bold mb-4">Outdoor Products</h1>
          <p>Showing products for category: {selectedCategory}</p>
        </main>
      </div>

      <Footer />
    </div>
  );
}
