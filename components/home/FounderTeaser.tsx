import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, HeartPulse } from "lucide-react";

export default function FounderTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-950 text-white overflow-hidden shadow-xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Founder Image Col */}
            <div className="lg:col-span-5 relative h-96 lg:h-full min-h-[440px] bg-navy-900">
              <Image
                src="/images/dr-amanda-2.jpg"
                alt="Amanda Sanchez, RN, CCRP"
                fill
                className="object-cover object-top filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy-950"></div>
            </div>

            {/* Founder Bio Col */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest uppercase text-teal-400">
                  Founder & Managing Director
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Amanda Sanchez, <span className="text-gold-400 font-medium">RN, CCRP</span>
                </h2>
                <p className="text-sm font-semibold text-slate-300">
                  13+ Years in Clinical Research Operations
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-200">
                  <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
                  Registered Nurse (RN)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-200">
                  <Award className="w-3.5 h-3.5 text-gold-400" />
                  CCRP Certified
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  Former PPD / CRO Lead
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Registered nurse. Certified Clinical Research Professional. 13 years across leading CROs and academic cancer centers — building the same research teams she now helps you staff.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Farasha exists because of one belief: the best person to find great clinical research talent is someone who has lived the work.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 transition-colors shadow-md"
                >
                  <span>Meet Amanda & read the story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
