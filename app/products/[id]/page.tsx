// app/products/[id]/page.tsx
import list from "../../../src/data/list.json"; // ✅ make sure tsconfig.json me "paths" set hai

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = Number(params.id);

  // ✅ Flatten all products from categories → subcategories → products
  const allProducts = list.flatMap((cat) =>
    cat.subcategories.flatMap((sub) => sub.products)
  );

  const product = allProducts.find((p) => p.id === productId);

  // ✅ Error handling if product not found
  if (!product) {
    return (
      <div className="p-10 text-red-600 text-xl font-semibold">
        ❌ Product not found
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        {product.name}
      </h1>

      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-lg h-72 object-cover rounded-lg shadow-lg mb-8"
      />

      {/* Description */}
      <p className="text-lg text-gray-700 mb-6">{product.desc}</p>

      {/* Specs */}
      {product.specs && (
        <p className="font-semibold text-gray-800 mb-4">
          Specs: <span className="text-gray-600">{product.specs}</span>
        </p>
      )}

      {/* PDF Download */}
      {product.pdf && (
        <a
          href={product.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-orange-600 text-white font-medium rounded-lg shadow-md hover:bg-orange-700 transition"
        >
          📄 Download PDF
        </a>
      )}
    </div>
  );
}
