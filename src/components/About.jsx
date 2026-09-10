import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const StatCounter = ({ end, suffix = '', isDecimal = false, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const frameRate = 16;
          const totalFrames = duration / frameRate;
          const increment = end / totalFrames;
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, frameRate);
          
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
};

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#1E211D] via-[#151b24] to-[#0e131a] text-paper-3 border-b border-line/30">
      
      {/* Background blueprint grid accents */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(rgba(250, 204, 21, 0.2) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 80px 80px, 80px 80px'
        }}
      />

      {/* Atmospheric yellow/amber ambient glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-rust/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Text Content with Blur-to-Clear and Yellow Extraction */}
          <motion.div 
            initial={{ opacity: 0, y: 45, filter: 'blur(16px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Animated Eyebrow Badge (Extracts to Yellow) */}
            <motion.div 
              initial={{ opacity: 0, filter: 'blur(10px)', x: -15 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/40 text-yellow-400 font-mono text-xs font-bold tracking-widest uppercase mb-5 w-fit shadow-[0_0_15px_rgba(250,204,21,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span>// 01 · ABOUT THE ENTERPRISE</span>
            </motion.div>

            {/* Headline with dynamic color extraction to yellow */}
            <h2 className="font-heading text-[clamp(2.1rem,3.8vw,3.4rem)] font-extrabold mb-6 leading-[1.05] tracking-tight text-paper-3">
              A construction powerhouse built on{' '}
              <motion.span 
                initial={{ color: '#F1EEE4' }}
                whileInView={{ color: '#facc15' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="underline decoration-yellow-400/60 decoration-2 underline-offset-4"
              >
                Water Infrastructure
              </motion.span>{' '}
              &amp;{' '}
              <motion.span 
                initial={{ color: '#F1EEE4' }}
                whileInView={{ color: '#facc15' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="underline decoration-yellow-400/60 decoration-2 underline-offset-4"
              >
                Government Projects
              </motion.span>.
            </h2>

            {/* Body paragraphs */}
            <div className="space-y-4 text-paper-3/85 text-base sm:text-[1.05rem] leading-relaxed">
              <p>
                Sonam Sales Corporation began in 1991 as a dedicated tubewell-drilling enterprise serving agrarian and domestic requirements across Lucknow and Hardoi. Over more than three decades of uncompromised on-site execution, the firm has expanded into a full-scope civil &amp; water-infrastructure contractor.
              </p>
              <p>
                As a registered <span className="text-yellow-400 font-semibold">Government Approved</span> entity, we execute high-capacity drinking water pipelines, overhead RCC tanks, ground reservoirs, rural road networks, and Jal Jeevan Mission supply systems across Uttar Pradesh without relying on third-party subcontractors.
              </p>
            </div>

            {/* Stats row with blur-to-clear & vibrant yellow extraction */}
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10 pt-6 border-t border-line/25"
            >
              {/* Stat 1 */}
              <div className="border-t-2 border-yellow-400 pt-3 group">
                <div className="font-heading font-extrabold text-3xl sm:text-[2.2rem] text-yellow-400 leading-none drop-shadow-[0_2px_10px_rgba(250,204,21,0.25)]">
                  <StatCounter end={33} duration={2000} />
                  <span>+</span>
                </div>
                <div className="text-xs text-paper-3/70 uppercase tracking-wider font-mono mt-1.5">Years In Business</div>
              </div>

              {/* Stat 2 */}
              <div className="border-t-2 border-yellow-400 pt-3 group">
                <div className="font-heading font-extrabold text-3xl sm:text-[2.2rem] text-yellow-400 leading-none drop-shadow-[0_2px_10px_rgba(250,204,21,0.25)]">
                  <StatCounter end={1991} duration={2000} />
                </div>
                <div className="text-xs text-paper-3/70 uppercase tracking-wider font-mono mt-1.5">Established</div>
              </div>

              {/* Stat 3 */}
              <div className="border-t-2 border-yellow-400 pt-3 group">
                <div className="font-heading font-extrabold text-3xl sm:text-[2.2rem] text-yellow-400 leading-none drop-shadow-[0_2px_10px_rgba(250,204,21,0.25)]">
                  <StatCounter end={4.6} isDecimal={true} suffix="★" duration={2000} />
                </div>
                <div className="text-xs text-paper-3/70 uppercase tracking-wider font-mono mt-1.5">Public Rating</div>
              </div>

              {/* Stat 4 */}
              <div className="border-t-2 border-yellow-400 pt-3 group">
                <div className="font-heading font-extrabold text-3xl sm:text-[2.2rem] text-yellow-400 leading-none drop-shadow-[0_2px_10px_rgba(250,204,21,0.25)]">
                  <StatCounter end={92} suffix="%" duration={2000} />
                </div>
                <div className="text-xs text-paper-3/70 uppercase tracking-wider font-mono mt-1.5">Recommend Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Incoming Image with Blur-to-Clear and Yellow Extraction */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 50, filter: 'blur(22px)' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
          >
            {/* Yellow ambient backlight */}
            <div className="absolute -inset-3 bg-yellow-400/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Image Frame with Yellow Architectural Borders */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-yellow-400/40 bg-[#0e141c]/90 backdrop-blur-md shadow-2xl p-3">
              
              {/* Blueprint technical corner brackets in Yellow */}
              <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-yellow-400 z-30 pointer-events-none" />
              <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-yellow-400 z-30 pointer-events-none" />
              <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-yellow-400 z-30 pointer-events-none" />
              <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-yellow-400 z-30 pointer-events-none" />

              {/* Top HUD bar */}
              <div className="flex items-center justify-between px-3 py-1.5 mb-2 border-b border-line/20 text-[0.72rem] font-mono text-paper-3/75">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                  <span className="text-yellow-400 font-semibold tracking-wider">CIVIL DRAWING // LEVEL 01</span>
                </div>
                <span className="text-paper-3/60 font-mono">SPEC-ARCH</span>
              </div>

              {/* Image with laser color extraction scan effect */}
              <div className="relative rounded-xl overflow-hidden bg-black/40 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                
                {/* Yellow Scanning Laser Line (Color Extraction animation) */}
                <motion.div 
                  initial={{ top: '-15%', opacity: 1 }}
                  whileInView={{ top: '115%', opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: 0.35, ease: 'easeInOut' }}
                  className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-yellow-400/45 to-yellow-400 z-20 pointer-events-none shadow-[0_0_25px_rgba(250,204,21,0.9)]"
                />

                <img 
                  src="/images/650047a8f4260231218333be145a8204.jpg" 
                  alt="Construction and infrastructure planning visualization" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Bottom Architectural Blueprint Badge in Yellow */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0e141c] via-[#0e141c]/80 to-transparent p-4 z-20 flex items-center justify-between">
                  <div>
                    <div className="font-heading font-extrabold text-base text-yellow-400 tracking-wide">
                      BLUEPRINT TO INFRASTRUCTURE
                    </div>
                    <div className="text-[0.72rem] text-paper-3/80 font-mono">
                      Site Survey • Structural Planning • Handover
                    </div>
                  </div>
                  <span className="text-[0.68rem] font-mono font-bold bg-yellow-400/20 text-yellow-400 border border-yellow-400/50 px-2.5 py-1 rounded uppercase">
                    Verified
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
