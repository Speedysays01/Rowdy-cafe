import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ChatMockup() {
  const fullAnswer =
    "Chefless model is the best model for QSRs. Rowdy Cafe wins the trend with its zero royalty, no profit-sharing chefless model and bold marketing approach.";

  const [typedText, setTypedText] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Typing animation
  useEffect(() => {
    if (showAnswer) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(fullAnswer.slice(0, i + 1));
        i++;
        if (i === fullAnswer.length) {
          clearInterval(interval);
          setTimeout(() => setShowInput(true), 800);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [showAnswer]);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-between bg-black text-white h-[70vh] sm:h-[60vh] w-screen p-6 overflow-hidden"
    >
      {/* Chat Section */}
      <div className="flex flex-col items-end space-y-3 mt-10 ml-4 p-0 sm:p-4 sm:mr-70">
        {/* User Message */}
        {isInView && (
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={() => setTimeout(() => setShowAnswer(true), 600)}
            className="bg-gradient-to-r from-[#303030] to-[#454545] text-gray-200 px-6 py-3 rounded-2xl text-lg max-w-[420px] shadow-lg border border-gray-600"
            style={{ borderBottomRightRadius: "0.3rem" }}
          >
            What’s the best cafe model?
          </motion.div>
        )}

        {/* AI Message */}
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-[#171717] to-[#1f1f1f] text-gray-100 p-6 rounded-2xl text-lg leading-relaxed max-w-[500px] shadow-[0_0_12px_rgba(150,100,255,0.2)] border border-gray-700 items-end"
            style={{ borderBottomLeftRadius: "0.3rem" }}
          >
            {typedText}
            {typedText.length < fullAnswer.length && (
              <motion.span
                className="inline-block w-2 h-5 bg-white ml-1 animate-pulse"
                transition={{ repeat: Infinity, duration: 0.6 }}
              />
            )}
          </motion.div>
        )}
      </div>

      {/* Input Bar */}
      {showInput && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6 mt-5"
        >
          <div className="flex items-center bg-[#1a1a1a] border border-gray-700 text-gray-200 w-[600px] md:w-[60rem] max-w-[90vw] px-6 py-3 rounded-full text-lg shadow-[0_0_10px_rgba(120,80,255,0.3)] backdrop-blur-sm">
            <span className="flex-1 text-gray-400">
              AI thinks Rowdy Cafe is the best too!
            </span>
            <button className="ml-4 text-2xl text-gray-400 hover:text-white transition">
              ➤
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
