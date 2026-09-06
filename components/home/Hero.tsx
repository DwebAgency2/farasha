"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Award, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-mesh text-white pt-16 pb-20 lg:pt-24 lg:pb-32 border-b border-white/10">
      {/* Background Subtle Butterfly Watermark with soft breathing float */}
      <div className="absolute right-[-6%] top-1/2 -translate-y-1/2 w-[450px] lg:w-[700px] opacity-[0.22] pointer-events-none select-none filter invert brightness-125 animate-float-slow">
        <img
          src="/images/farasha-butterfly.png"
          alt="Farasha Emblem Watermark"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy (Col 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Pill Eyebrow with Live Radar Pulse */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200 shadow-sm hover:border-teal-400/40 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
              </span>
              <span className="tracking-wide">People. Research. Possibility.</span>
              <span className="text-white/40">·</span>
              <span className="text-teal-300 font-semibold">Active Trial Placements</span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
              >
                Farasha
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl sm:text-2xl font-serif italic text-gold-400 tracking-wide"
              >
                Boutique by design. Clinical by nature.
              </motion.p>
            </div>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              Staffing and consulting from someone who&apos;s spent 13 years inside clinical trials — not just inside a recruiting database. Every placement is vetted with hands-on trial operations expertise.
            </motion.p>

            {/* Dual CTAs with Micro-Interactions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                href="/for-sponsors"
                className="btn-shimmer-wrap btn-press px-8 py-4 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 shadow-lg shadow-teal-900/40 border border-teal-400/30 flex items-center justify-center gap-2 group"
              >
                <span>Request talent</span>
                <ArrowRight className="w-4 h-4 text-teal-200 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/for-professionals"
                className="btn-press px-8 py-4 rounded-xl text-sm font-semibold text-slate-100 bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm transition-all text-center hover:border-white/40 shadow-sm"
              >
                Find your next role
              </Link>
            </motion.div>

            {/* Trust Micro-Checkmarks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300"
            >
              <div className="flex items-center gap-2 group cursor-default">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">100% Founder-Led Vetting</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">CRAs · CTMs · CTAs</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">Nationwide Placement</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual Card (Col 8-12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              {/* Decorative Pulsing Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500/25 via-teal-400/15 to-gold-500/25 rounded-3xl blur-2xl animate-pulse-glow pointer-events-none"></div>

              {/* Floating Trust Badge */}
              <div className="absolute -top-4 -right-3 z-20 animate-float">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-900/90 border border-teal-400/40 backdrop-blur-md shadow-xl text-[11px] font-bold text-white">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  <span>13+ Yrs Operations</span>
                </div>
              </div>

              {/* Glass Card Container with Card Lift physics */}
              <div className="relative card-lift-dark glass-card-dark rounded-2xl p-6 sm:p-7 border border-white/15 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-gold-400/40 shadow-inner group">
                      <Image
                        src="/images/dr-amanda-1.jpg"
                        alt="Amanda Sanchez, RN, CCRP"
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white leading-snug">
                        Amanda Sanchez, RN, CCRP
                      </h3>
                      <p className="text-xs text-gold-400 font-medium">
                        Founder & Managing Director
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-teal-500/15 border border-teal-500/30 text-[11px] font-semibold text-teal-300">
                    Clinical Ops Veteran
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic">
                  &ldquo;Most staffing firms match keywords. We match people we&apos;d hire ourselves — because a hire that doesn&apos;t stick costs everyone.&rdquo;
                </p>

                {/* Quick Capability Matrix with interactive item highlights */}
                <div className="space-y-2.5 pt-1 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-500/30 transition-all">
                    <span className="text-slate-300">Sponsor Delivery</span>
                    <span className="font-semibold text-teal-300">Days, not hiring cycles</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all">
                    <span className="text-slate-300">Matching Standard</span>
                    <span className="font-semibold text-white">By Therapeutic Indication</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold-400/30 transition-all">
                    <span className="text-slate-300">Candidate Partnership</span>
                    <span className="font-semibold text-gold-400">Post-Day-1 Support</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="btn-press w-full py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-1.5 group"
                  >
                    <span>Read Amanda&apos;s Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
