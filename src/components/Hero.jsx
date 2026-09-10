import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] lg:min-h-[980px] xl:min-h-[1040px] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0a0f16] via-[#121921] to-[#1E211D] text-paper-3 pt-10 lg:pt-16 pb-0">
      
      {/* Background blueprint grid texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(rgba(241, 238, 228, 0.15) 1px, transparent 1px),
            linear-gradient(to right, rgba(195, 187, 162, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(195, 187, 162, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 80px 80px, 80px 80px'
        }}
      />

      {/* Atmospheric ambient glow */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-rust/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-water/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Content & Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2.5 text-xs font-mono font-semibold tracking-wider uppercase border border-rust/40 bg-rust/15 text-paper-3 px-3.5 py-1.5 rounded-full mb-5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>UP Government Approved · Est. 1991</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-[clamp(2.5rem,5.2vw,4.8rem)] max-w-[15ch] font-extrabold leading-[0.96] tracking-tight text-paper-3">
              Building Heavy Infrastructure That Powers Communities.
            </h1>

            {/* Paragraph lede */}
            <p className="text-base sm:text-lg lg:text-xl max-w-[50ch] mt-6 text-paper-3/85 font-normal leading-relaxed">
              Sonam Sales Corporation undertakes government & private infrastructure contracts across Uttar Pradesh — water supply pipelines, Jal Jeevan Mission, overhead reservoirs, civil construction, and industrial borewell drilling.
            </p>

            {/* Key stats row in hero */}
            <div className="grid grid-cols-3 gap-3 my-7 py-4 border-y border-line/25">
              <div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-ochre">33+ Years</div>
                <div className="text-[0.75rem] text-paper-3/70 uppercase tracking-wider mt-0.5">On Ground Experience</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-rust">100% Own</div>
                <div className="text-[0.75rem] text-paper-3/70 uppercase tracking-wider mt-0.5">Machinery & Crew</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-water-soft">UP Wide</div>
                <div className="text-[0.75rem] text-paper-3/70 uppercase tracking-wider mt-0.5">District Coverage</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-4 flex-wrap mt-1">
              <a 
                href="tel:+919889556111" 
                className="inline-flex items-center gap-2.5 bg-rust border border-rust text-paper-3 px-7 py-4 font-semibold text-base hover:bg-rust-dark transition-all rounded shadow-lg shadow-rust/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Call +91 98895 56111</span>
              </a>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2.5 bg-white/5 border border-paper-3/30 text-paper-3 px-7 py-4 font-semibold text-base hover:bg-paper-3 hover:text-ink transition-all rounded backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request a Site Visit</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Full, Complete Image Showcase with Animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[460px] group">
              
              {/* Pulsing ambient backlight */}
              <div className="absolute -inset-2 bg-gradient-to-r from-rust/35 via-ochre/25 to-water/35 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Floating animation container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-2xl overflow-hidden border-2 border-line/35 bg-[#0e141c]/90 backdrop-blur-md shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] p-2.5 sm:p-3"
              >
                {/* Blueprint technical corner marks */}
                <div className="absolute top-1.5 left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-rust z-20 pointer-events-none" />
                <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-rust z-20 pointer-events-none" />
                <div className="absolute bottom-1.5 left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-rust z-20 pointer-events-none" />
                <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-rust z-20 pointer-events-none" />

                {/* Industrial HUD Bar */}
                <div className="flex items-center justify-between px-3 py-1.5 mb-2 border-b border-line/25 text-[0.72rem] font-mono text-paper-3/75">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rust animate-pulse" />
                    <span className="font-semibold tracking-wider text-paper-3">CORE INDUSTRIAL POWER</span>
                  </div>
                  <span className="text-ochre">GRID // 26.88°N</span>
                </div>

                {/* THE COMPLETE IMAGE - Displayed in full aspect ratio without cropping */}
                <div className="relative rounded-xl overflow-hidden bg-black/50 shadow-inner">
                  <img 
                    src="/images/c19d0e4020579ca7135e3d398b422be8.jpg" 
                    alt="Sonatek Steels - Industrial Construction & Water Infrastructure" 
                    className="w-full h-auto max-h-[580px] sm:max-h-[620px] object-contain block mx-auto transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Sleek bottom overlay strip */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0e141c] via-[#0e141c]/70 to-transparent p-3 sm:p-4 flex items-center justify-between">
                    <div>
                      <div className="font-heading font-extrabold text-base sm:text-lg text-paper-3 tracking-wide flex items-center gap-2">
                        <span>STEEL & CIVIL CONTRACTOR</span>
                      </div>
                      <div className="text-[0.72rem] text-paper-3/75 font-mono">
                        Sheets, Coils, Pipelines & Water Works
                      </div>
                    </div>
                    <span className="text-[0.68rem] font-mono font-bold bg-rust/90 text-paper-3 px-2.5 py-1 rounded shadow uppercase">
                      Active
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Seamless bottom connection to the next section */}
      <div className="relative z-20 w-full mt-8 pb-4 flex justify-center">
        <div className="w-full max-w-[1240px] px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
        </div>
      </div>

    </section>
  );
};

export default Hero;
