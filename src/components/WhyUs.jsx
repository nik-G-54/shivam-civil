import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    num: "01",
    title: "33+ YEARS GROUND MASTERY",
    desc: "Active since 1991 without name changes — decades of deep geological insight into Uttar Pradesh's water tables.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  },
  {
    num: "02",
    title: "UP GOVERNMENT APPROVED",
    desc: "Class-certified contractor status for municipal water supplies, Jal Jeevan Mission tenders, and highways.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    num: "03",
    title: "100% OWNED HEAVY FLEET",
    desc: "Heavy hydraulic rigs, compressor units, mobile cranes, and transit mixers owned and operated by our own staff.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    )
  },
  {
    num: "04",
    title: "ZERO THIRD-PARTY HANDOFF",
    desc: "The crew that surveys your site is the crew that bores, cases, tests, and hands over your infrastructure.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  }
];

const reviews = [
  { score: "4.6 / 5", source: "Verified Rating on Justdial (16 reviews)" },
  { score: "92% RECOMMEND", source: "Public Recommendation on Facebook" },
  { score: "33+ YEARS", source: "Continuous Operation Under Same Leadership" }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 lg:py-28 bg-[#1A1A1A] text-white relative overflow-hidden">
      
      {/* Top Yellow Hazard Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F5B301]" />
      
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header (Equirt Dependable Power & Performance Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5B301] animate-pulse" />
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#F5B301]">
                WHY CLIENTS CHOOSE US
              </span>
            </div>
            <h2 className="font-heading font-black text-[clamp(2.2rem,4vw,3.6rem)] uppercase tracking-tight text-white leading-[1.05]">
              DEPENDABLE <span className="text-[#F5B301]">POWER &amp; PERFORMANCE</span>
            </h2>
          </div>
          <p className="text-white/70 max-w-[42ch] text-base leading-relaxed m-0">
            No subcontracted drilling, no depth estimation guesswork, and rock-solid paperwork qualified for public works tenders.
          </p>
        </div>

        {/* 4 Cards Grid (from Equirt Dark Section) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#242424] p-7 rounded-[20px] border border-white/10 hover:border-[#F5B301] transition-all hover:bg-[#2A2A2A] flex flex-col justify-between group"
            >
              <div>
                {/* Yellow Icon Badge (.icon-badge from theme.md) */}
                <div className="w-12 h-12 rounded-xl bg-[#F5B301] text-[#1A1A1A] flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform shadow-md">
                  {card.icon}
                </div>

                <div className="text-[#F5B301] font-heading font-black text-xs uppercase tracking-widest mb-1.5">
                  FEATURE // {card.num}
                </div>

                <h3 className="font-heading font-bold text-base text-white uppercase tracking-wide mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-[#F5B301]">
                <span>VERIFIED SPEC</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review Strip (Equirt Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/15">
          {reviews.map((rev, index) => (
            <div key={index} className="bg-[#222222] p-6 rounded-xl border border-white/10 flex items-center gap-4">
              <div className="text-2xl text-[#F5B301] tracking-widest font-bold">
                ★★★★★
              </div>
              <div>
                <div className="font-heading font-black text-xl text-white tracking-wide">
                  {rev.score}
                </div>
                <div className="text-xs text-white/60">
                  {rev.source}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
