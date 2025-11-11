import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CafeChatSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const questionControls = useAnimation();
  const answerControls = useAnimation();

  const [showAnswer, setShowAnswer] = useState(false);
  const [typedQuestion, setTypedQuestion] = useState("");

  const question = "What is the best cafe model?";
  const answer =
    "The chefless cafe model is emerging as the new trend. It minimizes operational costs and maximizes efficiency, allowing automation and smart devices to handle most of the cooking process while maintaining consistency and speed.";

  // Typing effect
  useEffect(() => {
    if (isInView) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedQuestion(question.slice(0, i + 1));
        i++;
        if (i === question.length) {
          clearInterval(interval);
          setTimeout(() => setShowAnswer(true), 800);
        }
      }, 60);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  // Trigger question animation
  useEffect(() => {
    if (isInView) questionControls.start("visible");
  }, [isInView, questionControls]);

  // Trigger answer animation once visible
  useEffect(() => {
    if (showAnswer) answerControls.start("visible");
  }, [showAnswer, answerControls]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-black flex flex-col justify-end items-center px-4 pb-20"
    >
      <div className="w-full sm:w-4/5 max-w-3xl flex flex-col gap-4 z-10">
        {/* Question */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={questionControls}
          transition={{ duration: 0.6 }}
          className="self-start bg-[#2a2a2a] rounded-2xl px-5 py-3 text-white text-base border border-neutral-800 max-w-[80%]"
        >
          <span className="text-green-400 font-semibold">User:</span>{" "}
          <span>{typedQuestion}</span>
          {typedQuestion.length === question.length && !showAnswer && (
            <motion.span
              className="inline-block w-[2px] h-4 bg-white ml-1 animate-pulse"
              transition={{ repeat: Infinity, duration: 0.7 }}
            />
          )}
        </motion.div>

        {/* Answer */}
        {showAnswer && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={answerControls}
            transition={{ duration: 0.8 }}
            className="self-end bg-[#1a1a1a] rounded-2xl px-5 py-3 text-yellow-300 text-base border border-neutral-700 max-w-[80%]"
          >
            <span className="text-blue-400 font-semibold">ChatGPT:</span>{" "}
            {answer}
          </motion.div>
        )}
      </div>
    </section>
  );
}
