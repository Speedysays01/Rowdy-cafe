import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import gourmet from "../assets/gourmet.mp4";
import delivery from "../assets/delivery-scooter.mp4";
import building from "../assets/building.mp4";
import menu from "../assets/menu.mp4";
import analytics from "../assets/analytics.mp4";
import zero from "../assets/zero.mp4";

const USP = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Each card will slightly move vertically as you scroll (parallax)
  const yTransforms = [
    useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]),
    useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]),
    useTransform(scrollYProgress, [0, 1], ["-5%", "15%"]),
    useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]),
    useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]),
    useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]),
  ];

  const usps = [
    {
      video: gourmet,
      title: "Chefless Model",
      desc: "Automated precision, no chefs required — consistency redefined.",
    },
    {
      video: delivery,
      title: "Delivery Partners",
      desc: "Seamless delivery through top food platforms like Swiggy, Zomato.",
    },
    {
      video: building,
      title: "In-house Production",
      desc: "Centralized kitchens ensure quality, control, and zero dependency.",
    },
    {
      video: menu,
      title: "Unique Menu",
      desc: "Curated flavors that stand out — innovation meets indulgence.",
    },
    {
      video: analytics,
      title: "High ROI",
      desc: "Low overhead, high margins — scale profitably with every order.",
    },
    {
      video: zero,
      title: "Zero Royalty",
      desc: "Keep what you earn. No cuts, no fees — total ownership.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-yellow-400 min-h-[90vh] flex flex-col justify-center items-center overflow-hidden py-16"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 md:gap-12 px-4 sm:px-8">
        {usps.map((usp, index) => (
          <motion.div
            key={index}
            style={{ y: yTransforms[index % yTransforms.length] }}
            className={`flex items-center gap-4 sm:gap-6 bg-black/80 backdrop-blur-md border border-yellow-400 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl
                        hover:scale-105 transition-transform duration-300 w-full md:w-[45%]`}
          >
            <video
              src={usp.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-xl"
            />
            <div className="flex flex-col">
              <h3 className="text-yellow-400 font-bold text-lg md:text-2xl mb-1">
                {usp.title}
              </h3>
              <p className="text-yellow-300 text-sm md:text-lg leading-snug max-w-[450px]">
                {usp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default USP;
