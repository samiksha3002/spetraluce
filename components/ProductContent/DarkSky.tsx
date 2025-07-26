export default function DarkSky() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-orange-800 mb-6">
        Dark Sky Compliant Lights
      </h2>

      <p className="text-gray-700 mb-8">
        Our Dark Sky lighting solutions reduce light pollution while providing
        effective, targeted illumination. Ideal for eco-conscious projects,
        these fixtures ensure minimal skyglow and energy-efficient performance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
          <img
            src="https://source.unsplash.com/400x300/?dark,streetlight"
            alt="Full Cutoff Wall Pack"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-orange-700">
              Full Cutoff Wall Packs
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Designed to direct light downward, reducing glare and uplight for
              maximum compliance.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
          <img
            src="https://source.unsplash.com/400x300/?night,lighting"
            alt="Downlights"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-orange-300">
              Architectural Downlights
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Sleek fixtures that blend into architecture while adhering to dark
              sky requirements.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
          <img
            src="https://source.unsplash.com/400x300/?eco,lighting"
            alt="Eco-Friendly Bollards"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-orange-700">
              Eco-Friendly Bollards
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Ideal for pathways and gardens, offering low-glare, energy-saving
              outdoor lighting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
