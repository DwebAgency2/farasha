"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare, Sparkles } from "lucide-react";

export default function ClosingCTA() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-bold tracking-wider uppercase text-teal-700">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Get Started</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
              The right person changes everything
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you&apos;re staffing an active study or planning your next career move — start with one high-impact conversation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-shimmer-wrap btn-press w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-navy-950/20 group"
            >
              <MessageSquare className="w-4 h-4 text-teal-400" />
              <span>Contact Amanda Directly</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/for-sponsors#consult"
              className="btn-press w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-navy-900 bg-teal-50 hover:bg-teal-100/80 border border-teal-200/80 transition-all flex items-center justify-center gap-2.5 shadow-sm"
            >
              <Calendar className="w-4 h-4 text-teal-700" />
              <span>Schedule a 20-Min Consultation</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
