"use client";

import React, { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Sidebarcable from "../../../../components/Sidebarcable";
import CableGrid from "../../../../components/CableGrid";

export default function SubProductFirst() {
  const [products, setProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("ALL");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/cableproduct.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = Array.from(
          new Set(data.map((item) => item.category))
        );
        setCategories(uniqueCategories);
      });
  }, []);

  const filteredProducts =
    filteredCategory === "ALL"
      ? products
      : products.filter((p) => p.category === filteredCategory);

  return (
    <div className="min-h-screen px-6 py-20">
      <Header />

      <div className="flex flex-col md:flex-row gap-6 my-8">
        <Sidebarcable
          categories={categories}
          selectedCategory={filteredCategory}
          onSelect={setFilteredCategory}
        />
        <main className="flex-1 bg-gray-100 p-4 rounded-lg shadow">
          <CableGrid products={filteredProducts} />
        </main>
      </div>

      <Footer />
    </div>
  );
}
