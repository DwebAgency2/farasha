"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "For Sponsors & CROs", href: "/for-sponsors" },
  { name: "For Professionals", href: "/for-professionals" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Micro Top Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="font-medium tracking-wide">
              Boutique by design. Clinical by nature.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:farasha@farashacrp.com"
              className="flex items-center gap-1.5 hover:text-teal-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>farasha@farashacrp.com</span>
            </a>
            <a
              href="tel:7372730740"
              className="flex items-center gap-1.5 hover:text-teal-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>(737) 273-0740</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar with Scroll Glass Transition */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md py-1"
            : "bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3.5 group py-1">
              <div className="relative h-14 w-14 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <img
                  src="/images/Farasha Logo icon Transparent BG.png"
                  alt="FarashaCRP Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-navy-900 leading-none group-hover:text-teal-700 transition-colors">
                  Farasha
                  <span className="text-teal-600 font-semibold text-base ml-1">
                    CRP
                  </span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-1">
                  Clinical Research Partners
                </span>
              </div>
            </Link>

            {/* Desktop Links with Active Indicator */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "text-navy-950 bg-slate-100 shadow-inner"
                        : "text-slate-600 hover:text-navy-950 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-teal-500 rounded-full"></span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-2.5">
              <Link
                href="/for-professionals"
                className="btn-press px-4 py-2 rounded-xl text-xs font-bold text-navy-800 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all shadow-sm"
              >
                Find Roles
              </Link>
              <Link
                href="/for-sponsors"
                className="btn-shimmer-wrap btn-press px-4 py-2 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 shadow-md shadow-teal-900/20 transition-all flex items-center gap-1.5"
              >
                <span>Request Talent</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                      isActive
                        ? "bg-teal-50 text-teal-700 font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                href="/for-sponsors"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow"
              >
                Request Talent (Sponsors & CROs)
              </Link>
              <Link
                href="/for-professionals"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg text-sm font-semibold text-navy-800 bg-slate-100 hover:bg-slate-200 border border-slate-200"
              >
                Find Your Next Role (CRAs, CTMs, CTAs)
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
