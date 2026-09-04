"use client";

import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { analytics } from "@/lib/analytics";

export default function EmailCaptureBar() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Professional");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, segment: role, source: "Home" }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Thank you! You're on our priority clinical briefing list.");
        setEmail("");
        analytics.emailSubscribe("general");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again or reach out directly.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-400">
            Stay Connected
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Get matched with the right clinical opportunity
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Receive exclusive study openings, trial staffing alerts, and industry insights directly from our founder.
          </p>
        </div>

        {status === "success" ? (
          <div className="inline-flex items-center gap-2 p-4 rounded-xl bg-teal-900/50 border border-teal-500/40 text-teal-200 text-sm">
            <CheckCircle2 className="w-5 h-5 text-teal-400" />
            <span>{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-2 bg-white/10 p-1.5 rounded-xl border border-white/20 backdrop-blur-md">
              <div className="relative flex-grow w-full">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
                />
              </div>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full sm:w-auto px-3 py-2.5 rounded-lg bg-navy-800 text-xs font-medium text-slate-200 border border-white/10 focus:outline-none"
              >
                <option value="Professional">CRA / Professional</option>
                <option value="Sponsor">Sponsor / CRO</option>
              </select>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold text-xs uppercase tracking-wide transition-colors flex items-center justify-center gap-1.5 shrink-0"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
            {status === "error" && (
              <p className="text-xs text-rose-300">{message}</p>
            )}
            <p className="text-[11px] text-slate-400">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
