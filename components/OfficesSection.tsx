"use client";

export default function OfficesSection() {
  return (
    <section className="bg-[#0f1012] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 uppercase">
          Offices Near You<span className="text-yellow-400">.</span>
        </h2>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-[#1b1c1f] p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white mb-3">ITALY</h3>
            <p className="text-gray-400">
              Via Monte Vettore n°5
              <br />
              61122 Pesaro (PU) Italia
              <br />
              +39 345 588 2002
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1b1c1f] p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white mb-3">KUWAIT</h3>
            <p className="text-gray-400">
              LTG
              <br />
              Othman Center
              <br />
              Mezzanine M29
              <br />
              Hawalli
              <br />
              +965 66612349
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1b1c1f] p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white mb-3">KUWAIT</h3>
            <p className="text-gray-400">
              TIMA POOLS
              <br />
              Underwater Products
              <br />
              Shuwaikh Industrial,
              <br />
              opposite to Fire Station,
              <br />
              Street 28, Yousef Al-Zabin Complex, Shop No. 4<br />
              +965 98518951
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
