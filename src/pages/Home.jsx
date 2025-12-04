import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import fire from "../assets/fire.mp4";
import "@fontsource/cabin-sketch";

export default function Home() {
  const fullText = "from factory to store";
  const [text, setText] = useState("");
  const [subIndex, setSubIndex] = useState(0);

  // TYPEWRITER (only types once, no delete)
  useEffect(() => {
    if (subIndex === fullText.length) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
      setText(fullText.substring(0, subIndex + 1));
    }, 120);

    return () => clearTimeout(timeout);
  }, [subIndex]);

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

      {/* Wrapper */}
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center h-full gap-8">

        {/* LEFT – Lottie Animation */}
        <div
          className="relative flex items-center justify-center 
          w-full md:w-1/2 mb-6 md:mb-0 sm:mt-10
          h-[200px] sm:h-[280px] md:h-[520px]"
        >
          <motion.div
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
              y: [-300, 0, -10, 0],
            }}
            transition={{
              duration: 1.2,
              ease: [0.3, 1.1, 0.3, 1],
            }}
            className="
              relative 
              w-[90%]          /* bigger on mobile */
              sm:w-[85%]       
              md:w-[80%]       /* desktop size */
            "
          >
            <Player
              autoplay
              loop
              src="/First.json"
              className="w-full h-full"
            />
          </motion.div>
        </div>

        {/* RIGHT – Typewriter + Buttons */}
        <motion.div
          className="flex flex-col items-center text-center md:items-start md:text-left 
          z-10 w-full md:w-[65%] md:pl-10"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: [0.68, -0.55, 0.27, 1.55] }}
        >

          {/* TYPEWRITER TEXT */}
          <motion.h1
            className="font-['Cabin_Sketch'] text-white text-4xl sm:text-6xl md:text-8xl font-bold leading-tight
            drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] min-h-[90px] sm:min-h-[110px] -mt-12 mb-3"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {text}
            {subIndex < fullText.length && (
              <span className="border-r-4 border-white ml-2 animate-pulse"></span>
            )}
          </motion.h1>

          {/* BUTTONS */}
          <motion.div
            className="flex flex-row justify-center md:justify-start items-center 
            gap-4 sm:gap-6 sm:mt-6 w-full flex-wrap"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.68, -0.55, 0.27, 1.55] }}
          >
            <button
              className="px-5 sm:px-7 py-2 sm:py-3 border border-yellow-400 text-yellow-400 
              font-['Cabin_Sketch'] text-base sm:text-lg md:text-xl rounded-full 
              flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-black 
              transition-all duration-300 hover:shadow-[0_0_25px_#facc15]"
            >
              Contact
            </button>

            <button
              className="px-5 sm:px-7 py-2 sm:py-3 border border-yellow-400 text-yellow-400 
              font-['Cabin_Sketch'] text-base sm:text-lg md:text-xl rounded-full 
              flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-black 
              transition-all duration-300 hover:shadow-[0_0_25px_#facc15]"
            >
              Menu
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
