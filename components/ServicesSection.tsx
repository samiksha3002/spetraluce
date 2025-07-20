"use client";

import { FaChevronRight } from "react-icons/fa";
import { IconType } from "react-icons";
import {
  LuFactory,
  LuPenTool,
  LuHeadset,
  LuMegaphone,
  LuMonitor,
  LuBookOpenCheck,
} from "react-icons/lu";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: IconType;
}

const services: ServiceCardProps[] = [
  {
    title: "Production",
    description:
      "Led Lighting fixtures production. The automated internal production for the highest precision.",
    Icon: LuFactory,
  },
  {
    title: "Design",
    description:
      "We Spetraluce product design, make prototypes, and manufacture every product.",
    Icon: LuPenTool,
  },
  {
    title: "Assistance",
    description:
      "Our services: After-sales assistance for LED lighting products. The customer is our priority.",
    Icon: LuHeadset,
  },
  {
    title: "Lighting Projects",
    description:
      "The technical department takes care of the LIGHTING PROJECT, and ensures full support.",
    Icon: LuMegaphone,
  },
  {
    title: "Sales",
    description:
      "The company’s commercial presence on the LED lighting market offers solutions worldwide.",
    Icon: LuMonitor,
  },
  {
    title: "Advice to Professional",
    description:
      "Our consulting services: Consulting for professionals, architects, and engineers.",
    Icon: LuBookOpenCheck,
  },
];

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => (
  <div className="bg-[#1f2126] rounded-xl p-6 space-y-4 group hover:shadow-lg transition">
    <Icon className="text-yellow-400 text-4xl" />
    <h3 className="text-white text-xl font-bold uppercase">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    <div className="text-yellow-400">
      <FaChevronRight />
    </div>
  </div>
);

export default function ServicesSection() {
  return (
    <section className="bg-[#181a1e] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
