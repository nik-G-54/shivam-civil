import React from 'react';
import { motion } from 'framer-motion';

const areas = [
  { 
    name: "LUCKNOW DISTRICT", 
    role: "HEADQUARTERS & WORKSHOP",
    desc: "Central office, logistics base, heavy machinery yard, and client coordination.",
    tag: "HQ BASE"
  },
  { 
    name: "HARDOI DISTRICT", 
    role: "ORIGIN & OPERATIONS HUB",
    desc: "Active operational base since 1991 for agricultural and rural tubewell boring.",
    tag: "PRIMARY"
  },
  { 
    name: "KANPUR & AWADH BELT", 
    role: "INDUSTRIAL & MUNICIPAL",
    desc: "Dedicated crews mobilized on demand for commercial and factory connections.",
    tag: "ON DEMAND"
  },
  { 
    name: "STATEWIDE, UTTAR PRADESH", 
    role: "PUBLIC INFRASTRUCTURE CONTRACTS",
    desc: "Equipped to mobilize self-contained rigs & engineering camps anywhere in UP.",
    tag: "GOVT WORKS"
  }
];

export default function Coverage() {
  return (
    <section id="area" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E2DCD0]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Coverage Locations List */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5B301]" />
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#6B6B6B]">
                WHERE WE OPERATE
              </span>
            </div>

            <h2 className="font-heading font-black text-[clamp(2.2rem,4vw,3.6rem)] uppercase tracking-tight text-[#1A1A1A] leading-[1.05] mb-5">
              EXPANSIVE FOOTPRINT <span className="text-[#F5B301]">ACROSS UP</span>
            </h2>

            <p className="text-[#6B6B6B] text-base leading-relaxed mb-8">
              Headquartered in Lucknow with our roots in Hardoi, our mobile drilling units and pipeline installation teams travel across the state for major government contracts and private developments.
            </p>

            <div className="space-y-4">
              {areas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-[#F8F6F0] p-4 sm:p-5 rounded-xl border border-[#E2DCD0] flex items-center justify-between gap-4 hover:border-[#F5B301] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F5B301] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-[#1A1A1A] group-hover:text-[#F5B301] transition-colors shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm sm:text-base uppercase tracking-wide text-[#1A1A1A] m-0">
                        {area.name}
                      </h3>
                      <div className="text-xs text-[#6B6B6B] mt-0.5">
                        {area.desc}
                      </div>
                    </div>
                  </div>

                  <span className="text-[0.68rem] font-bold uppercase tracking-wider bg-[#1A1A1A] text-[#F5B301] px-2.5 py-1 rounded-md flex-shrink-0">
                    {area.tag}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Image Showcase with Yellow Offset Frame */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[24px] bg-[#F5B301] p-4 shadow-xl">
              <div className="relative rounded-[20px] overflow-hidden aspect-[4/5] bg-white p-2">
                <img 
                  src="/images/bb662e01144043aabe59741d141e408e.jpg" 
                  alt="Infrastructure across Uttar Pradesh" 
                  className="w-full h-full object-cover rounded-[16px]"
                />

                <div className="absolute top-5 left-5 z-20">
                  <span className="tag-label shadow-lg">
                    STATEWIDE UP REACH
                  </span>
                </div>

                <div className="absolute bottom-5 inset-x-5 z-20 bg-[#1A1A1A]/90 backdrop-blur-md p-4 rounded-xl text-white">
                  <div className="font-heading font-bold text-sm text-[#F5B301] uppercase tracking-wider">
                    RAPID ON-SITE MOBILIZATION
                  </div>
                  <div className="text-xs text-white/75 mt-0.5">
                    Self-contained drilling units &amp; site crews ready for deployment.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
