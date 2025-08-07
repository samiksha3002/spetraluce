import React from "react";

const Sidebarcable = ({ selectedCategory, onSelect }) => {
  const staticCategories = [
    "ALL",
    "VarioPSU 24 V IP20 ON/OFF",
    "VarioPSU 24 V IP20 DALI",
    "VarioPSU 24 V IP20 DALI2",
    "VarioPSU 24 V IP67 DALI",
    "VarioPSU 24 V IP67 0–10 V",
    "VarioPSU 24 V IP67 ON/OFF",
    "VarioPSU AC Plug-In",
    "VarioControl IP20",
    "Optional Accessories for Concrete Ceilings",
  ];

  return (
    <aside className="w-full md:w-64 p-4 border-r border-orange-500 bg-black text-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-6 uppercase tracking-wide text-orange-500">
        Product Types
      </h2>
      <ul className="space-y-2">
        {staticCategories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onSelect(category)}
              className={`w-full text-left px-4 py-2 rounded-md border transition ${
                selectedCategory === category
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-gray-900 text-gray-300 border-gray-800 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebarcable;
