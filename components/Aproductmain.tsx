"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Aproductmain() {
  // Example categories & subitems - you can make this dynamic too
  const data = [
    {
      category: "FLEXIBLE LIGHT ENGINES",
      items: [
        {
          name: "Flex LED tape Static White",
          link: "/Flexibleone",
        },
        {
          name: "Flex LED tape Dynamic White",
          link: "/Flexibletwo",
        },
        {
          name: "Flex LED tape RGBW",
          link: "/Flexiblethree",
        },
        {
          name: "Flex LED tape RGB",
          link: "/Flexiblefour",
        },
      ],
    },
    {
      category: "LUMINAIRES",
      items: [
        {
          name: "ADONIS ARCHITECTURAL IP67",
          link: "/products/luminaires/adonis-architectural-ip67",
        },
        { name: "AMOR IP67", link: "/products/luminaires/amor-ip67" },
        { name: "FUSION IP67", link: "/products/luminaires/fusion-ip67" },
        { name: "HYDRALUX IP67", link: "/products/luminaires/hydralux-ip67" },
        { name: "LUNA IP40", link: "/products/luminaires/luna-ip40" },
        { name: "LYRA IP40", link: "/products/luminaires/lyra-ip40" },
        {
          name: "LYRA ECLIPSE IP40",
          link: "/products/luminaires/lyra-eclipse-ip40",
        },
        {
          name: "MARS ARCHITECTURAL Pendant IP40",
          link: "/products/luminaires/mars-architectural-pendant-ip40",
        },
        {
          name: "MARS ARCHITECTURAL Recessed IP40",
          link: "/products/luminaires/mars-architectural-recessed-ip40",
        },
        {
          name: "MARS ARCHITECTURAL Surface IP40",
          link: "/products/luminaires/mars-architectural-surface-ip40",
        },
        {
          name: "MARS EVE Wall Wash",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        { name: "NEPTUNE IP68", link: "/products/luminaires/neptune-ip68" },
        {
          name: "OCEANOS IP67",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "ULTIMA-P IP40",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "ULTIMA-S",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "ULTIMA-T IP40",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "VarioLED™ Flex IP67",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "VarioLED™ IP67",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "VENUS family IP67",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "VENUS family True Color IP67",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "XOOCOVE",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "XOOLIGHT IP67",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "XOOLINE™ IP40",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "XOOLINE™ IP67",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "XOOLUM IP40",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "XOOLUM Opal Continuous IP40",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "XOOLUM IP67",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "XOOLUM R IP20",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "XOOLUM R IP67",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "XOOLUM R Wall Wash IP20",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "XOOLUM R Wall Wash IP67",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "XOOMINAIRE 4292 IP20/IP40",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "XOOTUBE",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
      ],
    },

    {
      category: "Smart lighting and Controls",
      items: [
        {
          name: "IN.finite™ CASAMBI & Accessoires ",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
        {
          name: "IN.finite™ DALI® & Accessoires",
          link: "/products/luminaires/mars-eve-wall-wash",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#181a1e] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {data.map((section, idx) => (
          <div key={idx}>
            {/* Category Title */}
            <h2 className="text-3xl font-bold text-orange-400 mb-6 uppercase">
              {section.category}:
            </h2>

            {/* Subitems */}
            <ul className="space-y-4">
              {section.items.map((item, subIdx) => (
                <li key={subIdx}>
                  <Link
                    href={item.link}
                    className="flex items-center text-orange-300 hover:text-orange-500 transition-all text-lg"
                  >
                    <ChevronRight className="w-5 h-5 mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
