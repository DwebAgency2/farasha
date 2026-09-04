import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Building2, UserCheck2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinical Research Staffing & Consulting Services | FarashaCRP",
  description:
    "Contract and direct-hire CRA, CTM, and CTA staffing for sponsors and CROs. Career placement for clinical research professionals. Vetted by someone who's done the work.",
};

export default function ServicesPage() {
  const sponsorServices = [
    {
      title: "Contract Staffing",
      desc: "Vetted CRAs, CTMs, and CTAs on a project basis, matched by study phase and therapeutic area. Perfect for database locks, interim monitoring boosts, or site initiations.",
    },
    {
      title: "Direct-Hire Placement",
      desc: "Candidates screened for the long haul, not just the start date. Rigorous evaluation of monitoring report standards and protocol adherence.",
    },
    {
      title: "Embedded Clinical Support",
      desc: "Flexible resourcing that flexes seamlessly as your trial enrollment scales up or protocol amendments shift workloads.",
    },
    {
      title: "Trial Operational Consulting",
      desc: "Trial-operations guidance from a founder who has built and managed research teams from inside CROs and academic cancer centers.",
    },
    {
      title: "Boutique Speed",
      desc: "No corporate committees, no junior recruiter lag. You deal directly with Amanda, receiving qualified shortlists in days rather than months.",
    },
  ];

  const professionalServices = [
    {
      title: "Career Placement",
      desc: "Contract and permanent roles with top-tier sponsors and CROs who value real trial execution experience over automated keyword scores.",
    },
    {
      title: "Therapeutic Matching",
      desc: "Roles aligned to your actual protocol background and therapeutic depth (oncology, cardiology, rare disease, etc.), not just your past job title.",
    },
    {
      title: "Application & Interview Support",
      desc: "Resume optimization, monitoring audit preparation, and compensation negotiation support from someone who has sat on the hiring committee.",
    },
    {
      title: "Long-Game Career Advocacy",
      desc: "We stay in touch throughout your study assignment and remain your sounding board for subsequent career milestones.",
    },
    {
      title: "Direct Access to Leadership",
      desc: "You talk directly with Amanda Sanchez, RN, CCRP — not an anonymous ticketing system or entry-level sourcer.",
    },
  ];

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
              Comprehensive Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              One firm. Both sides of the match.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              We staff studies for sponsors and CROs, and place clinical research professionals in roles that fit — which means we understand exactly what both sides need to say yes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Dual Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative overflow-hidden">
        {/* Ambient Body Butterfly Watermark */}
        <div className="absolute right-[-80px] top-[200px] w-[500px] lg:w-[700px] opacity-[0.10] pointer-events-none select-none z-0">
          <img
            src="/images/farasha-butterfly.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="relative z-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Sponsors Col */}
          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-teal-300 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-navy-900">For Sponsors & CROs</h2>
                    <p className="text-xs text-slate-500">Staffing & Trial Consulting</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {sponsorServices.map((s, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <h3 className="text-base font-bold text-navy-900">{s.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 pl-6 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <Link
                href="/for-sponsors"
                className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore Sponsor Services & Request Talent</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </Link>
            </div>
          </div>

          {/* Professionals Col */}
          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                    <UserCheck2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-navy-900">For CR Professionals</h2>
                    <p className="text-xs text-slate-500">Placement & Career Support</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {professionalServices.map((p, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <h3 className="text-base font-bold text-navy-900">{p.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 pl-6 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <Link
                href="/for-professionals"
                className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore Career Support & Submit Profile</span>
                <ArrowRight className="w-4 h-4 text-navy-700" />
              </Link>
            </div>
          </div>
        </div>

        {/* Pull Quote */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-navy-950 p-8 sm:p-12 text-center text-white space-y-3 shadow-lg">
          <p className="text-xl sm:text-2xl font-serif italic text-gold-400">
            &ldquo;CRA staffing isn&apos;t a line item on our services page. It&apos;s the whole page.&rdquo;
          </p>
          <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block">
            — Farasha Clinical Research Partners Standard
          </span>
        </div>

        {/* Dual Orientation Closing */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-10 text-center space-y-4 max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900">
            Not sure which side you&apos;re on?
          </h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Some visitors are both — currently hiring for an active trial while quietly exploring their own next career milestone. Reach out to Amanda and we will advise you honestly.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-colors"
            >
              <span>Get in touch with us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
