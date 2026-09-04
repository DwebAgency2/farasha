"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Download, Calendar, CheckCircle2, Loader2, ArrowRight, ShieldCheck } from "lucide-react";
import { analytics } from "@/lib/analytics";

export default function LinkedInLandingPage() {
  const [activeTab, setActiveTab] = useState<"sponsor" | "candidate">("sponsor");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    analytics.linkedInLanding("linkedin_bio");
  }, []);

  const handleLeadMagnetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid work email.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          segment: activeTab === "sponsor" ? "Sponsor" : "Candidate",
          source: "LinkedIn",
          resource:
            activeTab === "sponsor"
              ? "Sponsor Staffing Checklist"
              : "CRA Placement & Career Guide",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage(
          activeTab === "sponsor"
            ? "Success! Your Sponsor Staffing Checklist is on its way to your inbox."
            : "Success! Your CRA Placement Guide is on its way to your inbox."
        );
        analytics.emailSubscribe(
          activeTab === "sponsor" ? "sponsor_checklist" : "cra_guide"
        );
        setEmail("");
        setName("");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* LinkedIn Welcome Header */}
      <section className="hero-mesh text-white py-14 sm:py-20 relative overflow-hidden border-b border-white/10">
        {/* Background Butterfly Watermark */}
        <div className="absolute right-[-4%] top-1/2 -translate-y-1/2 w-[400px] sm:w-[550px] lg:w-[700px] opacity-[0.22] pointer-events-none select-none filter invert brightness-125">
          <img
            src="/images/farasha-butterfly.png"
            alt="Farasha Emblem Watermark"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A66C2]/20 border border-[#0A66C2]/40 text-xs font-semibold text-white">
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span>Welcome from LinkedIn</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Clinical Trial Staffing from the Inside
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to Farasha Clinical Research Partners. I&apos;m Amanda Sanchez, RN, CCRP. Whether you connected with me on LinkedIn to staff an active trial or to plan your next CRA/CTM move, you are in the right place.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4 text-xs text-gold-400 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>13+ Years Trial Operations Veteran</span>
            </div>
            <span>·</span>
            <span>100% Founder-Led Matches</span>
          </div>
        </div>
      </section>

      {/* Main Action Hub */}
      <section className="py-14 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Toggle Selector */}
        <div className="flex items-center justify-center">
          <div className="bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2 max-w-md w-full">
            <button
              onClick={() => {
                setActiveTab("sponsor");
                setStatus("idle");
              }}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === "sponsor"
                  ? "bg-navy-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-navy-900"
              }`}
            >
              For Sponsors & CROs
            </button>
            <button
              onClick={() => {
                setActiveTab("candidate");
                setStatus("idle");
              }}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === "candidate"
                  ? "bg-teal-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-navy-900"
              }`}
            >
              For Clinical Professionals
            </button>
          </div>
        </div>

        {/* Lead Magnet Box */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xl space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
              Exclusive Resource
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
              {activeTab === "sponsor"
                ? "Download the Sponsor Clinical Staffing Checklist"
                : "Download the CRA Career & Placement Guide"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeTab === "sponsor"
                ? "A practical 10-point audit tool for evaluating CRA therapeutic competency, monitoring report rigor, and audit readiness before extending an offer."
                : "Insights from a 13-year trial lead on how to position your protocol experience, transition into Senior/CTM roles, and negotiate contract rates."}
            </p>
          </div>

          {status === "success" ? (
            <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-2 text-teal-900">
              <CheckCircle2 className="w-8 h-8 text-teal-600 mx-auto" />
              <p className="font-bold text-base">{message}</p>
              <p className="text-xs text-slate-600">
                Please check your inbox (and spam folder just in case).
              </p>
            </div>
          ) : (
            <form onSubmit={handleLeadMagnetSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First & Last Name"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Work / Preferred Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-rose-600 bg-rose-50 p-2.5 rounded-lg">
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Get Free Download</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Quick Call Booking Option */}
        <div className="rounded-3xl bg-navy-950 text-white p-8 sm:p-10 text-center space-y-5 border border-white/10 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto">
            <Calendar className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold">
              Rather speak directly with Amanda?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
              Book a 20-minute discovery call directly on Amanda&apos;s live calendar.
            </p>
          </div>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.calendlyClick("linkedin_landing")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs uppercase tracking-wide transition-colors"
          >
            <span>Schedule 20-Min Call via Calendly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
