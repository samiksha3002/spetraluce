"use client";

import { useEffect, useState } from "react";
import { db } from "../../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Download } from "lucide-react";
import Header from "../../../../components/Header";
import AboutHero from "../../../../components/AboutHero";
import Footer from "../../../../components/Footer";

interface Product {
  id: string;
  name: string;
  category: string;
  shortDesc?: string;
  image?: string;
  generalData?: Record<string, string>;
  constructionData?: Record<string, string>;
  electricalData?: Record<string, string>;
  options?: Record<string, string>;
  accessories?: string[];
  datasheet?: string; // direct file URL
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<"description" | "downloads">("description");

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", params.id);
      const snap = await getDoc(docRef);
      if (snap.exists()) setProduct({ id: snap.id, ...snap.data() } as Product);
    };
    fetchProduct();
  }, [params.id]);

  if (!product) return <div className="text-white p-6">Loading product...</div>;

  const fileLabel =
    product.datasheet?.split("/").pop() ||
    `${(product.name || "product").replace(/\s+/g, "").toUpperCase()}.PDF`;

  // Re-usable table section
  const renderTable = (title: string, data?: Record<string, string>) => {
    if (!data) return null;
    return (
      <div className="mb-8">
        <h2 className="text-lg font-bold text-black mb-2 bg-white px-3 py-1 rounded-t">
          {title}
        </h2>
        <table className="w-full text-sm border border-gray-700 rounded-xl overflow-hidden">
          <tbody>
            {Object.entries(data).map(([key, value]) => (
              <tr key={key} className="border-b border-gray-700">
                <td className="bg-gray-900 text-gray-300 px-4 py-2 font-medium w-1/3">{key}</td>
                <td className="bg-gray-800 text-gray-100 px-4 py-2">{value || "/"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen bg-black"
      style={{
        backgroundImage: "url('/images/bg-pattern.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <AboutHero
        title={product.name || "Product Details"}
        breadcrumb={`Products / ${product.name || params.id}`}
        image="/contactus.jpg"
      />

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Top section with image and basic info */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          {product.image && (
            <div className="relative w-full lg:w-1/3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-xl border border-gray-700 object-cover bg-white"
              />
              {/* Overlay download button (only when datasheet exists) */}
              {product.datasheet && (
                <a
                  href={product.datasheet}
                  download
                  className="absolute -bottom-4 left-4 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-bold px-5 py-3 rounded-lg shadow-md transition"
                >
                  <Download className="w-5 h-5" />
                  {fileLabel}
                  <span className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-black/10 skew-x-[-12deg] rounded-r-lg" />
                </a>
              )}
            </div>
          )}

          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-white mb-2">{product.name}</h1>
            <p className="text-gray-400 mb-2">Category: {product.category}</p>
            {product.shortDesc && <p className="text-gray-300 italic">"{product.shortDesc}"</p>}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mb-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-3 font-semibold rounded-t-lg ${
              activeTab === "description"
                ? "bg-orange-500 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            DESCRIPTION
          </button>
          <button
            onClick={() => setActiveTab("downloads")}
            className={`px-6 py-3 font-semibold rounded-t-lg ml-2 ${
              activeTab === "downloads"
                ? "bg-orange-500 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            DOWNLOADS
          </button>
        </div>

        {/* Tab content */}
        {activeTab === "description" && (
          <section>
            {renderTable("General Data", product.generalData)}
            {renderTable("Construction Data", product.constructionData)}
            {renderTable("Electrical Data", product.electricalData)}
            {renderTable("Options", product.options)}

            {/* Accessories (always show list, "/" if empty) */}
            <h2 className="text-lg font-bold text-black mb-2 bg-white px-3 py-1 rounded-t">
              Accessories
            </h2>
            <ul className="list-disc list-inside text-gray-200 bg-gray-900 p-4 rounded-xl border border-gray-700">
              {Array.isArray(product.accessories) && product.accessories.length > 0 ? (
                product.accessories.map((acc: string, idx: number) => (
                  <li key={idx}>{acc || "/"}</li>
                ))
              ) : (
                <li>/</li>
              )}
            </ul>
          </section>
        )}

        {activeTab === "downloads" && (
          <section className="space-y-6">
            {/* Big card button like your screenshot */}
            {product.datasheet ? (
              <a
                href={product.datasheet}
                download
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-4 rounded-lg transition shadow-md"
              >
                <Download className="w-5 h-5" />
                {fileLabel}
                <span className="pointer-events-none relative -mr-3 h-10 w-8 bg-black/10 skew-x-[-12deg] rounded-r-lg" />
              </a>
            ) : (
              <p className="text-gray-400">No downloads available.</p>
            )}

            {/* Also keep the overlay button on the image (already shown above) */}
          </section>
        )}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
