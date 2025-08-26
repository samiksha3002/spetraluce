"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function GoldPage() {
  const { category } = useParams(); // ✅ indoor | outdoor | industrial
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/data/products.json"); // ✅ make sure this file exists in public/data
        const data = await res.json();

        // ✅ filter products by category
        const filtered = data.filter(
          (item: any) =>
            item.category.toLowerCase() === category?.toString().toLowerCase()
        );

        setProducts(filtered);
        setLoading(false);
      } catch (err) {
        console.error("Error loading products:", err);
        setLoading(false);
      }
    }

    if (category) fetchProducts();
  }, [category]);

  if (loading) return <p className="text-center p-10">Loading...</p>;

  if (!products || products.length === 0) {
    return <p className="text-center p-10">{category} not found</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* ✅ Breadcrumb */}
      <nav className="text-sm mb-6">
        <Link href="/" className="text-blue-600">Home</Link> /{" "}
        <span className="capitalize">{category}</span>
      </nav>

      {/* ✅ Hero Section */}
      <div className="relative mb-10">
        <img
          src={`/images/${category}.jpg`} // put category-based hero images in public/images
          alt={category}
          className="w-full h-64 object-cover rounded-xl"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white bg-black/50 rounded-xl">
          {category}
        </h1>
      </div>

      {/* ✅ Layout with left sidebar + right images */}
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
        {/* Left list */}
        <div className="bg-gray-100 rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-3">Subcategories</h2>
          <ul className="space-y-2">
            {products.map((p) => (
              <li key={p.id} className="hover:text-blue-600 cursor-pointer">
                {p.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow rounded-xl overflow-hidden"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-40 object-cover"
              />
              <p className="p-2 text-center font-medium">{p.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
