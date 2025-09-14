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

            {/* Accessories */}
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
  <section className="relative flex flex-col items-center justify-center py-16 rounded-2xl overflow-hidden">
    {/* Background SVG Pattern */}
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 800 800"
    >
      <circle cx="400" cy="400" r="300" fill="none" stroke="url(#grad)" strokeWidth="2" />
      <circle cx="400" cy="400" r="200" fill="none" stroke="url(#grad)" strokeWidth="2" />
      <circle cx="400" cy="400" r="100" fill="none" stroke="url(#grad)" strokeWidth="2" />
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>
      </defs>
    </svg>

    {/* Foreground content */}
    <div className="relative z-10 text-center">
      <h2 className="text-2xl font-bold text-white mb-6">Download Product Datasheet</h2>
      <a
        href={product.datasheet || "#"}
        download={!!product.datasheet}
        className="group inline-flex items-center gap-3 px-8 py-4 
                   bg-gradient-to-r from-orange-500 to-yellow-400 
                   text-black font-bold text-lg rounded-2xl shadow-xl
                   hover:from-orange-600 hover:to-yellow-500 
                   transition-all duration-300"
      >
        <Download className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
        Download
      </a>
    </div>
  </section>
)}

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
