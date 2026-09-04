import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Award, Users2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-mesh text-white pt-16 pb-20 lg:pt-24 lg:pb-32 border-b border-white/10">
      {/* Background Subtle Butterfly Watermark */}
      <div className="absolute right-[-6%] top-1/2 -translate-y-1/2 w-[450px] lg:w-[700px] opacity-[0.22] pointer-events-none select-none filter invert brightness-125">
        <img
          src="/images/farasha-butterfly.png"
          alt="Farasha Emblem Watermark"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              <span className="tracking-wide">People. Research. Possibility.</span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                Farasha
              </h1>
              <p className="text-xl sm:text-2xl font-serif italic text-gold-400 tracking-wide">
                Boutique by design. Clinical by nature.
              </p>
            </div>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Staffing and consulting from someone who&apos;s spent 13 years inside clinical trials — not just inside a recruiting database. Every placement is vetted with hands-on trial operations expertise.
            </p>

            {/* Dual CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/for-sponsors"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 shadow-lg shadow-teal-900/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Request talent</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/for-professionals"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-100 bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm transition-all text-center"
              >
                Find your next role
              </Link>
            </div>

            {/* Trust Micro-Checkmarks */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>100% Founder-Led Vetting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>CRAs · CTMs · CTAs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Nationwide Placement</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card (Col 8-12) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-gold-500/20 rounded-2xl blur-xl"></div>

              {/* Glass Card Container */}
              <div className="relative glass-card-dark rounded-2xl p-6 sm:p-7 border border-white/15 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-gold-400/40 shadow-inner">
                      <Image
                        src="/images/dr-amanda-1.jpg"
                        alt="Amanda Sanchez, RN, CCRP"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white leading-snug">
                        Amanda Sanchez, RN, CCRP
                      </h3>
                      <p className="text-xs text-gold-400">
                        Founder & Managing Director
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/30 text-[11px] font-medium text-teal-300">
                    Clinical Ops Veteran
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic">
                  &ldquo;Most staffing firms match keywords. We match people we&apos;d hire ourselves — because a hire that doesn&apos;t stick costs everyone.&rdquo;
                </p>

                {/* Quick Capability Matrix */}
                <div className="space-y-2.5 pt-1 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-slate-300">Sponsor Delivery</span>
                    <span className="font-semibold text-teal-300">Days, not hiring cycles</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-slate-300">Matching Standard</span>
                    <span className="font-semibold text-white">By Therapeutic Indication</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-slate-300">Candidate Partnership</span>
                    <span className="font-semibold text-gold-400">Post-Day-1 Support</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="w-full py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Read Amanda&apos;s Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
