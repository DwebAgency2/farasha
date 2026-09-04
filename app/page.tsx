import Image from "next/image";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ValueProps from "@/components/home/ValueProps";
import HowItWorks from "@/components/home/HowItWorks";
import AudienceSplit from "@/components/home/AudienceSplit";
import FounderTeaser from "@/components/home/FounderTeaser";
import EmailCaptureBar from "@/components/home/EmailCaptureBar";
import ClosingCTA from "@/components/home/ClosingCTA";

export default function Home() {
  return (
    <div className="relative overflow-hidden w-full bg-slate-50">
      {/* Route-Level Background Butterfly Illustrations */}
      {/* Upper-Right Floating Motif */}
      <div className="absolute right-[-100px] top-[750px] w-[500px] lg:w-[750px] opacity-[0.12] pointer-events-none select-none z-0">
        <img
          src="/images/farasha-butterfly.png"
          alt="Farasha Butterfly Motif"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Mid-Left Floating Motif */}
      <div className="absolute left-[-120px] top-[2000px] w-[480px] lg:w-[700px] opacity-[0.10] pointer-events-none select-none -rotate-12 z-0">
        <img
          src="/images/farasha-butterfly.png"
          alt="Farasha Butterfly Motif"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Lower Background Motif */}
      <div className="absolute right-[-80px] bottom-[300px] w-[450px] lg:w-[650px] opacity-[0.10] pointer-events-none select-none rotate-6 z-0">
        <img
          src="/images/farasha-butterfly.png"
          alt="Farasha Butterfly Motif"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Page Content Layers */}
      <div className="relative z-10">
        <Hero />
        <StatsBar />
        <ValueProps />
        <HowItWorks />
        <AudienceSplit />
        <FounderTeaser />
        <EmailCaptureBar />
        <ClosingCTA />
      </div>
    </div>
  );
}
