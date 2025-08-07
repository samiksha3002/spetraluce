import React from "react";

const ProductGrid = ({ products }) => {
  return (
    <div className="w-full">
      {/* Table headers */}
      <div className="hidden md:grid grid-cols-5 bg-black text-orange-500 font-semibold text-sm uppercase border-b border-orange-400 px-4 py-3">
        <div className="col-span-1">Item</div>
        <div className="col-span-2">Description</div>
        <div className="col-span-1">Part number</div>
        <div className="col-span-1">Unit</div>
        <div className="col-span-1">Min. OQ</div>
      </div>

      {/* Product Rows */}
      {products.map((product, index) => (
        <div
          key={index}
          className="grid md:grid-cols-5 grid-cols-1 gap-4 text-white bg-zinc-900 border-b border-orange-400 px-4 py-6"
        >
          {/* Item (Image + Title) */}
          <div className="col-span-1 flex items-center gap-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="font-bold text-sm text-orange-400">
                {product.title}
              </h3>
              <p className="text-xs text-gray-300">{product.name}</p>
            </div>
          </div>

          {/* Description */}
          <div className="col-span-2 text-sm text-gray-300">
            {product.description}
          </div>

          {/* Part Number */}
          <div className="col-span-1 text-sm">{product.partNumber}</div>

          {/* Unit + Min. OQ */}
          <div className="col-span-1 text-sm">
            <p>{product.unit}</p>
            <p>{product.minOQ}</p>
          </div>

          {/* Download Links */}
          <div className="col-span-5 flex gap-6 mt-3 text-xs text-orange-400">
            <a
              href={product.specSheet}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              📄 Download Spec sheet
            </a>
            <a
              href={product.datasheet}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              📄 Download Datasheet (supplier)
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
