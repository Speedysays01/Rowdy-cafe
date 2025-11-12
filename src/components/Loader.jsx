import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Loader({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete && onComplete();
    }, 1800); // shorter total duration (ends right after yellow fills)
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-[9999] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          {/* Punch-in Logo */}
          <motion.img
            src={logo}
            alt="Rowdy Cafe Logo"
            className="relative z-10 w-[120px] sm:w-[150px] md:w-[200px] rounded-full border-2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.5, 1.2, 1.4],
              opacity: [0, 1, 1, 1],
              rotate: [0, -6, 6, 0],
            }}
            transition={{
              duration: 0.9,
              times: [0, 0.4, 0.7, 1],
              ease: "easeOut",
            }}
          />

          {/* Fast Expanding Yellow Burst */}
          <motion.div
            className="absolute w-[150px] h-[150px] bg-yellow-400 rounded-full"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: [0, 3, 10, 30, 60], opacity: [1, 1, 1, 1, 1] }}
            transition={{
              delay: 0.7,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{ zIndex: 5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
