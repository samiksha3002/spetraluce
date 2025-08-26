"use client";

import React, { useState } from "react";
import list from "../src/data/list.json"; // ✅ keep file path same

// ✅ Define types for props
interface SidebarCableProps {
  parentCategory: string;
  selectedCategory: string;
  onSelect: (category: string) => void;
}

const SidebarCable: React.FC<SidebarCableProps> = ({
  parentCategory,
  selectedCategory,
  onSelect,
}) => {
  const [open, setOpen] = useState<string | null>(parentCategory); // ✅ can be string or null

  // ✅ Find subcategories for this parent
  const parentData = list.find((item) => item.parent === parentCategory);

  return (
    <aside className="w-64 bg-gray-900 text-white p-4 rounded-xl shadow-lg">
      {/* Parent Category (Indoor / Outdoor) */}
      <div>
        <button
          onClick={() =>
            setOpen(open === parentCategory ? null : parentCategory)
          }
          className="w-full flex justify-between items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
        >
          {parentCategory}
          <span>{open === parentCategory ? "−" : "+"}</span>
        </button>

        {/* Subcategories only if open */}
        {open === parentCategory && parentData && (
          <ul className="mt-2 ml-4 space-y-2">
            {/* Add "ALL" option */}
            <li
              onClick={() => onSelect("ALL")}
              className={`cursor-pointer px-3 py-2 rounded-md transition ${
                selectedCategory === "ALL"
                  ? "bg-orange-500 text-white shadow-md"
                  : "hover:bg-gray-700"
              }`}
            >
              ALL
            </li>

            {/* Loop through subcategories */}
            {parentData.subcategories.map((sub, idx) => (
              <li
                key={idx}
                onClick={() => onSelect(sub.name)}
                className={`cursor-pointer px-3 py-2 rounded-md transition ${
                  selectedCategory === sub.name
                    ? "bg-orange-500 text-white shadow-md"
                    : "hover:bg-gray-700"
                }`}
              >
                {sub.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default SidebarCable;
