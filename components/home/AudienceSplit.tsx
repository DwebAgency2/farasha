"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, UserCircle2, CheckCircle2 } from "lucide-react";

export default function AudienceSplit() {
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
            Tailored Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Two audiences. One standard: the right fit.
          </h2>
          <p className="text-base text-slate-600">
            Whether you are managing study milestones or looking for your next career move, we speak your exact language.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Sponsors & CROs */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="card-lift group relative rounded-3xl bg-white border border-slate-200/90 hover:border-teal-500/40 p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-8 overflow-hidden"
          >
            {/* Top Accent Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy-900 via-teal-700 to-teal-500"></div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-navy-900 text-teal-300 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-navy-800 transition-all duration-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-navy-50 text-navy-800 text-xs font-bold tracking-wide border border-navy-100">
                  For Sponsors & CROs
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-navy-900 leading-snug group-hover:text-navy-800 transition-colors">
                  Your study can&apos;t wait on a slow shortlist
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every week a monitoring role sits empty, timelines slip. We deliver vetted CRAs, CTMs, and CTAs matched to your therapeutic area — usually within days, not hiring cycles.
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Contract and direct-hire staffing, matched by study phase and indication</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Operational consulting from a founder who&apos;s run trial teams herself</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>One point of contact who actually knows your protocol</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/for-sponsors"
                className="btn-press btn-shimmer-wrap w-full py-4 px-6 rounded-xl text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 transition-all flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>Request talent for your study</span>
                <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Clinical Research Professionals */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="card-lift group relative rounded-3xl bg-white border border-slate-200/90 hover:border-gold-500/40 p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-8 overflow-hidden"
          >
            {/* Top Accent Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-600 via-gold-500 to-gold-400"></div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-teal-500 transition-all duration-300">
                  <UserCircle2 className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold tracking-wide border border-teal-100">
                  For Professionals
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-navy-900 leading-snug group-hover:text-navy-800 transition-colors">
                  A recruiter who knows what your job actually takes
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Tired of being treated like a keyword match? Work with a recruiter who knows the difference between Phase I oncology and Phase III cardiology, and advocates for where you want to go.
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Roles matched to your therapeutic depth, not just your last title</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Transparent conversations about rates, travel, and workload expectations</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Ongoing advocacy through your assignment and beyond</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/for-professionals"
                className="btn-press w-full py-4 px-6 rounded-xl text-sm font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>Find your next clinical role</span>
                <ArrowRight className="w-4 h-4 text-navy-700 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
