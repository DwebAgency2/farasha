import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 flex-shrink-0 filter invert brightness-150">
                <img
                  src="/images/farasha-butterfly.png"
                  alt="FarashaCRP Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white leading-none block">
                  Farasha<span className="text-teal-400 font-normal text-sm ml-1">CRP</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                  Clinical Research Partners, LLC
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Boutique by design. Clinical by nature. Founded and led by Amanda Sanchez, RN, CCRP — placing vetted CRAs, CTMs, and CTAs nationwide.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-gold-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Founder-Led Placements · RN & CCRP Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-teal-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-300 transition-colors">
                  About Amanda Sanchez
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-300 transition-colors">
                  Services Breakdown
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-300 transition-colors">
                  Contact & Consultations
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions / Audience Split */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Who We Serve
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/for-sponsors"
                  className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Sponsors & CROs</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-900/80 text-teal-300">Staffing</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/for-professionals"
                  className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
                >
                  <span>CR Professionals</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-navy-800 text-slate-300">Careers</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/linkedin"
                  className="hover:text-teal-300 transition-colors text-xs text-slate-400"
                >
                  LinkedIn Hub & Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href="mailto:farasha@farashacrp.com"
                  className="hover:text-white transition-colors break-all"
                >
                  farasha@farashacrp.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:7372730740" className="hover:text-white transition-colors">
                  (737) 273-0740
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Serving sponsors & candidates nationwide (USA)</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs border border-white/10 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>Connect on LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            People. Research. Possibility. &nbsp;·&nbsp; © 2026 Farasha Clinical Research Partners, LLC. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <span>Powered by</span>
            <span className="text-slate-300 font-medium">AssuredPixel Digital Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
