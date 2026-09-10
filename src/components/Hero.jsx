import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center bg-[#F8F6F0] bg-grid-pattern overflow-hidden pt-8 pb-16 lg:py-16">
      
      {/* Background Decorative Diagonal Yellow Slash (Equirt pattern) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5B301]/10 pointer-events-none transform skew-x-12 origin-top-right hidden lg:block" />
      
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT: Typography & CTAs (Equirt style) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center w-full"
          >
            {/* Tagline with Tejas Construction */}
            <div className="inline-flex items-center gap-2 mb-4 max-w-full">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5B301] animate-pulse flex-shrink-0" />
              <span className="font-heading font-bold text-[0.68rem] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#1A1A1A] break-words">
                TEJAS CONSTRUCTION &amp; INFRASTRUCTURE PVT. LTD. // UP GOVT APPROVED
              </span>
            </div>

            {/* Main Heading (Equirt typography style - perfectly sized for mobile & desktop) */}
            <h1 className="font-heading font-black text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[4.2rem] xl:text-[4.5rem] uppercase tracking-tight text-[#1A1A1A] leading-[1.06] sm:leading-[1.02] mb-5 sm:mb-6 break-words w-full">
              HEAVY INFRASTRUCTURE <span className="text-[#F5B301]">SOLUTIONS FOR EVERY</span> PROJECT
            </h1>

            {/* Description */}
            <p className="text-[#6B6B6B] text-sm sm:text-base lg:text-lg max-w-[52ch] leading-relaxed mb-6 sm:mb-8">
              Thirty-three years of specialized execution across Uttar Pradesh — water distribution pipeline networks, Jal Jeevan Mission, overhead reservoirs, civil construction, and heavy machinery operations.
            </p>

            {/* CTAs (Black & Yellow Pill Buttons with number 63070 41852) */}
            <div className="flex items-center gap-4 flex-wrap mb-10">
              <a href="#contact" className="btn-dark">
                <span>Request a Quote</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a href="tel:+916307041852" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Call +91 63070 41852</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E2DCD0]">
              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-[#1A1A1A]">33+</div>
                <div className="text-xs text-[#6B6B6B] uppercase font-semibold tracking-wider mt-0.5">Years Experience</div>
              </div>
              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-[#F5B301]">100%</div>
                <div className="text-xs text-[#6B6B6B] uppercase font-semibold tracking-wider mt-0.5">Own Fleet &amp; Crew</div>
              </div>
              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-[#1A1A1A]">UP</div>
                <div className="text-xs text-[#6B6B6B] uppercase font-semibold tracking-wider mt-0.5">Statewide Reach</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Equirt Yellow Shape & Full Uncropped Heavy Equipment Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Yellow Angular Background Box (Equirt style) */}
            <div className="relative rounded-[24px] bg-[#F5B301] p-3 sm:p-4 shadow-2xl overflow-hidden">
              
              {/* Construction diagonal hazard stripes top-right */}
              <div className="absolute top-0 right-0 w-28 h-7 hazard-stripes transform -skew-x-12 origin-top-right z-20" />
              
              {/* Inner White Frame */}
              <div className="relative rounded-[20px] overflow-hidden bg-white p-3 shadow-inner">
                
                {/* Visual Image - Full Uncropped View with object-contain */}
                <div className="relative rounded-[16px] overflow-hidden bg-[#0A0D12] flex items-center justify-center p-1 min-h-[380px] sm:min-h-[440px]">
                  <img 
                    src="/images/c19d0e4020579ca7135e3d398b422be8.jpg" 
                    alt="Tejas Construction Heavy Equipment and Infrastructure Solutions" 
                    className="w-full h-auto max-h-[560px] object-contain rounded-xl block mx-auto transition-transform duration-700 hover:scale-[1.02]"
                  />

                  {/* Overlay badge at bottom */}
                  <div className="absolute bottom-1 inset-x-1 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 sm:p-4 rounded-b-xl flex items-center justify-between text-white">
                    <div>
                      <div className="font-heading font-bold text-xs sm:text-sm tracking-wider uppercase text-[#F5B301]">
                        TEJAS INFRASTRUCTURE FLEET
                      </div>
                      <div className="text-[0.68rem] text-white/80">
                        Pipelines • Reservoirs • Civil Works
                      </div>
                    </div>
                    <span className="w-7 h-7 rounded-full bg-[#F5B301] text-[#1A1A1A] flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                  </div>
                </div>

                {/* Sub-card below image */}
                <div className="mt-3 px-2 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#F5B301] text-[#1A1A1A] flex items-center justify-center font-bold">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xs text-[#1A1A1A] uppercase tracking-wide">
                        Government Approved
                      </div>
                      <div className="text-[0.68rem] text-[#6B6B6B]">
                        Contractor Registered Since 1991
                      </div>
                    </div>
                  </div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider bg-[#1A1A1A] text-[#F5B301] px-2.5 py-1 rounded-full">
                    Active UP
                  </span>
                </div>
              </div>

              {/* Bottom decorative stripes */}
              <div className="flex justify-end gap-1 mt-2.5 px-3">
                <span className="w-4 h-1.5 bg-[#1A1A1A] rounded-full" />
                <span className="w-8 h-1.5 bg-[#1A1A1A] rounded-full" />
                <span className="w-2 h-1.5 bg-[#1A1A1A] rounded-full" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
