"use client";

import { motion } from "framer-motion";

export default function StatsBar() {
  const stats = [
    {
      value: "13+",
      label: "Years inside clinical trials",
      subtext: "Operations across CROs & academic centers",
      accent: "text-teal-600",
    },
    {
      value: "100%",
      label: "Founder-led, every placement",
      subtext: "Direct access to Amanda Sanchez",
      accent: "text-gold-600",
    },
    {
      value: "CRA · CTM · CTA",
      label: "The roles we live in",
      subtext: "Matched by therapeutic area & study phase",
      accent: "text-navy-900",
    },
    {
      value: "USA",
      label: "Nationwide Coverage",
      subtext: "Serving sponsors & candidates across the country",
      accent: "text-teal-600",
    },
  ];

  return (
    <div className="bg-white border-b border-slate-200/80 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group p-5 rounded-2xl bg-slate-50/60 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all flex flex-col items-center text-center cursor-default"
            >
              <span className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${stat.accent} group-hover:scale-105 transition-transform duration-200`}>
                {stat.value}
              </span>
              <span className="text-sm font-bold text-navy-900 mt-2">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 mt-1 leading-relaxed">
                {stat.subtext}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
