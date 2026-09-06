"use client";

import { motion } from "framer-motion";
import { Stethoscope, Handshake, Zap } from "lucide-react";

export default function ValueProps() {
  const values = [
    {
      icon: Stethoscope,
      tag: "01 · PRACTITIONER STANDARD",
      title: "WE'VE DONE THE JOB",
      description:
        "Amanda spent 13 years in trial operations at CROs and academic cancer centers. When we vet a CRA, we know exactly what we're looking at — from monitoring report rigor to site protocol compliance.",
      accent: "hover:border-teal-500/50",
      iconColor: "text-teal-600 bg-teal-50 group-hover:bg-teal-600 group-hover:text-white",
      topBorder: "bg-teal-600",
    },
    {
      icon: Handshake,
      tag: "02 · ACCOUNTABILITY",
      title: "RELATIONSHIPS, NOT REQUISITIONS",
      description:
        "We stay with both sides after the placement — because a hire that doesn't stick costs everyone. Our measure of success is month six, not day one.",
      accent: "hover:border-gold-500/50",
      iconColor: "text-gold-600 bg-gold-50 group-hover:bg-gold-500 group-hover:text-white",
      topBorder: "bg-gold-500",
    },
    {
      icon: Zap,
      tag: "03 · BOUTIQUE SPEED",
      title: "STRAIGHT ANSWERS, FAST",
      description:
        "You talk to the person making the match — no junior account managers, no runaround, no waiting a week for an unvetted stack of resumes.",
      accent: "hover:border-navy-500/50",
      iconColor: "text-navy-700 bg-navy-50 group-hover:bg-navy-900 group-hover:text-white",
      topBorder: "bg-navy-900",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-teal-600">
            Why Farasha
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Most staffing firms match keywords. <br className="hidden sm:inline" />
            We match people we&apos;d hire ourselves.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            The difference between an automated resume filter and a 13-year clinical trial lead.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className={`card-lift group relative rounded-2xl p-8 bg-white border border-slate-200/90 ${v.accent} shadow-sm flex flex-col justify-between overflow-hidden cursor-default`}
              >
                {/* Top Colored Accent Stripe on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${v.topBorder} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${v.iconColor} shadow-sm`}
                    >
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 group-hover:text-navy-900 transition-colors">
                      {v.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 tracking-tight group-hover:text-teal-700 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
