export default function StatsBar() {
  const stats = [
    {
      value: "13+",
      label: "Years inside clinical trials",
      subtext: "Operations across CROs & academic centers",
    },
    {
      value: "100%",
      label: "Founder-led, every placement",
      subtext: "Direct access to Amanda Sanchez",
    },
    {
      value: "CRA · CTM · CTA",
      label: "The roles we live in",
      subtext: "Matched by therapeutic area & study phase",
    },
    {
      value: "USA",
      label: "Nationwide Coverage",
      subtext: "Serving sponsors & candidates across the country",
    },
  ];

  return (
    <div className="bg-white border-b border-slate-200 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center ${
                index > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-slate-800 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 mt-0.5">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
