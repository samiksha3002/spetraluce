"use client";

import { ChevronRight } from "lucide-react";

const Section = ({
  title,
  items,
  image,
}: {
  title: string;
  items: { name: string; isNew?: boolean }[];
  image: string;
}) => (
  <div className="w-full md:w-1/2 flex gap-4 p-4">
    <img src={image} alt={title} className="w-16 h-16 object-contain" />
    <div>
      <h3 className="text-white text-lg font-semibold uppercase mb-2">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-gray-300 text-sm flex items-center gap-2"
          >
            <ChevronRight size={16} className="text-yellow-400" />
            <span>{item.name}</span>
            {item.isNew && (
              <span className="bg-yellow-400 text-black text-[10px] font-bold px-1 py-[1px] rounded-sm ml-1">
                NEW
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function IndoorLuminaires() {
  return (
    <section className="bg-[#181a1e] text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <Section
          title="Flexible Light Lines"
          image="/icons/flexible.png"
          items={[
            { name: "VENUS True Color family IP67", isNew: true },
            { name: "VENUS family IP67" },
            { name: "AMOR IP67" },
            { name: "VarioLED™ Flex IP67" },
            { name: "HYDRALUX IP67" },
          ]}
        />
        <Section
          title="Rigid Light Lines"
          image="/icons/rigid.png"
          items={[
            { name: "ADONIS ARCHITECTURAL IP67", isNew: true },
            { name: "XOOLINE™ IP67" },
            { name: "XOOLUM IP67" },
            { name: "XOOLUM Reflector IP67" },
            { name: "XOOLUM Reflector Wall Wash IP67" },
            { name: "XOOLIGHT IP67" },
            { name: "VarioLED™ IP67" },
          ]}
        />
        <Section
          title="In-Ground"
          image="/icons/ground.png"
          items={[
            { name: "ADONIS ARCHITECTURAL IP67", isNew: true },
            { name: "OCEANOS IP67" },
          ]}
        />
        <Section
          title="Grazer"
          image="/icons/grazer.png"
          items={[
            { name: "ADONIS ARCHITECTURAL IP67", isNew: true },
            { name: "FUSION IP67", isNew: true },
            { name: "OCEANOS IP67" },
            { name: "VENUS True Color Optics family IP67", isNew: true },
          ]}
        />
      </div>
    </section>
  );
}
