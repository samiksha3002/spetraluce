"use client";

import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "next/navigation";

interface CategoriesProps {
  onSelectSubcategory: (subcategory: string | null) => void;
  selectedSubcategory: string | null;
}

interface Category {
  name: string;
  subcategories: string[];
}

export default function Categories({
  onSelectSubcategory,
  selectedSubcategory,
}: CategoriesProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [defaultSet, setDefaultSet] = useState(false);
  const params = useParams<{ slug: string }>();
  const slug = params?.slug?.toLowerCase?.() || "";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const snapshot = await getDocs(collection(db, "categories"));
        const cats: Category[] = [];

        snapshot.forEach((doc) => {
          const data = doc.data() as { subcategories?: string[] };
          cats.push({
            name: doc.id.toLowerCase(),
            subcategories: data.subcategories || [],
          });
        });

        setCategories(cats);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const selectedCategory = categories.find((cat) => cat.name === slug);

  // ✅ Auto-select "All" by default
  useEffect(() => {
    if (selectedCategory && !defaultSet) {
      onSelectSubcategory("All");
      setDefaultSet(true);
    }
  }, [selectedCategory, defaultSet, onSelectSubcategory]);

  return (
    <div className="w-1/4 bg-black p-6 rounded-2xl shadow-xl h-screen overflow-y-auto border border-gray-800">
      {selectedCategory ? (
        <ul className="space-y-3">
          {/* ✅ "All" Button */}
          <li
            key="all"
            onClick={() => onSelectSubcategory("All")}
            className={`cursor-pointer rounded-xl px-4 py-3 transition-all duration-300 shadow-md hover:shadow-lg
              ${
                selectedSubcategory === "All"
                  ? "bg-orange-600 text-white"
                  : "bg-gray-900 text-orange-400 hover:bg-orange-600 hover:text-white"
              }`}
          >
            All
          </li>

          {/* ✅ Other subcategories */}
          {selectedCategory.subcategories.map((sub) => (
            <li
              key={sub}
              onClick={() => onSelectSubcategory(sub)}
              className={`cursor-pointer rounded-xl px-4 py-3 transition-all duration-300 shadow-md hover:shadow-lg
                ${
                  selectedSubcategory === sub
                    ? "bg-orange-600 text-white"
                    : "bg-gray-900 text-orange-400 hover:bg-orange-600 hover:text-white"
                }`}
            >
              {sub}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 italic">No subcategories found.</p>
      )}
    </div>
  );
}
