"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  CheckCircle2,
  ArrowRight,
  Loader2,
  Sparkles,
} from "lucide-react";
import { analytics } from "@/lib/analytics";

export default function EmailCaptureBar() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Professional");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
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
        setMessage(
          "Something went wrong. Please try again or reach out directly.",
        );
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-teal-400">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Stay Connected</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Get matched with the right clinical opportunity
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Receive exclusive study openings, trial staffing alerts, and
            industry insights directly from our founder.
          </p>
        </motion.div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2.5 p-4 rounded-2xl bg-teal-900/50 border border-teal-500/40 text-teal-200 text-sm shadow-lg"
          >
            <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
            <span className="font-medium">{message}</span>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-3"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2 bg-white/10 hover:bg-white/15 p-1.5 rounded-2xl border border-white/20 focus-within:border-teal-400/60 focus-within:ring-2 focus-within:ring-teal-400/20 backdrop-blur-md transition-all shadow-lg">
              <div className="relative flex-grow w-full">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
                />
              </div>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full sm:w-auto px-3 py-2.5 rounded-xl bg-navy-850 hover:bg-navy-800 text-xs font-semibold text-slate-200 border border-white/10 focus:outline-none cursor-pointer transition-colors"
              >
                <option value="Professional">CRA / Professional</option>
                <option value="Sponsor">Sponsor / CRO</option>
              </select>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-shimmer-wrap btn-press w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold text-xs uppercase tracking-wide transition-all flex items-center justify-center gap-1.5 shrink-0 shadow-md"
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
              <p className="text-xs text-rose-300 font-medium">{message}</p>
            )}
            <p className="text-[11px] text-slate-400">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}
