"use client";

export default function ContactFormSection() {
  return (
    <section className="bg-[#0f1012] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-bold uppercase mb-12">
          Write Us A Message<span className="text-yellow-400">.</span>
        </h2>

        {/* Form */}
        <form className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#1b1c1f] text-gray-300 px-4 py-3 rounded-md w-full focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#1b1c1f] text-gray-300 px-4 py-3 rounded-md w-full focus:outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-[#1b1c1f] text-gray-300 px-4 py-3 rounded-md w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="bg-[#1b1c1f] text-gray-300 px-4 py-3 rounded-md w-full focus:outline-none"
            />
          </div>

          <textarea
            rows={6}
            placeholder="Write Message"
            className="bg-[#1b1c1f] text-gray-300 px-4 py-3 rounded-md w-full focus:outline-none"
          ></textarea>

          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold tracking-widest px-8 py-3 rounded-md transition-all duration-300 shadow-md uppercase"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
