"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { name: "Architectural Lighting", slug: "architectural" },
  { name: "Linear Lights", slug: "linear-lights" },
  { name: "Downlights", slug: "downlights" },
  { name: "Spotlights", slug: "spotlights" },
  { name: "Track Lights", slug: "track-lights" },
  { name: "Outdoor", slug: "outdoor" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full sm:w-64 bg-white p-4 border-r border-gray-200">
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.slug}>
            <Link
              href={`/products/${cat.slug}`}
              className={`block px-4 py-2 rounded-md ${
                pathname.includes(cat.slug)
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 text-gray-800"
              }`}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
