import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/title.jpg";
import fire from "../assets/fire.mp4";
import "@fontsource/cabin-sketch";

export default function Home() {
  const texts = ["Break the rules", "Taste the Rowdy"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (index === texts.length) return;
    const current = texts[index];
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, deleting ? 60 : 120);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  useEffect(() => {
    setText(texts[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-center 
      text-white overflow-hidden h-[70vh] md:h-screen w-full"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-60"
      >
        <source src={fire} type="video/mp4" />
      </video>

      {/* Content Wrapper */}
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center h-full gap-8">
        
        {/* LEFT - Rings & Logo */}
        <div
          className="relative flex items-center justify-center 
          w-full md:w-1/2 mb-6 md:mb-0 sm:mt-10
          h-[180px] sm:h-[240px] md:h-[520px]"
        >
          {/* Outer Ring */}
          {/* <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 360 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute aspect-square w-[70%] sm:w-[80%] md:w-[85%] 
            rounded-full border-[3px] sm:border-[4px] md:border-[5px] 
            border-dashed border-orange-400 animate-rotate"
          ></motion.div> */}

          {/* Middle Ring */}
          {/* <motion.div
            initial={{ scale: 0, opacity: 0, rotate: 180 }}
            animate={{ scale: 1, opacity: 1, rotate: -360 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="absolute aspect-square w-[50%] sm:w-[60%] md:w-[65%] 
            rounded-full border-[3px] sm:border-[4px] md:border-[5px] 
            border-dotted border-yellow-400 animate-rotateReverse"
          ></motion.div> */}

          {/* Inner Glow Ring */}
          {/* <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.10 }}
            className="absolute aspect-square w-[35%] sm:w-[40%] md:w-[45%] 
            rounded-full border border-yellow-400 shadow-[0_0_25px_#facc15] animate-pulse-glow"
          ></motion.div> */}

          {/* Logo (Static – No entry animation) */}
        <motion.img
        src={logo}
        alt="Rowdy Cafe Logo"
        className="relative w-[75%] sm:w-[70%] md:w-[80%] rounded-full"
        initial={{
          scale: 3,
          opacity: 0,
          rotate: 15,
          y: -300,
        }}
        animate={{
          scale: [3, 1, 1.05, 1],
          opacity: [0, 1, 1, 1],
          rotate: [15, 0, -3, 0],
          y: [ -300, 0, -10, 0 ],
        }}
        transition={{
          duration: 1.2,
          ease: [0.3, 1.1, 0.3, 1],
        }}
      
      />
        </div>

        {/* RIGHT - Text & Buttons */}
        <motion.div
          className="flex flex-col items-center text-center md:items-start md:text-left 
          z-10 w-full md:w-[65%] md:pl-10"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: [0.68, -0.55, 0.27, 1.55],  }}
        >
          {/* Typewriter Text */}
          <motion.h1
            className="font-['Cabin_Sketch'] text-white text-4xl sm:text-6xl md:text-8xl font-bold leading-tight
            drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] min-h-[90px] sm:min-h-[110px]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut",  }}
          >
            {text}
            <span className="border-r-4 border-white ml-2 animate-pulse"></span>
          </motion.h1>

          {/* Buttons */}
          <motion.div
            className="flex flex-row justify-center md:justify-start items-center 
            gap-4 sm:gap-6 sm:mt-6 w-full flex-wrap"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.68, -0.55, 0.27, 1.55],  }}
          >
            <button
              className="px-5 sm:px-7 py-2 sm:py-3 border border-yellow-400 text-yellow-400 
              font-['Cabin_Sketch'] text-base sm:text-lg md:text-xl rounded-full 
              flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-black 
              transition-all duration-300 hover:shadow-[0_0_25px_#facc15]"
            >
              <i className="fas fa-envelope"></i>
              Contact
            </button>

            <button
              className="px-5 sm:px-7 py-2 sm:py-3 border border-yellow-400 text-yellow-400 
              font-['Cabin_Sketch'] text-base sm:text-lg md:text-xl rounded-full 
              flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-black 
              transition-all duration-300 hover:shadow-[0_0_25px_#facc15]"
            >
              <i className="fas fa-utensils"></i>
              Menu
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
