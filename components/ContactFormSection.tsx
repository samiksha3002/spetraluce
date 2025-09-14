"use client";

import { motion } from "framer-motion";

export default function ContactFormSection() {
  return (
    <section className="bg-[#0f1012] text-white py-24 px-6 relative overflow-hidden">
      {/* Soft background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#ffffff]/5 via-transparent to-[#ffaa00]/10 pointer-events-none"></div>

      {/* Decorative floating dot */}
      <div className="absolute top-10 right-20 w-4 h-4 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-serif font-semibold mb-4 text-gray-100"
        >
          Write Us A Message
        </motion.h2>

        {/* Elegant gradient line under title */}
        <div className="mx-auto w-28 h-[2px] rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200 mb-16"></div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid gap-8 bg-[#1b1c1f] p-10 rounded-2xl shadow-lg border border-[#ffaa00]/10"
        >
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.input
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              type="text"
              placeholder="Your Name"
              className="bg-[#1b1c1f] text-gray-200 px-4 py-3 rounded-md w-full border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition shadow-sm hover:shadow-yellow-400/20"
            />
            <motion.input
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              type="email"
              placeholder="Email Address"
              className="bg-[#1b1c1f] text-gray-200 px-4 py-3 rounded-md w-full border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition shadow-sm hover:shadow-yellow-400/20"
            />
          </div>

          {/* Phone & Subject */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.input
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              type="tel"
              placeholder="Phone Number"
              className="bg-[#1b1c1f] text-gray-200 px-4 py-3 rounded-md w-full border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition shadow-sm hover:shadow-yellow-400/20"
            />
            <motion.input
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              type="text"
              placeholder="Subject"
              className="bg-[#1b1c1f] text-gray-200 px-4 py-3 rounded-md w-full border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition shadow-sm hover:shadow-yellow-400/20"
            />
          </div>

          {/* Message */}
          <motion.textarea
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            rows={6}
            placeholder="Write Your Message"
            className="bg-[#1b1c1f] text-gray-200 px-4 py-3 rounded-md w-full border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition shadow-sm hover:shadow-yellow-400/20 resize-none"
          ></motion.textarea>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 15px #ffaa00" }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold tracking-wide px-12 py-3 rounded-md transition-all duration-300"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
