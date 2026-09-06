"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, HeartPulse } from "lucide-react";

export default function FounderTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="card-lift-dark group rounded-3xl bg-navy-950 text-white overflow-hidden shadow-2xl border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Founder Image Col */}
            <div className="lg:col-span-5 relative h-96 lg:h-full min-h-[460px] bg-navy-900 overflow-hidden">
              <Image
                src="/images/dr-amanda-2.jpg"
                alt="Amanda Sanchez, RN, CCRP"
                fill
                className="object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy-950"></div>
            </div>

            {/* Founder Bio Col */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest uppercase text-teal-400">
                  Founder & Managing Director
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Amanda Sanchez, <span className="text-gold-400 font-medium">RN, CCRP</span>
                </h2>
                <p className="text-sm font-semibold text-slate-300">
                  13+ Years in Clinical Research Operations
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-xs text-slate-200 transition-all cursor-default">
                  <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
                  <span>Registered Nurse (RN)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-gold-400/40 hover:bg-white/10 text-xs text-slate-200 transition-all cursor-default">
                  <Award className="w-3.5 h-3.5 text-gold-400" />
                  <span>CCRP Certified</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-teal-400/40 hover:bg-white/10 text-xs text-slate-200 transition-all cursor-default">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  <span>Former PPD / CRO Lead</span>
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Registered nurse. Certified Clinical Research Professional. 13 years across leading CROs and academic cancer centers — building the same research teams she now helps you staff.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Farasha exists because of one belief: the best person to find great clinical research talent is someone who has lived the work.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="btn-press btn-shimmer-wrap inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-all shadow-md group/btn"
                >
                  <span>Meet Amanda & Learn Our Approach</span>
                  <ArrowRight className="w-4 h-4 text-teal-200 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
