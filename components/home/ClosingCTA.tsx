import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export default function ClosingCTA() {
  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-600">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            The right person changes everything
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you&apos;re staffing an active study or planning your next career move — start with one high-impact conversation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-navy-950/20"
          >
            <MessageSquare className="w-4 h-4 text-teal-400" />
            <span>Contact Amanda Directly</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </Link>
          <Link
            href="/for-sponsors#consult"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-navy-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-teal-700" />
            <span>Schedule a 20-Min Consultation</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
