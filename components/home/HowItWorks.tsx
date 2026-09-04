"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  Target,
  UserCheck,
  CheckCircle2,
  Clock,
  FileCheck2,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [comparisonMode, setComparisonMode] = useState<"farasha" | "traditional">("farasha");

  const farashaSteps = [
    {
      step: "01",
      timeline: "Day 0",
      icon: MessageSquare,
      title: "TELL US WHAT YOU NEED",
      tagline: "A 20-minute conversation about your study, your team, or your career goals. That's it.",
      details: [
        "Direct discussion with Amanda Sanchez, RN, CCRP — no account managers or intake queues.",
        "We dissect protocol requirements: therapeutic area, trial phase (I–IV), monitoring visit frequencies, and site geography.",
        "Zero bureaucratic intake paperwork. We extract the clinical nuances that automated forms miss.",
      ],
      deliverable: "Protocol Resourcing Blueprint",
      sla: "20-Minute Discovery",
      metric: "100% Founder-Led Scoping",
    },
    {
      step: "02",
      timeline: "Days 1–3",
      icon: Target,
      title: "WE MAKE THE MATCH",
      tagline: "You get candidates matched to your therapeutic area and study phase — not a stack of resumes to sort yourself.",
      details: [
        "Practitioner screening: We evaluate monitoring report writing rigor, audit histories, and GCP/SOP compliance.",
        "Precision therapeutic alignment (e.g. oncology, rare disease, neurology) — never generic title matching.",
        "You receive a curated shortlist of 2–3 thoroughly vetted candidates ready for immediate study initiation.",
      ],
      deliverable: "Curated Vetted Shortlist (2–3 candidates)",
      sla: "Shortlist in 48–72 Hours",
      metric: "Zero Resume Spam",
    },
    {
      step: "03",
      timeline: "Month 1 to 6+",
      icon: UserCheck,
      title: "WE STAY ON IT",
      tagline: "Structured check-ins through onboarding and beyond. If something's off, we fix it — that's the boutique difference.",
      details: [
        "Structured 30, 60, 90, and 180-day milestone check-ins with both the sponsor and the placed professional.",
        "Proactive issue remediation: If protocol amendments or site workloads shift, we flex resourcing immediately.",
        "Success is measured at month six, not on contract signing day. A placement that doesn't stick is a failure we own.",
      ],
      deliverable: "6-Month Retention & Quality Governance",
      sla: "Continuous Partnership",
      metric: "Long-Term Retention Standard",
    },
  ];

  const traditionalSteps = [
    {
      step: "01",
      timeline: "Week 1–2",
      icon: ShieldAlert,
      title: "INTAKE BUREAUCRACY",
      tagline: "Handed to a junior recruiter who has never seen a clinical trial protocol.",
      details: [
        "Generic intake questionnaires asking you to define standard terms like CRA or CTM.",
        "No clinical understanding of protocol phases, oncology RECIST criteria, or site audit pressures.",
        "Passing your requisition through multiple internal commission layers.",
      ],
      deliverable: "Generic Job Requisition Form",
      sla: "Slow Intake Cycles",
      metric: "Disconnected Sourcing",
    },
    {
      step: "02",
      timeline: "Weeks 3–5",
      icon: Layers,
      title: "KEYWORD RESUME DUMP",
      tagline: "An automated applicant tracking system floods your inbox with 25 unvetted resumes.",
      details: [
        "Candidates matched strictly on keywords (e.g. 'monitoring') with zero indication vetting.",
        "You spend hours reading resumes and screening candidates yourself.",
        "High risk of candidate drop-off or sudden compensation disputes before first site visit.",
      ],
      deliverable: "Stack of 20+ Unvetted Resumes",
      sla: "Weeks of Sifting",
      metric: "High Timeline Drift",
    },
    {
      step: "03",
      timeline: "Day 1",
      icon: Clock,
      title: "DISAPPEARS AT CONTRACT",
      tagline: "The agency collects its placement fee on day one and disappears forever.",
      details: [
        "Zero post-placement support or onboarding alignment with trial management.",
        "If a monitor leaves at month two, you start the painful hiring process from scratch.",
        "No accountability for trial milestone slips or site activation delays.",
      ],
      deliverable: "Commission Invoice",
      sla: "Zero Long-Term Accountability",
      metric: "Frequent Monitor Turnover",
    },
  ];

  const currentSteps = comparisonMode === "farasha" ? farashaSteps : traditionalSteps;
  const active = currentSteps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-600">
            Interactive Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Three steps. No black box.
          </h2>
          <p className="text-base text-slate-600">
            Explore our transparent clinical staffing pipeline. See exactly how Farasha eliminates hiring friction.
          </p>

          {/* Perspective Toggle: Farasha vs Traditional */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setComparisonMode("farasha")}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  comparisonMode === "farasha"
                    ? "bg-teal-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-navy-900"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Farasha Boutique Roadmap</span>
              </button>
              <button
                type="button"
                onClick={() => setComparisonMode("traditional")}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  comparisonMode === "traditional"
                    ? "bg-rose-700 text-white shadow-sm"
                    : "text-slate-600 hover:text-navy-900"
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>The Traditional Recruiter &quot;Black Box&quot;</span>
              </button>
            </div>
          </div>
        </div>

        {/* Step Selector Pipeline with Connected Progress Line */}
        <div className="relative mb-10 max-w-4xl mx-auto">
          {/* Background Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-1 bg-slate-200 -translate-y-1/2 z-0">
            <div
              className={`h-full transition-all duration-500 ${
                comparisonMode === "farasha" ? "bg-teal-500" : "bg-rose-500"
              }`}
              style={{ width: `${(activeStep / (currentSteps.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {currentSteps.map((s, idx) => {
              const isSelected = activeStep === idx;
              const StepIcon = s.icon;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 sm:p-5 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? comparisonMode === "farasha"
                        ? "bg-navy-950 text-white border-teal-500 shadow-lg ring-2 ring-teal-500/30"
                        : "bg-slate-900 text-white border-rose-500 shadow-lg ring-2 ring-rose-500/30"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? comparisonMode === "farasha"
                            ? "bg-teal-500/20 text-teal-300"
                            : "bg-rose-500/20 text-rose-300"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      STEP {s.step} · {s.timeline}
                    </span>
                    <StepIcon
                      className={`w-5 h-5 ${
                        isSelected
                          ? comparisonMode === "farasha"
                            ? "text-teal-400"
                            : "text-rose-400"
                          : "text-slate-400"
                      }`}
                    />
                  </div>
                  <h3 className="font-bold text-sm leading-snug">{s.title}</h3>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`rounded-3xl p-8 sm:p-12 border shadow-xl transition-all ${
              comparisonMode === "farasha"
                ? "bg-slate-900 text-white border-slate-800"
                : "bg-white text-slate-900 border-rose-200"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details (Col 1-7) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        comparisonMode === "farasha"
                          ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                          : "bg-rose-100 text-rose-800 border border-rose-200"
                      }`}
                    >
                      Stage {active.step} · {active.timeline}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        comparisonMode === "farasha" ? "text-gold-400" : "text-slate-500"
                      }`}
                    >
                      {active.metric}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {active.title}
                  </h3>
                  <p
                    className={`text-base font-normal leading-relaxed ${
                      comparisonMode === "farasha" ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {active.tagline}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h4
                    className={`text-xs font-bold uppercase tracking-wider ${
                      comparisonMode === "farasha" ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    What Occurs At This Phase:
                  </h4>
                  <ul className="space-y-3">
                    {active.details.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            comparisonMode === "farasha" ? "text-teal-400" : "text-rose-500"
                          }`}
                        />
                        <span
                          className={
                            comparisonMode === "farasha" ? "text-slate-200" : "text-slate-700"
                          }
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side Key Specs & Action (Col 8-12) */}
              <div className="lg:col-span-5 space-y-4">
                <div
                  className={`p-6 rounded-2xl border space-y-4 ${
                    comparisonMode === "farasha"
                      ? "bg-white/5 border-white/10"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        comparisonMode === "farasha"
                          ? "bg-teal-500/20 text-teal-300"
                          : "bg-rose-100 text-rose-600"
                      }`}
                    >
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                        Phase Deliverable
                      </span>
                      <span className="text-sm font-bold block">{active.deliverable}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-200/20 pt-3 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Response SLA:</span>
                    <span className="font-semibold">{active.sla}</span>
                  </div>
                </div>

                {comparisonMode === "farasha" ? (
                  <div className="pt-2">
                    <Link
                      href={activeStep === 0 ? "/for-sponsors#inquiry" : "/contact"}
                      className="w-full py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>
                        {activeStep === 0
                          ? "Begin Step 1: Tell Us What You Need"
                          : activeStep === 1
                          ? "Request Vetted Talent"
                          : "Schedule a Consultation"}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 leading-relaxed">
                    <strong>Why Clients Switch:</strong> Avoid weeks of trial delays caused by keyword matching and unvetted turnover.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
