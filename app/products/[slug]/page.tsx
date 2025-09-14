"use client";

import { useState } from "react";
import Categories from "./categories";
import Products from "./products";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboutHero from "../../../components/AboutHero";
import { useParams } from "next/navigation";

export default function ProductCategoryPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  // ✅ Get current main category from URL (indoor, outdoor, industrial)
  const params = useParams<{ slug: string }>();
  const slug = params?.slug?.toLowerCase?.() || "";

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
          selectedSubcategory={selectedSubcategory}
        />

        {/* Right Side: Products */}
        <Products
          selectedSubcategory={selectedSubcategory}
          parentCategory={slug} // ✅ FIX: prop name must match Products.tsx
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
