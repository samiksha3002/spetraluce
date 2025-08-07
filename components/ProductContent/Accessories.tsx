import Image from "next/image";
import Link from "next/link";

const accessories = [
  {
    title: "Drivers & Controls",
    image: "/images/accessories/driver-control.jpg",
    link: "/products/accessories/subproduct1",
  },
  {
    title: "Cables & Connectors",
    image: "/images/accessories/cables-connectors.jpg",
    link: "/products/accessories/subproductsecond",
  },
];

export default function Accessories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {accessories.map((item, idx) => (
        <div
          key={idx}
          className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 bg-white text-black"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="p-5 space-y-2">
            <h3 className="uppercase text-lg font-semibold tracking-wide">
              {item.title}
            </h3>

            {/* ✅ LINK to redirect to dynamic sub page */}
            <Link
              href={item.link}
              className="text-orange-500 font-medium inline-flex items-center gap-2 hover:underline"
            >
              <span className="text-xl">›</span> Show Products
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
