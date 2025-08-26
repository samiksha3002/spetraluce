"use client";

import Link from "next/link";
import Image from "next/image";
import list from "../src/data/list.json";

export default function ProductDisplay() {
  // Flatten all products from JSON
  const allProducts = list.flatMap((cat) =>
    cat.subcategories.flatMap((sub) => sub.products)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {allProducts.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.slug}`}
          className="block group"
        >
          <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
            <div className="relative w-full h-52">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.desc}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
