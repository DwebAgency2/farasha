import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, HeartPulse, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Amanda Sanchez, RN, CCRP | FarashaCRP",
  description:
    "13 years inside clinical trials — as a nurse, CCRP, and trial team builder. Meet the founder behind FarashaCRP's boutique approach to clinical research staffing.",
};

export default function AboutPage() {
  const values = [
    {
      num: "01",
      title: "BOUTIQUE BY DESIGN",
      desc: "Deliberately small. Every client and candidate works directly with Amanda — nobody gets handed to a junior recruiter or an automated ticketing queue.",
    },
    {
      num: "02",
      title: "CLINICAL BY NATURE",
      desc: "Our vetting standard comes from doing the work, not reading about it. We evaluate monitoring report quality, site relationship depth, and protocol compliance.",
    },
    {
      num: "03",
      title: "PARTNERSHIP OVER PLACEMENT",
      desc: "We measure success at month six, not day one. A placement that doesn't stick is a failure we own. We remain in touch long after onboarding.",
    },
    {
      num: "04",
      title: "STRAIGHT TALK",
      desc: "Honest timelines, honest fit assessments, and honest feedback — even when it's not what you hoped to hear. Integrity precedes any commission.",
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
              Our Story & Founder
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Built by someone who&apos;s lived it.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Before Farasha placed a single candidate, its founder spent 13 years doing the jobs she now recruits for.
            </p>
          </div>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Ambient Body Butterfly Watermark */}
        <div className="absolute right-[-80px] top-[150px] w-[500px] lg:w-[700px] opacity-[0.10] pointer-events-none select-none z-0">
          <img
            src="/images/farasha-butterfly.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          {/* Photo & Credential Card */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="rounded-2xl overflow-hidden bg-navy-900 border border-slate-200 shadow-xl relative aspect-[4/5] max-w-md mx-auto">
              <Image
                src="/images/dr-amanda-1.jpg"
                alt="Amanda Sanchez, RN, CCRP"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Credential Grid */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 max-w-md mx-auto">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                Verified Clinical Credentials
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-slate-700">
                  <HeartPulse className="w-5 h-5 text-rose-500 shrink-0" />
                  <div>
                    <span className="font-semibold block text-navy-900">Registered Nurse (RN)</span>
                    <span className="text-xs text-slate-500">Clinical care background & patient advocacy</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Award className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <span className="font-semibold block text-navy-900">CCRP Certified</span>
                    <span className="text-xs text-slate-500">Certified Clinical Research Professional (SOCRA)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
                  <div>
                    <span className="font-semibold block text-navy-900">13+ Years Clinical Ops</span>
                    <span className="text-xs text-slate-500">PPD/Thermo Fisher CRA & Cancer Center Lead</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Story */}
          <div className="lg:col-span-7 space-y-8 text-slate-700">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-600">
                The Journey
              </span>
              <h2 className="text-3xl font-bold text-navy-900 leading-snug">
                From bedside nursing to trial leadership — and why Farasha had to exist.
              </h2>
            </div>

            <div className="prose prose-slate max-w-none space-y-5 text-base sm:text-lg leading-relaxed text-slate-700">
              <p>
                Amanda started as a registered nurse. Then came 13 years inside clinical trials — as a Certified Clinical Research Professional across leading CROs and academic cancer centers, managing sites, monitoring studies, and building the research teams sponsors depend on.
              </p>
              <p>
                Along the way she sat on both sides of the hiring table: the professional trying to find a role that matched her actual skills, and the team lead trying to hire people who could really do the work.
              </p>
              <blockquote className="p-6 rounded-2xl bg-teal-50/80 border-l-4 border-teal-600 text-navy-900 font-medium italic my-6">
                &ldquo;What I saw from both seats was the exact same problem — high-volume staffing firms matching keywords instead of understanding the job. They couldn&apos;t tell oncology protocol complexities from routine monitoring.&rdquo;
              </blockquote>
              <p>
                <strong>Farasha is her answer:</strong> a boutique firm where every placement is made by someone who knows what a monitoring visit actually involves, what makes a site relationship work, and what separates a good CRA from a great one. Real therapeutic understanding. Real accountability. On both sides of every match.
              </p>
            </div>

            {/* Core Values */}
            <div className="pt-8 border-t border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-navy-900">
                The Values That Drive Farasha
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {values.map((val) => (
                  <div
                    key={val.num}
                    className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-teal-600">
                        {val.num}
                      </span>
                      <h4 className="text-sm font-bold text-navy-900 tracking-wide">
                        {val.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing CTA Box */}
            <div className="pt-6">
              <div className="p-8 rounded-2xl bg-navy-950 text-white space-y-5">
                <h3 className="text-2xl font-bold">
                  Work with someone who gets it.
                </h3>
                <p className="text-sm text-slate-300">
                  One conversation is all it takes to tell the difference between a resume broker and a clinical partner.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <Link
                    href="/for-sponsors"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-colors text-center"
                  >
                    For Sponsors & CROs
                  </Link>
                  <Link
                    href="/for-professionals"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-colors text-center"
                  >
                    For Clinical Professionals
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
