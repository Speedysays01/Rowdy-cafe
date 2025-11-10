import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import gourmet from "../assets/gourmet.mp4";
import delivery from "../assets/delivery-scooter.mp4";
import building from "../assets/building.mp4";
import menu from "../assets/menu.mp4";
import analytics from "../assets/analytics.mp4";
import zero from "../assets/zero.mp4";

const USP = () => {
  const parallaxRef = useRef(null);

  // Parallax background scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.pageYOffset;
        parallaxRef.current.style.backgroundPositionY = offset * 0.4 + "px";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Animation variant for tiles
  const fadeSlide = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={parallaxRef}
      className="relative bg-yellow-400 flex flex-col justify-center items-center overflow-hidden
                 min-h-[100vh] md:min-h-screen py-8 md:py-16"
      style={{
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 
                   px-4 sm:px-8 md:px-16 lg:px-24 w-full max-w-7xl"
      >
        {usps.map((usp, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 sm:gap-6 bg-black p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl
                       hover:scale-105 transition-transform duration-300 
                       w-[95%] sm:w-[90%] md:w-[95%] lg:w-[100%] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            variants={fadeSlide}
          >
            <video
              src={usp.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain rounded-2xl"
            />
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-base sm:text-xl md:text-2xl mb-1 md:mb-2">
                {usp.title}
              </h3>
              <p className="text-yellow-300 text-xs sm:text-sm md:text-lg leading-snug max-w-[450px]">
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
