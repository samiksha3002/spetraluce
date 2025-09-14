"use client";

import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";

interface Product {
  id: string;
  category: string; // subcategory
  parent: string;   // "Indoor", "Outdoor", "Industrial"
  image?: string;
}

interface ProductsProps {
  selectedSubcategory: string | null; // can be "All"
  parentCategory: string;             // slug from URL (indoor, outdoor, industrial)
}

export default function Products({ selectedSubcategory, parentCategory }: ProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  // ✅ Convert slug (indoor) -> Firestore value (Indoor)
  const normalizedParent = parentCategory.charAt(0).toUpperCase() + parentCategory.slice(1).toLowerCase();

  useEffect(() => {
    if (!selectedSubcategory || !parentCategory) return;

    const fetchProducts = async () => {
      const productsRef = collection(db, "products");
      let snapshot;

      if (selectedSubcategory === "All") {
        // ✅ Fetch all products of current parent only
        const q = query(productsRef, where("parent", "==", normalizedParent));
        snapshot = await getDocs(q);
      } else {
        // ✅ Fetch products for specific subcategory under this parent
        const q = query(
          productsRef,
          where("parent", "==", normalizedParent),
          where("category", "==", selectedSubcategory)
        );
        snapshot = await getDocs(q);
      }

      const prods: Product[] = [];
      snapshot.forEach((doc) => {
        prods.push({ id: doc.id, ...doc.data() } as Product);
      });

      setProducts(prods);
      setCurrentPage(1);
    };

    fetchProducts();
  }, [selectedSubcategory, parentCategory]);

  // ✅ Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="flex-1 bg-black p-6 h-screen overflow-y-auto">
      {products.length === 0 && selectedSubcategory && (
        <p className="text-gray-400 italic">No products found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentProducts.map((prod) => (
          <Link key={prod.id} href={`/products/Details/${prod.id}`}>
            <div className="relative group cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-2xl rounded-2xl overflow-hidden">
              <div className="bg-white w-full h-72 flex items-center justify-center rounded-2xl shadow-lg">
                {prod.image ? (
                  <img
                    src={prod.image}
                    alt={prod.id}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-gray-500">No Image</span>
                )}
              </div>

              {/* Popup Info */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] 
                bg-black/60 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-lg
                opacity-0 group-hover:opacity-100 
                translate-y-6 group-hover:translate-y-0 
                scale-95 group-hover:scale-100
                transition-all duration-500 ease-out"
              >
                <div className="flex items-center gap-3">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-300">
                    {prod.category || "Uncategorized"}
                  </p>
                  <span className="h-px flex-1 bg-gradient-to-r from-yellow-500 to-yellow-300"></span>
                </div>

                <h3 className="text-xl font-extrabold text-white tracking-wide mt-3">
                  {prod.id}
                </h3>

                <div className="w-12 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2 rounded"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              currentPage === 1
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
            }`}
          >
            Previous
          </button>

          <span className="text-gray-300">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              currentPage === totalPages
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
