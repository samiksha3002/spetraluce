"use client";

import products from "/data/products.json";

interface ProductListProps {
  category: string;
}

export default function ProductList({ category }: ProductListProps) {
  // ✅ Filter products dynamically by category
  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredProducts.length === 0) {
    return <p className="text-gray-600">No products found in {category}.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow hover:shadow-lg transition bg-white"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.description}</p>
            <p className="mt-2 font-bold text-gray-800">₹{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
