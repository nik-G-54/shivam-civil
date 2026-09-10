import React from 'react';
import { motion } from 'framer-motion';

export default function Process() {
  const roadmapStory = [
    {
      step: "START",
      year: "1991",
      title: "GROUND ZERO FOUNDATION",
      desc: "Begun in Hardoi & Lucknow with one drilling rig, dedicated to domestic and agricultural water wells."
    },
    {
      step: "01",
      title: "CONCEPT & NEED",
      desc: "Identifying deep water table depletion and designing long-life PVC/MS casing bore structures."
    },
    {
      step: "02",
      title: "AQUIFER RESEARCH",
      desc: "Decades of logging geological soil stratas across the Awadh plains, ensuring reliable water strikes."
    },
    {
      step: "03",
      title: "EQUIPMENT STRATEGY",
      desc: "Investing in 100% owned rotary rigs, compressors, and cranes to eliminate third-party delays."
    },
    {
      step: "04",
      title: "ENGINEERING TEAMWORK",
      desc: "Expanding into full-scale civil engineering, certified site supervisors, and pipeline laying teams."
    },
    {
      step: "05",
      title: "GOVERNMENT QUALIFICATION",
      desc: "Achieving registered Government Approved contractor credentials for state-level infrastructure."
    },
    {
      step: "GOAL",
      year: "TODAY",
      title: "STATEWIDE SUCCESS",
      desc: "Turnkey delivery of Jal Jeevan Mission networks, overhead RCC water reservoirs, and civil works."
    }
  ];

  const executionSteps = [
    {
      num: "01",
      title: "GEOTECHNICAL SURVEY & SITE STUDY",
      desc: "Hydro-geological assessment, depth calculations, soil resistivity, and water quality testing."
    },
    {
      num: "02",
      title: "BLUEPRINT DESIGN & BOQ SPECIFICATIONS",
      desc: "Drafting complete AutoCAD civil layouts, hydraulic pressure ratings, and tender compliance documents."
    },
    {
      num: "03",
      title: "OWNED FLEET & MATERIAL MOBILIZATION",
      desc: "Deploying high-torque rotary rigs, casing pipes, transit mixers, and site machinery directly to location."
    },
    {
      num: "04",
      title: "PRECISION EXCAVATION & INSTALLATION",
      desc: "Boring to designated depth, continuous casing welding, RCC tank casting, and pipeline jointing."
    },
    {
      num: "05",
      title: "PRESSURE TESTING & VERIFIED HANDOVER",
      desc: "Hydrostatic load testing, flow discharge rate audit, clean water certification, and final handover."
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E2DCD0]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5B301]" />
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#6B6B6B]">
              OUR INFRASTRUCTURE STORY &amp; METHODOLOGY
            </span>
          </div>
          <h2 className="font-heading font-black text-[clamp(2.3rem,4.5vw,3.8rem)] uppercase tracking-tight text-[#1A1A1A] leading-[1.05] mb-4">
            FROM GROUND ZERO <span className="text-[#F5B301]">TO STATE DELIVERY</span>
          </h2>
          <p className="text-[#6B6B6B] text-base leading-relaxed m-0">
            A visual storytelling walkthrough of our 33-year growth journey and the disciplined 5-phase execution standard we follow on every project.
          </p>
        </div>

        {/* STORY CHAPTER 1: THE WINDING ROADMAP JOURNEY (Image 60d190f574722bc4bc64df86f2984b40.jpg) */}
        <div className="mb-24 bg-[#F8F6F0] rounded-[28px] p-6 sm:p-10 lg:p-12 border border-[#E2DCD0] shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT: Infographic Image Shown in FULL (No cropping) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="relative rounded-[24px] bg-white p-3 sm:p-4 border-2 border-[#E2DCD0] shadow-lg w-full max-w-[420px] group">
                
                {/* Angular Tag Label on top of the image */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="tag-label shadow-md">
                    CHAPTER 01 // ROADMAP
                  </span>
                </div>

                {/* The Full Image - 100% Uncropped with object-contain */}
                <div className="rounded-[18px] overflow-hidden bg-[#FAF8F5] p-2 flex items-center justify-center">
                  <img 
                    src="/images/60d190f574722bc4bc64df86f2984b40.jpg" 
                    alt="Roadmap from Start to Goal - Project Journey" 
                    className="w-full h-auto max-h-[560px] object-contain rounded-xl transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs font-mono text-[#1A1A1A]">
                  <span className="font-bold uppercase text-[#F5B301]">THE ROAD TO SUCCESS</span>
                  <span className="text-[#6B6B6B]">START → GOAL</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: The Narrative Journey Milestones */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#F5B301]">
                  OUR 33-YEAR TIMELINE
                </span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-6">
                HOW WE BUILT A STATEWIDE CONTRACTING NETWORK
              </h3>

              {/* Milestones Vertical Sequence */}
              <div className="space-y-4 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#F5B301]/40">
                {roadmapStory.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 pl-10 group">
                    {/* Milestone Bullet */}
                    <div className="absolute left-1.5 top-1 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#F5B301] flex items-center justify-center text-[0.55rem] font-bold text-[#F5B301] group-hover:scale-125 transition-transform shadow-sm">
                      {idx + 1}
                    </div>

                    <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-[#E2DCD0] flex-grow shadow-xs group-hover:border-[#F5B301] transition-colors">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wide text-[#1A1A1A]">
                          {item.title}
                        </span>
                        <span className="text-[0.65rem] font-mono font-bold bg-[#F5B301] text-[#1A1A1A] px-2 py-0.5 rounded uppercase">
                          {item.step}
                        </span>
                      </div>
                      <p className="text-xs text-[#6B6B6B] leading-relaxed m-0">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>


        {/* STORY CHAPTER 2: THE 5-STEP PRECISION EXECUTION (Image 5f26f27889573194ef6b17740f29d8ef.jpg) */}
        <div className="bg-[#1A1A1A] text-white rounded-[28px] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Top Yellow Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F5B301]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT: Technical Process Narrative */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#F5B301]">
                  CHAPTER 02 // EXECUTION PROTOCOL
                </span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-6">
                THE 5-STEP PROTOCOL BEHIND EVERY PROJECT
              </h3>

              <div className="space-y-4">
                {executionSteps.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="bg-[#242424] p-4 sm:p-5 rounded-xl border border-white/10 hover:border-[#F5B301] transition-all flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F5B301] text-[#1A1A1A] font-heading font-black text-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      {step.num}
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-sm sm:text-base uppercase tracking-wide text-white group-hover:text-[#F5B301] transition-colors mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed m-0">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Banner */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                <div className="text-xs text-white/80">
                  <span className="font-bold text-[#F5B301]">✓ Zero Delays</span> · 100% Owned Fleet &amp; Testing Equipments
                </div>
                <a href="#contact" className="btn-primary text-xs tracking-wider">
                  <span>Start Site Consultation</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* RIGHT: Infographic Image Shown in FULL (No cropping) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2"
            >
              <div className="relative rounded-[24px] bg-[#222222] p-3 sm:p-4 border border-white/15 shadow-2xl w-full max-w-[420px] group">
                
                {/* Angular Tag Label on top */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="tag-label shadow-lg">
                    5-STEP INFOGRAPHIC
                  </span>
                </div>

                {/* The Full Image - 100% Uncropped with object-contain */}
                <div className="rounded-[18px] overflow-hidden bg-black/40 p-2 flex items-center justify-center">
                  <img 
                    src="/images/5f26f27889573194ef6b17740f29d8ef.jpg" 
                    alt="5-Phase Numbered Execution Infographic" 
                    className="w-full h-auto max-h-[560px] object-contain rounded-xl transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs font-mono text-white/80">
                  <span className="font-bold uppercase text-[#F5B301]">STEP 01 TO 05</span>
                  <span className="text-white/60">SURVEY → HANDOVER</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
