"use client";

import { useState } from "react";
import Categories from "./categories";
import Products from "./products";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboutHero from "../../../components/AboutHero";

export default function ProductCategoryPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  return (
    <div className="bg--100 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <AboutHero title="Gallery" breadcrumb="Gallery" image="/contactus.jpg" />

      {/* Main Content */}
      <div className="flex flex-1 gap-6 p-4">
        {/* Left Side: Categories */}
        <Categories 
  onSelectSubcategory={setSelectedSubcategory} 
  selectedSubcategory={selectedSubcategory} // ✅ pass active state
/>


        {/* Right Side: Products */}
        <Products selectedSubcategory={selectedSubcategory} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
