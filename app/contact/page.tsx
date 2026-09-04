import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin, Calendar, Clock, ShieldCheck, Linkedin } from "lucide-react";
import GeneralContactForm from "@/components/forms/GeneralContactForm";

export const metadata: Metadata = {
  title: "Contact FarashaCRP | Talk to Amanda Directly",
  description:
    "Reach FarashaCRP directly — no gatekeepers. Sponsors, CROs, and clinical research professionals get a response within one business day.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
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
              Direct Access
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Talk to the person who makes the match.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              No intake team, no ticket numbers. Messages come straight to Amanda Sanchez, and you&apos;ll hear back within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Ambient Body Butterfly Watermark */}
        <div className="absolute right-[-80px] top-[150px] w-[500px] lg:w-[700px] opacity-[0.10] pointer-events-none select-none z-0">
          <img
            src="/images/farasha-butterfly.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          {/* Direct Details & Booking (Col 1-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl bg-navy-950 text-white p-8 sm:p-10 space-y-6 shadow-xl border border-white/10">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Direct Contact Block
                </span>
                <h2 className="text-2xl font-bold">Farasha Clinical Research Partners, LLC</h2>
                <p className="text-xs text-slate-300">
                  Austin, Texas · Serving sponsors, CROs, and clinical monitors nationwide.
                </p>
              </div>

              <div className="space-y-4 pt-2 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Direct Email</span>
                    <a
                      href="mailto:farasha@farashacrp.com"
                      className="font-semibold text-white hover:text-teal-300 transition-colors"
                    >
                      farasha@farashacrp.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Phone Line</span>
                    <a
                      href="tel:7372730740"
                      className="font-semibold text-white hover:text-gold-300 transition-colors"
                    >
                      (737) 273-0740
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Response Standard</span>
                    <span className="font-semibold text-white">
                      Within 1 business day guaranteed
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Geographic Coverage</span>
                    <span className="font-semibold text-white">
                      United States (Nationwide)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-teal-300 hover:text-teal-200 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>Connect with Amanda Sanchez on LinkedIn &rarr;</span>
                </a>
              </div>
            </div>

            {/* Quick Calendly Card */}
            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">
                Prefer an immediate conversation?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Skip the back-and-forth email scheduling and reserve a 20-minute slot on Amanda&apos;s live calendar.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 text-xs font-semibold border border-slate-200 transition-colors"
              >
                Open Amanda&apos;s Calendly &rarr;
              </a>
            </div>
          </div>

          {/* Contact Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-lg space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                  Send A Message
                </span>
                <h2 className="text-2xl font-bold text-navy-900 mt-1">
                  How can Amanda assist your trial or career?
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Tell us who you are and what you need — a sentence or two is plenty to start.
                </p>
              </div>

              <GeneralContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
