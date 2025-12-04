// src/components/ROI.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ROI() {
  return (
    <section className="w-full bg-yellow-400 py-16 px-4 flex flex-col items-center justify-center">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-black text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10"
      >
        Project ROI
      </motion.h2>

      {/* Image */}
      <motion.img
        src="/ROI.jpg"   // Make sure ROI.png is placed in public/
        alt="Project ROI"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-3xl rounded-xl shadow-xl"
      />
    </section>
  );
}
