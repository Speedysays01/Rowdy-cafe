// Slider.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Slider() {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPositionIndexes((prev) => prev.map((p) => (p + 1) % 5));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Correct image paths (React auto-serves from /public)
  const images = [
    "/ramen2.jpg",
    "/momos.jpg",
    "/drink.jpg",
    "/pizza.jpg",
    "/chicken.jpg",
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  // Updated scaling + spacing
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 10 },         // larger center image
    left1: { x: "-55%", scale: 0.85, zIndex: 5 },
    left: { x: "-100%", scale: 0.65, zIndex: 3 },
    right: { x: "100%", scale: 0.65, zIndex: 3 },
    right1: { x: "55%", scale: 0.85, zIndex: 5 },
  };

  return (
    <div className="">
      <div className="bg-yellow-400 w-full py-4">
        <h2 className="text-center text-black text-xl sm:text-2xl md:text-3xl font-bold">
          Menu designed specially for youth
        </h2>
      </div>

      <div className="flex items-center flex-col justify-center bg-black h-70vh mt-[8rem] md:mt-[30rem] relative overflow-visible">
        
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt="menu-item"
            className="
              rounded-2xl absolute shadow-xl 
              backdrop-blur-md bg-white/10 
              border border-white/20
            "
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              width: "45%",              // slightly larger images overall
              maxWidth: "380px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
