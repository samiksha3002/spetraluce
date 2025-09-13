"use client";

import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "next/navigation";

interface CategoriesProps {
  onSelectSubcategory: (subcategory: string) => void;
}

interface Category {
  name: string;
  subcategories: string[];
}

export default function Categories({ onSelectSubcategory }: CategoriesProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const params = useParams<{ slug: string }>(); // ✅ type-safe params
  const slug = params?.slug?.toLowerCase?.() || ""; // ensure lowercase comparison

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

  // ✅ Find only the category matching the current slug
  const selectedCategory = categories.find((cat) => cat.name === slug);

  return (
    <div className="w-1/4 bg-black p-6 rounded-2xl shadow-xl h-screen overflow-y-auto border border-gray-800">
    

      {selectedCategory ? (
        <ul className="space-y-3">
          {selectedCategory.subcategories.map((sub) => (
            <li
              key={sub}
              onClick={() => onSelectSubcategory(sub)}
              className="cursor-pointer bg-gray-900 hover:bg-orange-600 text-orange-400 hover:text-white rounded-xl px-4 py-3 transition-all duration-300 shadow-md hover:shadow-lg"
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
