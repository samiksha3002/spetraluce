"use client";

import React from "react";

// ✅ Import your components
import Header from "../../components/Header";
import AboutHero from "../../components/AboutHero";
import ProductSection from "../../components/ProductSection";
import ImageSlider from "../../components/ImageSlider";
import Footer from "../../components/Footer";

export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <AboutHero />

      {/* Product Section */}
      <section className="py-20">
        <ProductSection />
      </section>

      {/* Image Slider */}
      <section className="py-16">
        <ImageSlider />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
