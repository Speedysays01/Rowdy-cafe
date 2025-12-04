import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ROI() {
  const tiers = [
    {
      label: "Sales per day: Upto 8000",
      monthlySales: "240000",
      grossMargin: "144000",
      rent: "Upto 35000",
      electricity: "10000",
      manpower: "Upto 40000",
      marketing: "10000",
      expensesTotal: "95000",
      netProfit: "49000",
      netMargin: "20%",
    },
    {
      label: "Sales per day: Upto 15000",
      monthlySales: "450000",
      grossMargin: "270000",
      rent: "Upto 75000",
      electricity: "18000",
      manpower: "Upto 60000",
      marketing: "12000",
      expensesTotal: "165000",
      netProfit: "105000",
      netMargin: "23%",
    },
    {
      label: "Sales per day: Upto 25000",
      monthlySales: "750000",
      grossMargin: "450000",
      rent: "Upto 125000",
      electricity: "22000",
      manpower: "Upto 75000",
      marketing: "15000",
      expensesTotal: "237000",
      netProfit: "213000",
      netMargin: "28%",
    },
    {
      label: "Sales per day: Upto 35000",
      monthlySales: "1050000",
      grossMargin: "630000",
      rent: "Upto 175000",
      electricity: "30000",
      manpower: "Upto 100000",
      marketing: "20000",
      expensesTotal: "325000",
      netProfit: "305000",
      netMargin: "29%",
    },
  ];

  const tableRef = useRef(null);
  const tableInView = useInView(tableRef, { once: true, margin: "-100px" });

  const cardFadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const textFade = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.25, duration: 0.5 } },
  };

  const tableFade = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="w-full min-h-screen bg-yellow-400 text-black py-10 px-4">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        className="text-center text-3xl font-bold text-black mb-8"
      >
        PROJECTED ROI
      </motion.h1>

      {/* MOBILE CARDS */}
      <div className="block lg:hidden space-y-6">
        {tiers.map((t, i) => {
          const cardRef = useRef(null);
          const cardInView = useInView(cardRef, { once: true, margin: "-100px" });

          return (
            <motion.div
              ref={cardRef}
              key={i}
              variants={cardFadeUp}
              initial="initial"
              animate={cardInView ? "animate" : "initial"}
              className="border border-white rounded-lg p-4 text-xs bg-black"
            >
              {/* Title — yellow */}
              <motion.h2
                variants={textFade}
                initial="initial"
                animate={cardInView ? "animate" : "initial"}
                className="text-yellow-400 font-bold text-base mb-2"
              >
                {t.label}
              </motion.h2>

              {/* Body — white */}
              <motion.div
                variants={textFade}
                initial="initial"
                animate={cardInView ? "animate" : "initial"}
                className="space-y-1 text-white"
              >
                <p>Monthly Sales: <span>{t.monthlySales}</span></p>
                <p>Monthly Gross Margin 60%: <span>{t.grossMargin}</span></p>

                <p className="mt-2 font-semibold text-white">Expenses</p>

                <p>Rent: <span>{t.rent}</span></p>
                <p>Electricity/Gas: <span>{t.electricity}</span></p>
                <p>Manpower: <span>{t.manpower}</span></p>
                <p>Marketing Cost: <span>{t.marketing}</span></p>

                <p className="font-semibold mt-2 text-white">
                  Monthly Expenses Total: <span>{t.expensesTotal}</span>
                </p>

                <p className="font-semibold text-white">
                  Net Profit (A-B): <span>{t.netProfit}</span>
                </p>

                <p>Net Margin %: <span>{t.netMargin}</span></p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* DESKTOP TABLE (unchanged colors except white text) */}
      <motion.div
        ref={tableRef}
        variants={tableFade}
        initial="initial"
        animate={tableInView ? "animate" : "initial"}
        className="hidden lg:block mt-12"
      >
        <table className="w-full border border-black text-sm bg-black text-white">
          <thead>
            <tr className="border-b border-white text-left">
              <th className="p-3 text-white">Sales Per Day</th>
              {tiers.map((t, i) => (
                <th key={i} className="p-3 text-yellow-400 font-bold">{t.label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {[
              ["Monthly Sales", "monthlySales"],
              ["Monthly Gross Margin 60%", "grossMargin"],
              ["Rent", "rent"],
              ["Electricity/Gas", "electricity"],
              ["Manpower", "manpower"],
              ["Marketing Cost", "marketing"],
              ["Monthly Expenses Total", "expensesTotal"],
              ["Net Profit (A-B)", "netProfit"],
              ["Net Margin %", "netMargin"],
            ].map(([label, key], rowIndex) => (
              <tr key={rowIndex} className="border-b border-white">
                <td className="p-3 text-white">{label}</td>
                {tiers.map((t, i) => (
                  <td key={i} className="p-3 text-white font-semibold">
                    {t[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
