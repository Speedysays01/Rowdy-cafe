import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import fire from "../assets/fire.mp4";
import "@fontsource/cabin-sketch"; // chalk-style font

export default function Home() {
  const texts = ["Break the rules.", "Taste the difference."];
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
      className="relative flex flex-col md:flex-row items-center justify-center text-white 
      pt-10 sm:pt-12 md:pt-28 overflow-hidden min-h-[60vh] md:min-h-screen"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-screen h-screen object-cover -z-10 opacity-60"
      >
        <source src={fire} type="video/mp4" />
      </video>

      {/* Content Wrapper */}
      <div
        className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center 
        h-[60vh] md:h-auto scale-[0.95] sm:scale-[1] md:scale-100"
      >
        {/* LEFT - Logo & Rings */}
        <div
          className="relative flex items-center justify-center 
          w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[520px] md:h-[520px] 
          mb-6 md:mb-0"
        >
          <div className="absolute w-[92%] h-[92%] rounded-full border-[3px] sm:border-[4px] border-dashed border-orange-400 animate-rotate"></div>
          <div className="absolute w-[75%] h-[75%] rounded-full border-[4px] sm:border-[5px] border-dotted border-yellow-400 animate-rotateReverse"></div>
          <div className="absolute w-[50%] h-[50%] rounded-full border border-yellow-400 animate-pulse-glow"></div>

          <motion.img
            src={logo}
            alt="Rowdy Cafe Logo"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80 rounded-full shadow-[0_0_40px_#facc15]"
          />
        </div>

        {/* RIGHT - Text & Buttons */}
        <motion.div
          className="flex flex-col items-center  text-center
          space-y-3 sm:space-y-5 md:space-y-6 md:ml-16 z-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="font-['Cabin_Sketch'] text-white 
            text-4xl sm:text-5xl md:text-8xl font-bold leading-tight 
            drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Rowdy Café
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-5xl font-medium text-yellow-300 
            h-[40px] min-h-[40px] w-full text-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {text}
            <span className="border-r-2 border-yellow-300 ml-1 animate-pulse"></span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-row justify-around items-center 
            gap-3 sm:gap-5 mt-3 sm:mt-4 w-full"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button
              className="px-4 sm:px-6 py-2 sm:py-3 border border-yellow-400 text-yellow-400 
              font-['Cabin_Sketch'] text-base sm:text-lg md:text-xl rounded-full 
              flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-black 
              transition-all duration-300 hover:shadow-[0_0_25px_#facc15]"
            >
              <i className="fas fa-envelope"></i>
              Contact
            </button>

            <button
              className="px-4 sm:px-6 py-2 sm:py-3 border border-yellow-400 text-yellow-400 
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
