import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, UserCircle2, CheckCircle2 } from "lucide-react";

export default function AudienceSplit() {
  return (
    <section className="py-20 lg:py-28 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-600">
            Tailored Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Two audiences. One standard: the right fit.
          </h2>
          <p className="text-base text-slate-600">
            Whether you are managing study milestones or looking for your next career move, we speak your exact language.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Sponsors & CROs */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-teal-300 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-navy-50 text-navy-800 text-xs font-semibold tracking-wide border border-navy-100">
                  For Sponsors & CROs
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-navy-900 leading-snug">
                  Your study can&apos;t wait on a slow shortlist
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every week a monitoring role sits empty, timelines slip. We deliver vetted CRAs, CTMs, and CTAs matched to your therapeutic area — usually within days, not hiring cycles.
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Contract and direct-hire staffing, matched by study phase and indication</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Operational consulting from a founder who&apos;s run trial teams herself</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>One point of contact who actually knows your protocol</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/for-sponsors"
                className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 transition-colors flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>Request talent for your study</span>
                <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: Clinical Research Professionals */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                  <UserCircle2 className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold tracking-wide border border-teal-100">
                  For Clinical Professionals
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-navy-900 leading-snug">
                  Work with a recruiter who&apos;s held your job
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  You&apos;ve dealt with recruiters who can&apos;t tell a CRA from a CTA. Amanda has written monitoring reports, managed sites, and built trial teams — she knows what your experience is worth.
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Roles matched to your therapeutic background, not just your job title</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Honest guidance on resumes, interviews, and market offers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>A recruiter who checks in after you start — not one who disappears</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/for-professionals"
                className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors flex items-center justify-center gap-2 group"
              >
                <span>Find your next clinical role</span>
                <ArrowRight className="w-4 h-4 text-navy-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
