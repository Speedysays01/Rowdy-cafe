import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import FoodGridSection from "./FoodGridSection";

import gourmet from "../assets/gourmet.mp4";
import delivery from "../assets/delivery-scooter.mp4";
import building from "../assets/building.mp4";
import menu from "../assets/menu.mp4";
import analytics from "../assets/analytics.mp4";
import zero from "../assets/zero.mp4";

const Example = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // State for responsive scroll distance
  const [endValue, setEndValue] = useState("-60%");

  useEffect(() => {
    const updateEndValue = () => {
      if (window.innerWidth < 768) {
        // mobile & small screens
        setEndValue("-73%");
      } else {
        // laptop & larger screens
        setEndValue("-48%");
      }
    };

    updateEndValue(); // run once on mount
    window.addEventListener("resize", updateEndValue);

    return () => window.removeEventListener("resize", updateEndValue);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", endValue]);

  return (
    <section
      ref={targetRef}
      className="relative h-[200vh] sm:h-[200vh] md:h-[200vh] bg-yellow-400 z-10"
    >
      <div className="sticky top-0 flex h-[45vh] md:h-[60vh] items-center overflow-hidden">
        <h2 className="text-black font-bold text-xl w-full sm:text-2xl md:text-3xl mb-2 absolute top-5 left-1/2 -translate-x-1/2 z-10 text-center">
          What makes us special...
        </h2>

        <motion.div
          style={{ x }}
          className="flex gap-6 px-6 sm:px-10 md:px-16 lg:px-20 -ml-7"
        >
          {usps.map((usp) => (
            <Card key={usp.title} usp={usp} />
          ))}
        </motion.div>
      </div>



 

<FoodGridSection/>
    </section>
  );
};

const Card = ({ usp }) => (
  <div
    className="group bg-black z-10 rounded-2xl shadow-lg flex flex-col items-center justify-center
    px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 
    transition-transform duration-300 hover:scale-105 w-[25rem]"
  >
    <video
      src={usp.video}
      autoPlay
      loop
      muted
      playsInline
      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain rounded-xl mb-3 sm:mb-4"
    />
    <h3 className="text-yellow-200 font-bold text-lg sm:text-xl md:text-2xl text-center mb-1">
      {usp.title}
    </h3>
    <p className="text-white text-sm sm:text-base md:text-lg text-center leading-snug px-2">
      {usp.desc}
    </p>
  </div>
);

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
  {
    video: gourmet,
    title: "Chefless Model",
    desc: "Automated precision, no chefs required — consistency redefined.",
  },
];

export default Example;
