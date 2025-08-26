"use client";

import React, { useState } from "react";
import list from "../../../src/data/list.json";
import SidebarCable from "../../../components/Sidebarcable";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboutHero from "../../../components/AboutHero";

export default function IndoorPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // ✅ Find Indoor parent block
  const parentBlock = list.find((p) => p.parent === "Indoor");

  if (!parentBlock) return <div>No Indoor products found</div>;

  // ✅ Flatten all products
  const allProducts = parentBlock.subcategories.flatMap((sub) => sub.products);

  // ✅ Filter products
  const displayedProducts =
    selectedCategory === "ALL"
      ? allProducts
      : parentBlock.subcategories.find((s) => s.name === selectedCategory)
          ?.products || [];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />


     <AboutHero
             title="Indoor"
             breadcrumb="Contact"
             image="/contactus.jpg"
           />

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row p-6 gap-6">
        {/* Sidebar (reuse same SidebarCable) */}
        <SidebarCable
          parentCategory="Indoor"
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Products */}
        <main className="flex-1 p-6 bg-white text-black rounded-xl">
          <h1 className="text-2xl font-bold mb-4">Indoor Products</h1>
          <p className="mb-6">
            Showing products for category: {selectedCategory}
          </p>

          {displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-4 bg-white border rounded-xl shadow hover:shadow-lg transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded"
                  />
                  <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No products in this category.</p>
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
