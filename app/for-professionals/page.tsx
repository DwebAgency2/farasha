import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { UserCheck2, Compass, ShieldCheck, HeartHandshake, ArrowRight, MessageSquare } from "lucide-react";
import CandidateAppForm from "@/components/forms/CandidateAppForm";

export const metadata: Metadata = {
  title: "CRA, CTM & CTA Career Placement | FarashaCRP",
  description:
    "Work with a recruiter who's held your job. FarashaCRP matches clinical research professionals with sponsor and CRO roles that fit your therapeutic background — and stays with you after you start.",
};

export default function ForProfessionalsPage() {
  const offerings = [
    {
      icon: Compass,
      title: "ROLES THAT FIT",
      desc: "We match on therapeutic depth, protocol phase experience, and where you want your clinical career to go — not just the keywords on your last job title.",
    },
    {
      icon: ShieldCheck,
      title: "PRACTITIONER PREPARATION",
      desc: "Resume sharpening, monitoring report walkthrough prep, and negotiation guidance from someone who has evaluated candidates on actual hiring panels.",
    },
    {
      icon: HeartHandshake,
      title: "A PARTNER PAST DAY ONE",
      desc: "We stay in touch throughout your assignment. And when you are ready for your next move — in one year or three — we already know your clinical track record.",
    },
  ];

  const roles = [
    {
      title: "Clinical Research Associates (CRAs)",
      desc: "Contract and permanent monitoring roles across Phase I–IV trials nationwide. Regional, remote, and embedded assignments.",
      badge: "High Demand",
    },
    {
      title: "Clinical Trial Managers (CTMs)",
      desc: "Study oversight, vendor management, timeline governance, and cross-functional trial operational leadership.",
      badge: "Leadership",
    },
    {
      title: "Clinical Trial Assistants (CTAs)",
      desc: "Trial Master File (TMF) coordination, investigator site file management, and core study support roles.",
      badge: "Foundation",
    },
    {
      title: "Trial Operations & Consulting",
      desc: "Protocol review, audit readiness, rescue study remediation, and specialized clinical operations consulting.",
      badge: "Advisory",
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
              For Clinical Research Professionals
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              You&apos;ve earned better than a keyword match.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Amanda has written the monitoring reports, managed the sites, and sat in the interviews you&apos;re preparing for. That&apos;s the difference between a recruiter and an advocate.
            </p>
          </div>
        </div>
      </section>

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
        {/* Value Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
              The Farasha Difference
            </span>
            <h2 className="text-3xl font-bold text-navy-900">
              What working with us actually looks like
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((off, idx) => {
              const Icon = off.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 p-8 space-y-4 shadow-sm hover:border-teal-500/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900">{off.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{off.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Roles Grid */}
        <div className="rounded-3xl bg-navy-950 text-white p-8 sm:p-12 shadow-xl border border-white/10 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Positions We Place
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Where your clinical expertise fits
            </h2>
            <p className="text-sm text-slate-300">
              From field monitors to trial directors, we connect clinical professionals nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((r, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:bg-white/[0.08] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white">{r.title}</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[11px] font-semibold border border-teal-500/30">
                    {r.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Candidate Application Form */}
        <div className="max-w-4xl mx-auto pt-4">
          <CandidateAppForm />
        </div>

        {/* Curious / Not Actively Looking Closing Block */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900">
            Not actively looking, just curious?
          </h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            That&apos;s completely fine — most rewarding career transitions start with a discreet, zero-pressure conversation. Reach out and Amanda will give you an honest overview of market demand for your therapeutic background.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              <span>Have a confidential conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
