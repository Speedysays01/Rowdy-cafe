// src/pages/Investment.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Investment() {
  const videoSrc = "/videos/investment_reel.mp4";

  const rows = [
    ["Franchise Fees", "₹ 1,00,000"],
    ["Kitchen Equipment", "₹ 1,80,000"],
    ["Kitchen cutlery", "₹ 70,000"],
    ["Partition wall", "₹ 15,000"],
    ["Electric Fitting", "₹ 60,000 - 80,000"],
    ["Interior", "₹ 1,00,000 - 1,50,000"],
    ["Seating (32-40 seater)", "₹ 80,000 - 1,00,000"],
    ["Glass Door", "₹ 30,000 - 40,000"],
    ["AC", "₹ 40,000"],
    ["Signage (1100rs per sqft)", "₹ 20,000 - 40,000"],
    ["Billing Software", "₹ 6,000"],
    ["Billing Printer", "₹ 2,500"],
    ["Music System", "₹ 10,000 - 15,000"],
    ["Refundable Deposit", "₹ 50,000"]
  ];

  const totalRange = "7.7 Lacs - 9 Lacs";

  // Animation Variants
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerParent = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const rowAnim = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }
  };

  return (
    <main className="w-full bg-black text-white">

      {/* MAIN CONTENT */}
      <section className="w-full mt-8 px-4 sm:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">

            {/* RIGHT — Heading Section */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center justify-center lg:justify-center"
            >
              <div className="max-w-3xl text-center lg:text-left px-2 lg:px-6">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block bg-yellow-400 text-black px-4 py-2 text-lg sm:text-xl md:text-2xl font-bold rounded-sm"
                >
                  INVESTMENT BREAKDOWN
                </motion.h3>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold text-white"
                >
                  100% investment <br className="hidden md:block" /> transparency with no{" "}
                  <br className="hidden lg:block" /> hidden costs
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mt-6 text-white/80 max-w-xl text-base sm:text-lg"
                >
                  You are free to handle your own setup, and there is no need to pay the company for it.
                </motion.p>
              </div>
            </motion.div>

            {/* LEFT — Table */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.div
                className="w-full max-w-[420px] lg:max-w-[460px]"
                variants={staggerParent}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="border border-white/80 p-0 rounded-sm overflow-hidden shadow-lg">
                  <table className="w-full table-fixed border-collapse">
                    <tbody>
                      {rows.map(([label, amount], idx) => (
                        <motion.tr
                          key={idx}
                          variants={rowAnim}
                          className="border-b border-white/30 bg-black/80"
                        >
                          <td className="px-4 py-3 text-left align-middle">
                            <span className="text-sm sm:text-base md:text-lg font-medium">
                              {label}
                            </span>
                          </td>
                          <td className="w-40 px-4 py-3 text-right align-middle">
                            <span className="text-sm sm:text-base md:text-lg font-semibold">
                              {amount}
                            </span>
                          </td>
                        </motion.tr>
                      ))}

                      {/* TOTAL Row */}
                      <motion.tr
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-yellow-400"
                      >
                        <td className="px-4 py-3 text-left">
                          <span className="text-base sm:text-lg md:text-xl font-bold text-black">
                            Total
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span className="text-base sm:text-lg md:text-xl font-bold text-black">
                            {totalRange}
                          </span>
                        </td>
                      </motion.tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
