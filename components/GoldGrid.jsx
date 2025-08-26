"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function GoldGrid({
  parentCategory = "Indoor",      // Indoor | Outdoor | Industrial
  selectedType = "ALL"            // sidebar selection (e.g., "Wall Light")
}) {
  const router = useRouter();
  const [goldList, setGoldList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("/gold.json")
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setGoldList(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
    return () => { mounted = false; };
  }, []);

  const filtered = useMemo(() => {
    const withinCategory = goldList.filter(
      (g) => (g.category || "").toLowerCase() === parentCategory.toLowerCase()
    );
    if (selectedType && selectedType !== "ALL" && selectedType !== " ALL") {
      return withinCategory.filter(
        (g) => (g.subcategory || "").toLowerCase() === selectedType.toLowerCase()
      );
    }
    return withinCategory;
  }, [goldList, parentCategory, selectedType]);

  if (loading) {
    return (
      <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-64 bg-gray-800/60 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex-1 p-4">
      {filtered.length === 0 ? (
        <div className="text-gray-300 bg-gray-900 border border-gray-800 p-10 rounded-xl text-center">
          No gold items found in <span className="text-white font-semibold">{parentCategory}</span>
          {selectedType && selectedType !== "ALL" && selectedType !== " ALL" && (
            <> / <span className="text-white font-semibold">{selectedType}</span></>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((g) => (
            <button
              key={g.id}
              onClick={() => router.push(`/gold/${g.id}`)}
              className="group text-left bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500 hover:shadow-lg transition"
            >
              <div className="bg-white">
                <img
                  src={g.image}
                  alt={g.name}
                  className="w-full h-56 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white text-lg font-semibold group-hover:text-orange-400">
                  {g.name}
                </h3>
                <p className="text-gray-400 text-sm">{g.subcategory}</p>
                {g.short && <p className="text-gray-500 text-sm mt-2 line-clamp-2">{g.short}</p>}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
