import React from "react";
import { motion } from "framer-motion";

export default function OwnerCard({
  name = "Varun Kapoor",
  role = "Founder, Rowdy Cafe",
  factory = "Factory in Kopar Khairane, Navi Mumbai",
  clients = "Supplies products to brands like Social, Radisson, Taj (selected branches)",
  bio = `Expertise in food manufacturing from last 10 years. 
Factory in Kopar Khairane, Navi Mumbai. Supplies products to brands like Social, Radisson, Taj (selected branches).`,
  image = "/owner.png",
}) {
  return (
    <section
      aria-labelledby="founder-heading"
      className="w-full bg-black text-white min-h-[95vh] flex items-center py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full bg-yellow-400 mt-10 pb-5">

        {/* HEADING */}
        <motion.h2
          id="founder-heading"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center text-black text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 mt-8"
        >
         Meet the Rowdy Man IRL
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            
          </motion.div>

    
  {/* CENTER PORTRAIT */}
<div className="flex items-center justify-center">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      ease: "easeOut"
    }}
    viewport={{ once: false, amount: 0.3 }}
    className="relative w-[90%] sm:w-[85%] md:w-[80%]"
  >
    <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
      <img
        src={image}
        alt={`${name} portrait`}
        className="w-full h-full object-cover block"
      />

      <div className="absolute left-4 bottom-4 bg-black/70 px-3 py-1 rounded-md">
        <div className="text-xs text-white/90">Founder</div>
        <div className="text-sm text-white font-semibold">{name}</div>
      </div>
    </div>
  </motion.div>
</div>





          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <ul className="space-y-2 text-left">
              <li className="flex items-start gap-4">
                <span className="text-black text-xl leading-none">•</span>
                <div className="text-sm lg:text-xl text-black font-semibold">{factory}</div>
              </li>

              <li className="flex items-start gap-4">
                <span className="text-black text-xl leading-none">•</span>
                <div className="text-sm text-black lg:text-xl font-semibold">{clients}</div>
              </li>
            </ul>

          
          </motion.div>
        </div>

        {/* LOGO ROW */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-6 bg-black w-full px-4 py-6 rounded-3xl"
        >
          <img src="/taj.png" alt="taj hotel" className="h-10 object-contain" />
          <img src="/social.png" alt="social" className="h-10 object-contain" />
          <img src="/radisson.png" alt="radisson" className="h-10 object-contain" />
        </motion.div>

      </div>
    </section>
  );
}
