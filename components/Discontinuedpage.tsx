"use client";

import { Download } from "lucide-react";

const products = [
  {
    name: "MARS WALL WASH IP20",
    availability:
      "possible to order until September 26, 2025; subject to availability",
    documents: [
      { name: "Spec sheets", url: "/pdfs/spec-sheets.pdf" },
      { name: "Specification text", url: "/pdfs/specification-text.pdf" },
      { name: "Mounting instruction", url: "/pdfs/mounting-instruction.pdf" },
      { name: ".ies/.ldt files", url: "/pdfs/ldt-files.zip" },
      { name: "Technical drawing (.dwg)", url: "/pdfs/technical-drawing.dwg" },
    ],
  },
  {
    name: "VARIOLED™ FLEX IQ WHITE HYDRA",
    availability:
      "possible to order until March 31, 2026; subject to availability",
    documents: [
      { name: "Spec sheets", url: "/pdfs/spec-sheets.pdf" },
      { name: "Specification text", url: "/pdfs/specification-text.pdf" },
      { name: "Mounting instruction", url: "/pdfs/mounting-instruction.pdf" },
      { name: ".ies/.ldt files", url: "/pdfs/ldt-files.zip" },
    ],
  },
  {
    name: "VARIOLED™ FLEX IQ WHITE NEXUS",
    availability:
      "possible to order until March 31, 2026; subject to availability",
    documents: [
      { name: "Spec sheet", url: "/pdfs/spec-sheets.pdf" },
      { name: "Specification text", url: "/pdfs/specification-text.pdf" },
      { name: "Mounting instruction", url: "/pdfs/mounting-instruction.pdf" },
      { name: ".ies/.ldt files", url: "/pdfs/ldt-files.zip" },
    ],
  },
  {
    name: "VarioLED™ Flex NIKE IP67 ",
    availability:
      "(possible to order until April 30, 2025; subject to availability)",
    documents: [
      { name: "Spec sheet", url: "/pdfs/spec-sheets.pdf" },
      { name: "Specification text", url: "/pdfs/specification-text.pdf" },
      { name: "Mounting instruction", url: "/pdfs/mounting-instruction.pdf" },
      { name: ".ies/.ldt files", url: "/pdfs/ldt-files.zip" },
      { name: "Technical drawing (.dwg)", url: "/pdfs/ldt-files.zip" },
    ],
  },
  {
    name: "VarioLED™ Flex VENUS family IP67  ",
    availability:
      "(possible to order until April 30, 2025; subject to availability)",
    documents: [
      { name: "Spec sheet", url: "/pdfs/spec-sheets.pdf" },
      { name: "Specification text", url: "/pdfs/specification-text.pdf" },
      { name: "Mounting instruction", url: "/pdfs/mounting-instruction.pdf" },
      { name: ".ies/.ldt files", url: "/pdfs/ldt-files.zip" },
      { name: "Technical drawing (.dwg)", url: "/pdfs/ldt-files.zip" },
    ],
  },
  {
    name: "XOOLUX NANO IP64   ",
    availability:
      "(possible to order until April 30, 2025; subject to availability)",
    documents: [
      { name: "Spec sheet", url: "/pdfs/spec-sheets.pdf" },
      { name: "Specification text", url: "/pdfs/specification-text.pdf" },
      { name: "Mounting instruction", url: "/pdfs/mounting-instruction.pdf" },
      { name: ".ies/.ldt files", url: "/pdfs/ldt-files.zip" },
      { name: "Technical drawing (.dwg)", url: "/pdfs/ldt-files.zip" },
    ],
  },
];

export default function Discontinuedpage() {
  return (
    <main className="min-h-screen bg-[#181a1e] text-white p-10">
      {products.map((product, index) => (
        <div
          key={index}
          className="border-b border-gray-700 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          {/* Left side */}
          <div>
            <h2 className="text-3xl text-orange-400 font-bold uppercase mb-2">
              {product.name}
            </h2>
            <p className="text-gray-400 text-sm">{product.availability}</p>
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-2">
            {product.documents.map((doc, idx) => (
              <a
                key={idx}
                href={doc.url}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-orange-400 hover:text-orange-300 text-sm md:text-base"
              >
                <Download size={16} className="mr-2" />
                {doc.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
