import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AlertCircle, CheckCircle2, Calendar, ShieldCheck, Clock, Layers } from "lucide-react";
import SponsorInquiryForm from "@/components/forms/SponsorInquiryForm";

export const metadata: Metadata = {
  title: "CRA, CTM & CTA Staffing for Sponsors & CROs | FarashaCRP",
  description:
    "Stop losing study time to slow staffing. FarashaCRP delivers vetted clinical research talent matched to your therapeutic area — with direct access to the founder making the match.",
};

export default function ForSponsorsPage() {
  const problems = [
    "A monitoring role sits open for weeks while milestones slip — and every staffing agency promises the same generic 'extensive database.'",
    "Candidates who look qualified on paper but have never worked your specific indication — because nobody screening them understood oncology or rare disease nuances.",
    "High-volume staffing firms that flood your inbox with 20 unfiltered resumes and call it clinical service.",
    "Rigid vendor agreements that lock you into fixed headcount when trial enrollment shifts mid-study.",
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: "VETTED BY A PRACTITIONER",
      desc: "Every candidate is screened by Amanda Sanchez, RN, CCRP — someone who has written monitoring reports, managed sites, and led cross-functional study teams.",
    },
    {
      icon: Layers,
      title: "FLEXIBLE BY DEFAULT",
      desc: "Contract, direct-hire, or embedded staffing. Scale up monitors for rapid site activations or database locks, and scale down smoothly without renegotiating entire MSAs.",
    },
    {
      icon: Clock,
      title: "CONSULTING WHEN YOU NEED IT",
      desc: "Sometimes the roadblock isn't headcount — it's trial process, monitoring plans, or site engagement. Get actionable operational guidance from the inside.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="hero-mesh text-white py-20 lg:py-28 relative overflow-hidden border-b border-white/10">
        {/* Background Butterfly Watermark */}
        <div className="absolute right-[-4%] top-1/2 -translate-y-1/2 w-[400px] sm:w-[550px] lg:w-[700px] opacity-[0.22] pointer-events-none select-none filter invert brightness-125">
          <img
            src="/images/farasha-butterfly.png"
            alt="Farasha Emblem Watermark"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-teal-300">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              For Sponsors & CROs
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Your study timeline shouldn&apos;t depend on a recruiter learning what a CRA does.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Vetted clinical research talent and operational consulting — from a founder who&apos;s spent 13 years running the teams you&apos;re trying to build.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem & The Farasha Standard */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative overflow-hidden">
        {/* Ambient Body Butterfly Watermark */}
        <div className="absolute right-[-80px] top-[200px] w-[500px] lg:w-[700px] opacity-[0.10] pointer-events-none select-none z-0">
          <img
            src="/images/farasha-butterfly.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="relative z-10 space-y-16">
        {/* The Problem Section */}
        <div className="rounded-3xl bg-white border border-rose-100 p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              The Reality of Clinical Staffing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
              If you&apos;ve staffed a trial before, you&apos;ve lived at least one of these:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {problems.map((prob, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 leading-relaxed">{prob}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
              What Farasha Offers
            </span>
            <h2 className="text-3xl font-bold text-navy-900">
              Staffing that starts with understanding your protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 p-8 space-y-4 shadow-sm hover:border-teal-500/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900">{pil.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{pil.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto pt-6">
          <SponsorInquiryForm />
        </div>

        {/* Closing Consultation Block */}
        <div
          id="consult"
          className="rounded-3xl bg-navy-950 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xl border border-white/10"
        >
          <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto">
            <Calendar className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold">Rather talk it through?</h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
              Book a direct 20-minute strategy call with Amanda Sanchez. Worst case, you leave with a much sharper diagnostic of your trial staffing gap.
            </p>
          </div>
          <div className="pt-2">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-colors shadow-md"
            >
              <span>Schedule 20-Min Call via Calendly</span>
            </a>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
