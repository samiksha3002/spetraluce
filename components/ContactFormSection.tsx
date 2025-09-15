"use client";

export default function ContactFormSection() {
  return (
    <section className="bg-[#0f1012] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-serif font-semibold mb-12">
          Get In Touch<span className="text-yellow-400">.</span>
        </h2>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-[#1b1c1f] text-gray-200 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-[#1b1c1f] text-gray-200 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-lg bg-[#1b1c1f] text-gray-200 focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-[#1b1c1f] text-gray-200 focus:ring-2 focus:ring-yellow-400 outline-none"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
