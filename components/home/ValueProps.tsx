import Image from "next/image";
import { Stethoscope, Handshake, Zap } from "lucide-react";

export default function ValueProps() {
  const values = [
    {
      icon: Stethoscope,
      tag: "01 · PRACTITIONER STANDARD",
      title: "WE'VE DONE THE JOB",
      description:
        "Amanda spent 13 years in trial operations at CROs and academic cancer centers. When we vet a CRA, we know exactly what we're looking at — from monitoring report rigor to site protocol compliance.",
      accent: "border-teal-500/20 bg-teal-50/50",
      iconColor: "text-teal-600 bg-teal-100",
    },
    {
      icon: Handshake,
      tag: "02 · ACCOUNTABILITY",
      title: "RELATIONSHIPS, NOT REQUISITIONS",
      description:
        "We stay with both sides after the placement — because a hire that doesn't stick costs everyone. Our measure of success is month six, not day one.",
      accent: "border-gold-500/20 bg-gold-50/50",
      iconColor: "text-gold-600 bg-gold-100",
    },
    {
      icon: Zap,
      tag: "03 · BOUTIQUE SPEED",
      title: "STRAIGHT ANSWERS, FAST",
      description:
        "You talk to the person making the match — no junior account managers, no runaround, no waiting a week for an unvetted stack of resumes.",
      accent: "border-navy-500/20 bg-navy-50/50",
      iconColor: "text-navy-700 bg-navy-100",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-600">
            Why Farasha
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Most staffing firms match keywords. <br className="hidden sm:inline" />
            We match people we&apos;d hire ourselves.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            The difference between an automated resume filter and a 13-year clinical trial lead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className={`rounded-2xl p-8 bg-white border ${v.accent} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${v.iconColor}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400">
                      {v.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
